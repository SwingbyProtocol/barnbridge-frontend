import { FC, createContext, useCallback, useContext, useEffect, useRef } from 'react';
import BigNumber from 'bignumber.js';
import { AbiItem } from 'web3-utils';
import Erc20Contract from 'web3/erc20Contract';
import { createAbiItem } from 'web3/web3Contract';

import { useNetwork } from 'components/providers/networkProvider';
import { TokenIconNames } from 'components/token-icon';
import { useReload } from 'hooks/useReload';

import { MainnetNetwork } from 'networks/mainnet';
import { RopstenNetwork } from 'networks/ropsten';

import {
  MainnetHttpsWeb3Provider,
} from './web3Provider';

import { InvariantContext } from 'utils/context';
import { queryfy } from 'utils/fetch';

import { Web3Network } from 'networks/types';

export enum Tokens {
  WBTC = 'WBTC',
  WETH = 'WETH',
  USDC = 'USDC',
  USDT = 'USDT',
  SUSD = 'sUSD',
  GUSD = 'GUSD',
  DAI = 'DAI',
  RAI = 'RAI',
  STK_AAVE = 'stkAAVE',
  WMATIC = 'WMATIC',
  WAVAX = 'WAVAX',
  SWINGBY = 'SWINGBY',
  UNIV2 = 'UNI-V2',
  BTC = 'BTC',
  USD = 'USD',
  XSUSHI = 'xSUSHI',
  SUSHI = 'SUSHI',
  LINK = 'LINK',
  UNI = 'UNI',
  FEI = 'FEI',
  BNB = 'BNB',
  CAKE = 'CAKE',
  AAVE = 'AAVE',
  DPI = 'DPI',
  sbBTC = 'sbBTC',
}

export type BaseTokenType = {
  // address: string;
  symbol: string;
  name: string;
  decimals: number;
  icon: TokenIconNames;
};

const WBTC: BaseTokenType = {
  // address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  symbol: Tokens.WBTC,
  name: 'Wrapped BTC',
  decimals: 8,
  icon: 'wbtc',
};

const sbBTC: BaseTokenType = {
  // address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  symbol: Tokens.sbBTC,
  name: 'sbBTC Token',
  decimals: 8,
  icon: 'sbbtc',
};

const WETH: BaseTokenType = {
  // address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  symbol: Tokens.WETH,
  name: 'Wrapped Ether',
  decimals: 18,
  icon: 'weth',
};

const USDC: BaseTokenType = {
  // address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  symbol: Tokens.USDC,
  name: 'USD Coin',
  decimals: 6,
  icon: 'usdc',
};

const USDT: BaseTokenType = {
  // address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  symbol: Tokens.USDT,
  name: 'Tether USD',
  decimals: 6,
  icon: 'usdt',
};

const SUSD: BaseTokenType = {
  // address: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
  symbol: Tokens.SUSD,
  name: 'Synth sUSD',
  decimals: 18,
  icon: 'susd',
};

const GUSD: BaseTokenType = {
  // address: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
  symbol: Tokens.GUSD,
  name: 'Gemini dollar',
  decimals: 2,
  icon: 'gusd',
};

const DAI: BaseTokenType = {
  // address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  symbol: Tokens.DAI,
  name: 'Dai Stablecoin',
  decimals: 18,
  icon: 'dai',
};

const RAI: BaseTokenType = {
  // address: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
  symbol: Tokens.RAI,
  name: 'Rai Reflex Index',
  decimals: 18,
  icon: 'rai',
};

const AAVE: BaseTokenType = {
  // address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  symbol: Tokens.AAVE,
  name: 'Aave',
  decimals: 18,
  icon: 'aave',
};

const STK_AAVE: BaseTokenType = {
  // address: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
  symbol: Tokens.STK_AAVE,
  name: 'Staked Aave',
  decimals: 18,
  icon: 'stkaave',
};

const MATIC: BaseTokenType = {
  // address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
  symbol: Tokens.WMATIC,
  name: 'Polygon (MATIC)',
  decimals: 18,
  icon: 'wmatic',
};

const WAVAX: BaseTokenType = {
  // address: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
  symbol: Tokens.WAVAX,
  name: 'Avalanche',
  decimals: 18,
  icon: 'wavax',
};

const SWINGBY: BaseTokenType = {
  // address: '0x0391d2021f89dc339f60fff84546ea23e337750f',
  symbol: Tokens.SWINGBY,
  name: 'SWINGBY Token',
  decimals: 18,
  icon: 'bond',
};

const UNIV2: BaseTokenType = {
  // address: '0x6591c4bcd6d7a1eb4e537da8b78676c1576ba244',
  symbol: Tokens.UNIV2,
  name: 'Uniswap V2',
  decimals: 18,
  icon: 'uniswap',
};

