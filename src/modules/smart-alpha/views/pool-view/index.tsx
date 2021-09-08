import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';
import { formatPercent, formatToken, formatUSD } from 'web3/utils';

import { Button, Link } from 'components/button';
import { Badge } from 'components/custom/badge';
import { Spinner } from 'components/custom/spinner';
import { InfoTooltip } from 'components/custom/tooltip';
import { Text } from 'components/custom/typography';
import { Modal } from 'components/modal';
import { useConfig } from 'components/providers/configProvider';
import { getAsset, isEthAsset, isUsdAsset, useTokens } from 'components/providers/tokensProvider';
import { TokenIcon } from 'components/token-icon';
import { useContractFactory } from 'hooks/useContract';
import { UseLeftTime } from 'hooks/useLeftTime';
import { useFetchPool } from 'modules/smart-alpha/api';
import LoupeContract from 'modules/smart-alpha/contracts/loupeContract';
import SmartAlphaContract, { SMART_ALPHA_DECIMALS } from 'modules/smart-alpha/contracts/smartAlphaContract';
import { useWallet } from 'wallets/walletProvider';

import { TransactionsTable } from '../../components/transactions';
import { PoolPerformance } from './pool-performance';
import { PreviousEpochs } from './previous-epochs';
import { TokensPrice } from './tokens-price';

import { getFormattedDuration } from 'utils';

import s from './s.module.scss';