const SUSHI: BaseTokenType = {
  // address: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
  symbol: Tokens.SUSHI,
  name: 'SUSHI',
  decimals: 18,
  icon: 'sushi',
};

const XSUSHI: BaseTokenType = {
  // address: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
  symbol: Tokens.XSUSHI,
  name: 'xSUSHI',
  decimals: 18,
  icon: 'xsushi',
};

const LINK: BaseTokenType = {
  // address: '0x514910771af9ca656af840dff83e8264ecf986ca',
  symbol: Tokens.LINK,
  name: 'Chainlink',
  decimals: 18,
  icon: 'link',
};

const UNI: BaseTokenType = {
  // address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  symbol: Tokens.UNI,
  name: 'Uniswap',
  decimals: 18,
  icon: 'uni',
};

const FEI: BaseTokenType = {
  // address: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
  symbol: Tokens.FEI,
  name: 'Fei Protocol',
  decimals: 18,
  icon: 'fei',
};

const BNB: BaseTokenType = {
  symbol: Tokens.BNB,
  name: 'Binance Coin',
  decimals: 18,
  icon: 'bnb',
};

const CAKE: BaseTokenType = {
  symbol: Tokens.CAKE,
  name: 'PancakeSwap',
  decimals: 18,
  icon: 'cake',
};

const DPI: BaseTokenType = {
  symbol: Tokens.DPI,
  name: 'DeFiPulse Index',
  decimals: 18,
  icon: 'dpi',
};

export const ProjectToken: BaseTokenType & {
  address: string;
} = {
  ...SWINGBY,
  address: '0x02ce048c863b76ed7397f18da654475e123503ac',
};

export enum Assets {
  BTC = 'BTC',
  ETH = 'ETH',
  USD = 'USD',
}

export type BaseAssetType = {
  symbol: string;
  decimals: number;
  icon: TokenIconNames;
};

const BTC: BaseAssetType = {
  symbol: Assets.BTC,
  decimals: WBTC.decimals,
  icon: 'wbtc',
};
const ETH: BaseAssetType = {
  symbol: Assets.ETH,
  decimals: WETH.decimals,
  icon: 'eth',
};
const USD: BaseAssetType = {
  symbol: Assets.USD,
  decimals: 2,
  icon: 'usd',
};

export type TokenType = BaseTokenType & {
  price?: BigNumber;
};

type AssetType = BaseAssetType & {
  price?: BigNumber;
};

export type TokensContextType = {
  version: number;
  getToken(symbol?: string, network?: Web3Network): TokenType | undefined;
  getAsset(symbol?: string): AssetType | undefined;
  getAmountInUSD(
    amount: BigNumber | undefined,
    source: string | undefined,
    network?: Web3Network,
  ): BigNumber | undefined;
};

const Context = createContext<TokensContextType>(InvariantContext('TokensProvider'));

export function useTokens(): TokensContextType {
  return useContext(Context);
}

const CHAINLINK_PRICE_FEED_ABI: AbiItem[] = [
  createAbiItem('decimals', [], ['int8']),
  createAbiItem('latestAnswer', [], ['int256']),
];

const UNISWAP_V2_BOND_USDC_ABI: AbiItem[] = [
  createAbiItem('totalSupply', [], ['uint256']),
  createAbiItem('getReserves', [], ['uint112', 'uint112']),
];

async function getChainlinkFeedPrice(
  feedAddress: string,
  provider: any = MainnetHttpsWeb3Provider,
): Promise<BigNumber | undefined> {
  const contract = new Erc20Contract(CHAINLINK_PRICE_FEED_ABI, feedAddress);
  contract.setCallProvider(provider);

  const [decimals, latestAnswer] = await contract.batch([
    { method: 'decimals', transform: Number },
    { method: 'latestAnswer', transform: BigNumber.from },
  ]);

  return latestAnswer?.unscaleBy(decimals);
}

async function getGeckoPrice(symbol: string): Promise<BigNumber | undefined> {
  const query = queryfy({
    ids: [symbol],
    vs_currencies: 'usd',
  });

  const url = new URL(`/api/v3/simple/price?${query}`, 'https://api.coingecko.com');
  const result = await fetch(String(url)).then(response => response.json());

  return BigNumber.from(result[symbol].usd);
}

export async function getBondPrice(poolAddress: string): Promise<BigNumber | undefined> {
  const contract = new Erc20Contract(UNISWAP_V2_BOND_USDC_ABI, poolAddress);
  contract.setCallProvider(MainnetHttpsWeb3Provider);

  const [[reserve0, reserve1]] = await contract.batch([
    {
      method: 'getReserves',
      transform: ({ 0: reserve0, 1: reserve1 }) => [BigNumber.from(reserve0), BigNumber.from(reserve1)],
    },
  ]);

  const bondReserve = reserve0.unscaleBy(18);
  const usdcReserve = reserve1.unscaleBy(6);

  return usdcReserve?.dividedBy(bondReserve);
}