const PoolView = () => {
  const { id: poolAddress } = useParams<{ id: string }>();
  const location = useLocation();
  const config = useConfig();
  const { data: pool } = useFetchPool(poolAddress);
  const { getToken } = useTokens();
  const wallet = useWallet();
  const [previousEpochVisible, setPreviousEpochVisible] = useState<boolean>(false);

  const { getOrCreateContract } = useContractFactory();

  const smartAlphaContract = useMemo(() => {
    if (!pool) {
      return;
    }

    return getOrCreateContract(
      pool.poolAddress,
      () => {
        return new SmartAlphaContract(pool.poolAddress);
      },
      {
        afterInit: async contract => {
          await contract.loadCommon();
          console.log('SA', contract, pool);
        },
      },
    );
  }, [pool]);

  const loupeContract = useMemo(() => {
    const loupeAddress = config.contracts.sa?.loupe;

    if (!loupeAddress) {
      return;
    }

    return getOrCreateContract(loupeAddress, () => {
      return new LoupeContract(loupeAddress);
    });
  }, [pool]);

  const [nextEpochEstimates, setNextEpochEstimates] = useState<(BigNumber | undefined)[]>([]);

  useEffect(() => {
    if (!smartAlphaContract?.address || !loupeContract) {
      return;
    }

    loupeContract.getEstimateNextEpoch(smartAlphaContract.address).then(result => {
      setNextEpochEstimates(result);
    });
  }, [smartAlphaContract, loupeContract]);

  const nextEpochSeniorLiquidityRate = useMemo(() => {
    if (!nextEpochEstimates[0] || !nextEpochEstimates[1]) {
      return 0;
    }

    const totalLiquidity = nextEpochEstimates[0].plus(nextEpochEstimates[1]);
    return nextEpochEstimates[1]?.div(totalLiquidity).toNumber();
  }, [nextEpochEstimates]);

  const nextEpochJuniorLiquidityRate = useMemo(() => {
    if (!nextEpochEstimates[0] || !nextEpochEstimates[1]) {
      return 0;
    }

    const totalLiquidity = nextEpochEstimates[0].plus(nextEpochEstimates[1]);
    return nextEpochEstimates[0]?.div(totalLiquidity).toNumber();
  }, [nextEpochEstimates]);

  if (!pool) {
    return <Spinner style={{ margin: 'auto' }} />;
  }

  const poolToken = getToken(pool.poolToken.symbol);
  const oracleToken = getAsset(pool.oracleAssetSymbol);

  const priceScaleDecimals = isEthAsset(pool.oracleAssetSymbol) ? 18 : 8; // TODO: review

  return (
    <div className="container-limit">
      <div className="mb-16">
        <Link to="/smart-alpha" variation="text-alt" icon="arrow" iconPosition="left" iconRotate={180}>
          Pools
        </Link>
      </div>
      <div className="flex align-center mb-40">
        <div className="flex align-center">
          <TokenIcon
            name={poolToken?.icon ?? 'unknown'}
            size={40}
            bubble2Name={oracleToken?.icon ?? 'unknown'}
            className="mr-16"
          />
          <div>
            <Text type="p1" weight="semibold" color="primary" tag="h2" className="mb-4">
              {pool.poolName}
            </Text>
            <Text type="small" weight="semibold" color="red">
              Epoch {smartAlphaContract?.epoch ?? pool.state.epoch ?? '-'}
            </Text>
          </div>
        </div>
        <div className="flex col-gap-24 ml-auto">
          <Link to={`${location.pathname}/simulate-epoch`} variation="ghost">
            Simulate
          </Link>
          <Link to={`${location.pathname}/deposit`} variation="primary" aria-disabled={!wallet.account}>
            Deposit
          </Link>
        </div>
      </div>
      <div className={classNames(s.cards, 'mb-12')}>
        <section className={classNames(s.epochCard, s.epochCardPrimary)}>
          <div className={s.epochCardTitleWrap}>
            <Text type="lb2" weight="bold" tag="h3" color="red" className={s.epochCardTitle}>
              EPOCH {smartAlphaContract?.epoch ?? '-'} - IN PROGRESS
            </Text>
          </div>
          <header className={classNames(s.epochCardHeader, 'mb-24')}>
            <div className={s.epochCardHeaderItem}>
              <div className="flex align-center col-gap-8">
                <Text type="h3" weight="bold" color="primary" className="mb-4">
                  TBD
                </Text>
                <Badge color="purple" size="small">
                  Junior
                </Badge>
              </div>
              <Text type="small" weight="semibold" color="secondary" className="flex align-middle col-gap-4">
                Upside leverage
                <InfoTooltip>Junior positions will have their upside amplified by this much</InfoTooltip>
              </Text>
            </div>
            <div className={s.epochCardHeaderItem}>
              <div className="flex align-center col-gap-8">
                <Text type="h3" weight="bold" color="primary" className="mb-4">
                  TBD
                </Text>
                <Badge color="purple" size="small">
                  Junior
                </Badge>
              </div>
              <Text type="small" weight="semibold" color="secondary" className="flex align-middle col-gap-4">
                Downside leverage
                <InfoTooltip>
                  How much of every 1% move to the downside in the underlying asset a junior position will have exposure
                  to.
                  <br />
                  <br />
                  The downside leverage is only applicable until senior downside protection is fully covered, and junior
                  losses are fully realized.
                </InfoTooltip>
              </Text>
            </div>
            <div className={s.epochCardHeaderItem}>
              <div className="flex align-center col-gap-8">
                <Text type="h3" weight="bold" color="primary" className="mb-4">
                  {formatPercent(smartAlphaContract?.epochUpsideExposureRate?.unscaleBy(SMART_ALPHA_DECIMALS)) ?? '-'}
                </Text>
                <Badge color="green" size="small">
                  Senior
                </Badge>
              </div>
              <Text type="small" weight="semibold" color="secondary" className="flex align-middle col-gap-4">
                Upside exposure rate
                <InfoTooltip>
                  How much of every 1% move to the upside in the underlying asset a senior position will have exposure
                  to.
                </InfoTooltip>
              </Text>
            </div>
            <div className={s.epochCardHeaderItem}>
              <div className="flex align-center col-gap-8">
                <Text type="h3" weight="bold" color="primary" className="mb-4">
                  {formatPercent(smartAlphaContract?.epochDownsideProtectionRate?.unscaleBy(SMART_ALPHA_DECIMALS)) ??
                    '-'}
                </Text>
                <Badge color="green" size="small">
                  Senior
                </Badge>
              </div>
              <Text type="small" weight="semibold" color="secondary" className="flex align-middle col-gap-4">
                Downside protection rate
                <InfoTooltip>
                  How much the underlying asset can decline before a senior position takes on losses.
                </InfoTooltip>
              </Text>
            </div>
          </header>
          <div className="ph-24 pb-16">
            <dl>
              <div className={s.epochCardDlRow}>
                <dt>
                  <Text type="small" weight="semibold" color="secondary">
                    {pool.poolToken.symbol} epoch entry price
                  </Text>
                </dt>
                <dd className="flex align-center">
                  <Text
                    type="p1"
                    weight="semibold"
                    color="primary"
                    tooltip={formatToken(smartAlphaContract?.epochEntryPrice?.unscaleBy(priceScaleDecimals), {
                      tokenName: pool.oracleAssetSymbol,
                      decimals: priceScaleDecimals,
                    })}>
                    {(isUsdAsset(pool.oracleAssetSymbol)
                      ? formatUSD(smartAlphaContract?.epochEntryPrice?.unscaleBy(priceScaleDecimals))
                      : formatToken(smartAlphaContract?.epochEntryPrice?.unscaleBy(priceScaleDecimals))) ?? '-'}
                  </Text>
                  {!isUsdAsset(pool.oracleAssetSymbol) && (
                    <TokenIcon name={oracleToken?.icon ?? 'unknown'} size={16} className="ml-8" />
                  )}
                </dd>
              </div>
              <div className={s.epochCardDlRow}>
                <dt className="flex align-center">
                  <Text type="small" weight="semibold" color="secondary">
                    Senior liquidity
                  </Text>
                  <span
                    className="middle-dot color-border ml-8"
                    style={{ '--dot-color': 'var(--theme-green-color)' } as React.CSSProperties}
                  />
                </dt>
                <dd className="flex align-center">
                  <Text
                    type="p1"
                    weight="semibold"
                    color="primary"
                    tooltip={
                      <Text type="p2" color="primary" className="flex flow-row row-gap-4">
                        <span>
                          {formatToken(
                            smartAlphaContract?.epochSeniorLiquidity?.unscaleBy(pool.poolToken.decimals) ??
                              BigNumber.from(pool.state.seniorLiquidity),
                            {
                              tokenName: poolToken?.symbol,
                              decimals: poolToken?.decimals,
                            },
                          )}
                        </span>
                        <span>
                          {formatUSD(
                            (
                              smartAlphaContract?.epochSeniorLiquidity?.unscaleBy(pool.poolToken.decimals) ??
                              BigNumber.from(pool.state.seniorLiquidity)
                            )?.multipliedBy(poolToken?.price ?? 0),
                          )}
                        </span>
                      </Text>
                    }
                    className="mr-8">
                    {formatToken(
                      smartAlphaContract?.epochSeniorLiquidity?.unscaleBy(pool.poolToken.decimals) ??
                        BigNumber.from(pool.state.seniorLiquidity),
                      {
                        decimals: pool.poolToken.decimals,
                        compact: true,
                      },
                    ) ?? '-'}
                  </Text>
                  <TokenIcon name={poolToken?.icon ?? 'unknown'} size={16} />
                </dd>
              </div>
              <div className={s.epochCardDlRow}>
                <dt className="flex align-center">
                  <Text type="small" weight="semibold" color="secondary">
                    Junior liquidity
                  </Text>
                  <span
                    className="middle-dot color-border ml-8"
                    style={{ '--dot-color': 'var(--theme-purple-color)' } as React.CSSProperties}
                  />
                </dt>
                <dd className="flex align-center">
                  <Text
                    type="p1"
                    weight="semibold"
                    color="primary"
                    tooltip={
                      <Text type="p2" color="primary" className="flex flow-row row-gap-4">
                        <span>
                          {formatToken(
                            smartAlphaContract?.epochJuniorLiquidity?.unscaleBy(pool.poolToken.decimals) ??
                              BigNumber.from(pool.state.juniorLiquidity),
                            {
                              tokenName: poolToken?.symbol,
                              decimals: poolToken?.decimals,
                            },
                          )}
                        </span>
                        <span>
                          {formatUSD(
                            (
                              smartAlphaContract?.epochJuniorLiquidity?.unscaleBy(pool.poolToken.decimals) ??
                              BigNumber.from(pool.state.juniorLiquidity)
                            )?.multipliedBy(poolToken?.price ?? 0),
                          )}
                        </span>
                      </Text>
                    }
                    className="mr-8">
                    {formatToken(smartAlphaContract?.epochJuniorLiquidity?.unscaleBy(pool.poolToken.decimals), {
                      decimals: pool.poolToken.decimals,
                      compact: true,
                    }) ?? '-'}
                  </Text>
                  <TokenIcon name={poolToken?.icon ?? 'unknown'} size={16} />
                </dd>
              </div>
            </dl>
            <div
              className={classNames(s.progress, 'mb-8')}
              style={
                {
                  '--pool-epoch-tranche-percentage': (smartAlphaContract?.epochSeniorLiquidityRate ?? 0) * 100,
                } as React.CSSProperties
              }
            />
            <div className="flex align-center">
              <Text type="small" weight="semibold" color="green">
                {formatPercent(smartAlphaContract?.epochSeniorLiquidityRate) ?? '-'}
              </Text>
              <Text type="small" weight="semibold" color="purple" className="ml-auto">
                {formatPercent(smartAlphaContract?.epochJuniorLiquidityRate) ?? '-'}
              </Text>
            </div>
            <div className="flex justify-center mt-8">
              <Button variation="text" color="red">
                View queue state
              </Button>
            </div>
          </div>
        </section>
        <section className={classNames(s.epochCard, s.epochCardSecondary)}>
          <div className={s.epochCardTitleWrap}>
            <Text type="lb2" weight="bold" tag="h3" color="secondary" className={s.epochCardTitle}>
              EPOCH {smartAlphaContract?.currentEpoch ? smartAlphaContract.currentEpoch + 1 : '-'} - ESTIMATES
            </Text>
          </div>
          <header className={classNames(s.epochCardHeader, 'mb-24')}>
            <div className={s.epochCardHeaderItem}>
              <div className="flex align-center col-gap-8">
                <Text type="h3" weight="bold" color="primary" className="mb-4">
                  TBD
                </Text>
                <Badge color="purple" size="small">
                  Junior
                </Badge>
              </div>
              <Text type="small" weight="semibold" color="secondary" className="flex align-middle col-gap-4">
                Upside leverage
                <InfoTooltip>Junior positions will have their upside amplified by this much</InfoTooltip>
              </Text>
            </div>
            <div className={s.epochCardHeaderItem}>
              <div className="flex align-center col-gap-8">
                <Text type="h3" weight="bold" color="primary" className="mb-4">
                  TBD
                </Text>
                <Badge color="purple" size="small">
                  Junior
                </Badge>
              </div>
              <Text type="small" weight="semibold" color="secondary" className="flex align-middle col-gap-4">
                Downside leverage
                <InfoTooltip>
                  How much of every 1% move to the downside in the underlying asset a junior position will have exposure
                  to.
                  <br />
                  <br />
                  The downside leverage is only applicable until senior downside protection is fully covered, and junior
                  losses are fully realized.
                </InfoTooltip>
              </Text>
            </div>
            <div className={s.epochCardHeaderItem}>
              <div className="flex align-center col-gap-8">
                <Text type="h3" weight="bold" color="primary" className="mb-4">
                  {formatPercent(nextEpochEstimates[2]?.unscaleBy(SMART_ALPHA_DECIMALS)) ?? '-'}
                </Text>
                <Badge color="green" size="small">
                  Senior
                </Badge>
              </div>
              <Text type="small" weight="semibold" color="secondary" className="flex align-middle col-gap-4">
                Upside exposure rate
                <InfoTooltip>
                  How much of every 1% move to the upside in the underlying asset a senior position will have exposure
                  to.
                </InfoTooltip>
              </Text>
            </div>
            <div className={s.epochCardHeaderItem}>
              <div className="flex align-center col-gap-8">
                <Text type="h3" weight="bold" color="primary" className="mb-4">
                  {formatPercent(nextEpochEstimates[3]?.unscaleBy(SMART_ALPHA_DECIMALS)) ?? '-'}
                </Text>
                <Badge color="green" size="small">
                  Senior
                </Badge>
              </div>
              <Text type="small" weight="semibold" color="secondary" className="flex align-middle col-gap-4">
                Downside protection rate
                <InfoTooltip>
                  How much the underlying asset can decline before a senior position takes on losses.
                </InfoTooltip>
              </Text>
            </div>
          </header>
          <div className="ph-24 pb-16">
            <dl>
              <div className={s.epochCardDlRow}>
                <dt>
                  <Text type="small" weight="semibold" color="secondary">
                    {pool.poolToken.symbol} epoch entry price
                  </Text>
                </dt>
                <dd className="flex align-center">
                  <Text
                    type="p1"
                    weight="semibold"
                    color="primary"
                    tooltip={formatToken(nextEpochEstimates[4]?.unscaleBy(priceScaleDecimals), {
                      tokenName: pool.oracleAssetSymbol,
                      decimals: priceScaleDecimals,
                    })}>
                    {(isUsdAsset(pool.oracleAssetSymbol)
                      ? formatUSD(nextEpochEstimates[4]?.unscaleBy(priceScaleDecimals))
                      : formatToken(nextEpochEstimates[4]?.unscaleBy(priceScaleDecimals))) ?? '-'}
                  </Text>
                  {!isUsdAsset(pool.oracleAssetSymbol) && (
                    <TokenIcon name={oracleToken?.icon ?? 'unknown'} size={16} className="ml-8" />
                  )}
                </dd>
              </div>
              <div className={s.epochCardDlRow}>
                <dt className="flex align-center">
                  <Text type="small" weight="semibold" color="secondary">
                    Senior liquidity
                  </Text>
                  <span
                    className="middle-dot color-border ml-8"
                    style={{ '--dot-color': 'var(--theme-green-color)' } as React.CSSProperties}
                  />
                </dt>
                <dd className="flex align-center">
                  <Text
                    type="p1"
                    weight="semibold"
                    color="primary"
                    tooltip={
                      <Text type="p2" color="primary" className="flex flow-row row-gap-4">
                        <span>
                          {formatToken(nextEpochEstimates[1]?.unscaleBy(pool.poolToken.decimals), {
                            tokenName: poolToken?.symbol,
                            decimals: poolToken?.decimals,
                          })}
                        </span>
                        <span>
                          {formatUSD(
                            nextEpochEstimates[1]
                              ?.unscaleBy(pool.poolToken.decimals)
                              ?.multipliedBy(poolToken?.price ?? 0),
                          )}
                        </span>
                      </Text>
                    }
                    className="mr-8">
                    {formatToken(nextEpochEstimates[1]?.unscaleBy(pool.poolToken.decimals), {
                      decimals: pool.poolToken.decimals,
                      compact: true,
                    }) ?? '-'}
                  </Text>
                  <TokenIcon name={poolToken?.icon ?? 'unknown'} size={16} />
                </dd>
              </div>
              <div className={s.epochCardDlRow}>
                <dt className="flex align-center">
                  <Text type="small" weight="semibold" color="secondary">
                    Junior liquidity
                  </Text>
                  <span
                    className="middle-dot color-border ml-8"
                    style={{ '--dot-color': 'var(--theme-purple-color)' } as React.CSSProperties}
                  />
                </dt>
                <dd className="flex align-center">
                  <Text
                    type="p1"
                    weight="semibold"
                    color="primary"
                    tooltip={
                      <Text type="p2" color="primary" className="flex flow-row row-gap-4">
                        <span>
                          {formatToken(nextEpochEstimates[0]?.unscaleBy(pool.poolToken.decimals), {
                            tokenName: poolToken?.symbol,
                            decimals: poolToken?.decimals,
                          })}
                        </span>
                        <span>
                          {formatUSD(
                            nextEpochEstimates[0]
                              ?.unscaleBy(pool.poolToken.decimals)
                              ?.multipliedBy(poolToken?.price ?? 0),
                          )}
                        </span>
                      </Text>
                    }
                    className="mr-8">
                    {formatToken(nextEpochEstimates[0]?.unscaleBy(pool.poolToken.decimals), {
                      decimals: pool.poolToken.decimals,
                      compact: true,
                    }) ?? '-'}
                  </Text>
                  <TokenIcon name={poolToken?.icon ?? 'unknown'} size={16} />
                </dd>
              </div>
            </dl>
            <div
              className={classNames(s.progress, 'mb-8')}
              style={
                {
                  '--pool-epoch-tranche-percentage': (nextEpochSeniorLiquidityRate ?? 0) * 100,
                } as React.CSSProperties
              }
            />
            <div className="flex align-center">
              <Text type="small" weight="semibold" color="green">
                {formatPercent(nextEpochSeniorLiquidityRate) ?? '-'}
              </Text>
              <Text type="small" weight="semibold" color="purple" className="ml-auto">
                {formatPercent(nextEpochJuniorLiquidityRate) ?? '-'}
              </Text>
            </div>
          </div>
        </section>
      </div>
      <div className={classNames(s.epochProgress, 'mb-4')}>
        <div className={s.epochProgressLineBefore} />
        <div className="flex align-center">
          <span className={s.epochProgressCurrent}>{smartAlphaContract?.epoch ?? '-'}</span>
          <div className={s.epochProgressLineMiddle} style={{ '--epoch-progress': 70 } as React.CSSProperties} />
          <span className={s.epochProgressNext}>
            {smartAlphaContract?.currentEpoch ? smartAlphaContract?.currentEpoch + 1 : '-'}
          </span>
        </div>
        <div className={s.epochProgressLineAfter} />
      </div>
      <div className="flex align-center mb-32">
        <Button variation="text" color="red" onClick={() => setPreviousEpochVisible(true)}>
          View previous epochs
        </Button>
        <UseLeftTime delay={1_000}>
          {() => (
            <Text type="p2" weight="bold" color="primary" className="ml-auto">
              {getFormattedDuration(smartAlphaContract?.tillNextEpoch)}
            </Text>
          )}
        </UseLeftTime>
        <Text type="p2" weight="semibold" color="secondary" className="ml-4">
          until next epoch
        </Text>
      </div>
      <TokensPrice poolAddress={poolAddress} tokenSymbol={pool.poolToken.symbol} className="mb-32" />
      <PoolPerformance poolAddress={poolAddress} className="mb-32" />
      <TransactionsTable poolAddress={poolAddress} />
      {previousEpochVisible && (
        <Modal
          heading={
            <div className="flex align-center">
              <TokenIcon
                name={poolToken?.icon ?? 'unknown'}
                size={40}
                bubble2Name={oracleToken?.icon ?? 'unknown'}
                className="mr-16"
              />
              <div>
                <Text type="p1" weight="semibold" color="primary" tag="h2" className="mb-4">
                  Previous epochs
                </Text>
                <Text type="small" weight="semibold" color="secondary">
                  {pool.poolName}
                </Text>
              </div>
            </div>
          }
          closeHandler={() => setPreviousEpochVisible(false)}
          fullscreen>
          <PreviousEpochs poolTokenSymbol={pool.poolToken.symbol} />
        </Modal>
      )}
    </div>
  );
};

export default PoolView;