export async function getUniV2Price(poolAddress: string): Promise<BigNumber | undefined> {
  const contract = new Erc20Contract(UNISWAP_V2_BOND_USDC_ABI, poolAddress);
  contract.setCallProvider(MainnetHttpsWeb3Provider);

  const [reserve1, totalSupply] = await contract.batch([
    {
      method: 'getReserves',
      transform: ({ 1: reserve1 }) => BigNumber.from(reserve1),
    },
    { method: 'totalSupply', transform: BigNumber.from },
  ]);

  const usdcReserve = reserve1.unscaleBy(6);
  const supply = totalSupply.unscaleBy(18);

  return usdcReserve?.dividedBy(supply).multipliedBy(2);
}

async function getPriceFor(symbol: string, network: Web3Network = MainnetNetwork): Promise<BigNumber | undefined> {
  if (symbol.toUpperCase() === 'USD') {
    return new BigNumber(1);
  }

  if (network === MainnetNetwork || network === RopstenNetwork) {
    switch (symbol.toUpperCase()) {
      case 'BTC':
      case 'WBTC':
        // Chainlink: BTC/USD
        return getChainlinkFeedPrice('0xf4030086522a5beea4988f8ca5b36dbc97bee88c', MainnetHttpsWeb3Provider);
      case 'SBBTC':
        return getChainlinkFeedPrice('0xf4030086522a5beea4988f8ca5b36dbc97bee88c', MainnetHttpsWeb3Provider);
      case 'ETH':
      case 'WETH':
      case 'SWINGBY':
        return getGeckoPrice('swingby');
      //   // Chainlink: ETH/USD
      //   return getChainlinkFeedPrice('0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419', MainnetHttpsWeb3Provider);
      // case 'USDC':
      //   // Chainlink: USDC/USD
      //   return getChainlinkFeedPrice('0x8fffffd4afb6115b954bd326cbe7b4ba576818f6', MainnetHttpsWeb3Provider);
      // case 'USDT':
      //   // Chainlink: USDT/USD
      //   return getChainlinkFeedPrice('0x3e7d1eab13ad0104d2750b8863b489d65364e32d', MainnetHttpsWeb3Provider);
      // case 'SUSD':
      //   // Chainlink: sUSD/USD
      //   return getChainlinkFeedPrice('0xad35bd71b9afe6e4bdc266b345c198eadef9ad94', MainnetHttpsWeb3Provider);
      // case 'DAI':
      //   // Chainlink: DAI/USD
      //   return getChainlinkFeedPrice('0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9', MainnetHttpsWeb3Provider);
      // case 'AAVE':
      // case 'STKAAVE':
      //   // Chainlink: AAVE/USD
      //   return getChainlinkFeedPrice('0x547a514d5e3769680ce22b2361c10ea13619e8a9', MainnetHttpsWeb3Provider);
      // case 'MATIC':
      // case 'WMATIC':
      //   // Chainlink: MATIC/USD
      //   return getChainlinkFeedPrice('0x7bac85a8a13a4bcd8abb3eb7d6b4d632c5a57676', MainnetHttpsWeb3Provider);
      // case 'AVAX':
      // case 'WAVAX':
      //   // Chainlink: AVAX/USD
      //   return getChainlinkFeedPrice('0xff3eeb22b5e3de6e705b44749c2559d704923fd7', MainnetHttpsWeb3Provider);
      // case 'LINK':
      //   // Chainlink: LINK/USD
      //   return getChainlinkFeedPrice('0x2c1d072e956affc0d435cb7ac38ef18d24d9127c', MainnetHttpsWeb3Provider);
      // case 'UNI':
      //   // Chainlink: UNI/USD
      //   return getChainlinkFeedPrice('0x553303d460ee0afb37edff9be42922d8ff63220e', MainnetHttpsWeb3Provider);
      // case 'FEI':
      //   // Chainlink: FEI/USD
      //   return getChainlinkFeedPrice('0x31e0a88fecb6ec0a411dbe0e9e76391498296ee9', MainnetHttpsWeb3Provider);
      // case 'BNB':
      //   // Chainlink: BNB/USD
      //   return getChainlinkFeedPrice('0x14e613ac84a31f709eadbdf89c6cc390fdc9540a', MainnetHttpsWeb3Provider);
      // case 'DPI':
      //   // Chainlink: DPI/USD
      //   return getChainlinkFeedPrice('0x68f1b8317c19ff02fb68a8476c1d3f9fc5139c0a', MainnetHttpsWeb3Provider);
      // case 'GUSD':
      //   // Coingecko API: GUSD/USD
      //   return getGeckoPrice('gemini-dollar');
      // case 'RAI':
      //   // Coingecko API: RAI/USD
      //   return getGeckoPrice('rai');
      // case 'CAKE':
      //   // Coingecko API: CAKE/USD
      //   return getGeckoPrice('pancakeswap-token');
      // case 'XSUSHI':
      //   // Coingecko API: XSUSHI/USD
      //   return getGeckoPrice('xsushi');
      // case 'SUSHI':
      //   // Coingecko API: SUSHI/USD
      //   return getChainlinkFeedPrice('0x7213536a36094cd8a768a5e45203ec286cba2d74', MainnetHttpsWeb3Provider);
      // case 'BOND':
      //   // UNISWAP V2: BOND/USDC
      //   return getBondPrice('0x6591c4bcd6d7a1eb4e537da8b78676c1576ba244');
      // case 'UNI-V2':
      //   // UNISWAP V2: BOND/USDC
      //   return getUniV2Price('0x6591c4bcd6d7a1eb4e537da8b78676c1576ba244');
      default:
        return undefined;
    }
  }

  return undefined;
}

const ALL_TOKENS: BaseTokenType[] = [
  WBTC,
  WETH,
  USDC,
  USDT,
  SUSD,
  GUSD,
  DAI,
  RAI,
  AAVE,
  STK_AAVE,
  MATIC,
  WAVAX,
  SWINGBY,
  UNIV2,
  XSUSHI,
  SUSHI,
  LINK,
  UNI,
  BNB,
  CAKE,
  FEI,
  DPI,
  sbBTC,
];

const ALL_ASSETS: BaseAssetType[] = [BTC, ETH, USD];

const TokensProvider: FC = props => {
  const { children } = props;

  const { activeNetwork } = useNetwork();
  const [reload, version] = useReload();
  const tokensRef = useRef<Map<string, TokenType>>(new Map());
  const assetsRef = useRef<Map<string, AssetType>>(new Map());

  useEffect(() => {
    const promises = ALL_TOKENS.map(async token => {
      try {
        const newToken: TokenType = {
          ...token,
        };

        tokensRef.current.set(token.symbol.toUpperCase(), newToken);
        newToken.price = await getPriceFor(token.symbol, activeNetwork);
        reload();
      } catch (e) {
        console.error(e);
      }
    });

    ALL_ASSETS.forEach(async asset => {
      try {
        const newAsset: AssetType = {
          ...asset,
        };

        assetsRef.current.set(asset.symbol.toUpperCase(), newAsset);
        newAsset.price = await getPriceFor(asset.symbol, activeNetwork);
        reload();
      } catch (e) {
        console.error(e);
      }
    });

    (async () => {
      await Promise.all(promises);

      const usdcToken = tokensRef.current.get(Tokens.USDC);

      if (usdcToken && usdcToken.price) {
        const usdcPrice = usdcToken.price;

        // convert USDC -> USD
        [Tokens.SWINGBY, Tokens.UNIV2].forEach(symbol => {
          const token = tokensRef.current.get(symbol);

          if (token) {
            token.price = token.price?.multipliedBy(usdcPrice);
          }
        });
      }

      Array.from(tokensRef.current).forEach(([_, t]) => {
        console.info(`[New Token Price] ${t.symbol} = $${t.price?.toFixed(3) ?? '-'}`);
      });
    })();
  }, []);

  const getToken = useCallback(
    (symbol: string | undefined, network: Web3Network = activeNetwork): TokenType | undefined => {
      network; // eslint-disable-line
      return symbol ? tokensRef.current.get(symbol.toUpperCase()) : undefined;
    },
    [],
  );

  const getAsset = useCallback((symbol: string | undefined): AssetType | undefined => {
    return symbol ? assetsRef.current.get(symbol.toUpperCase()) : undefined;
  }, []);

  const getAmountInUSD = useCallback(
    (amount: BigNumber | undefined, source: string | undefined, network?: Web3Network): BigNumber | undefined => {
      if (!amount || !source) {
        return undefined;
      }

      const token = getToken(source, network);

      if (!token || !token.price) {
        return undefined;
      }

      return amount.multipliedBy(token.price);
    },
    [],
  );

  const value: TokensContextType = {
    version,
    getToken,
    getAsset,
    getAmountInUSD,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default TokensProvider;

/** @deprecated */
export function isEthAsset(symbol: string) {
  return symbol.toUpperCase() === 'ETH';
}

/** @deprecated */
export function isUsdAsset(symbol: string) {
  return symbol.toUpperCase() === 'USD';
}
