import classNames from 'classnames';

export type IconNames =
  | 'certificate'
  | 'chart-up'
  | 'graph-up'
  | 'timer'
  | 'judge'
  | 'file-add'
  | 'file-check'
  | 'file-failed'
  | 'file-clock'
  | 'wallet2'
  | 'tokens'
  | 'proposal-canceled'
  | 'lock'
  | 'queue'
  | 'gear'
  | 'hourglass2'
  | 'pending'
  | 'clock'
  | 'chart3'
  | 'stake'
  | 'error'
  | 'check-circle'
  | 'info'
  | 'danger'
  | 'dropdown'
  | 'dropdown-active'
  | 'minus'
  | 'plus'
  | 'check'
  | 'close'
  | 'arrow-right'
  | 'arrow-left'
  | 'chevron'
  | 'menu-toggle'
  | 'menu-hide'
  | 'add'
  | 'status'
  | 'network'
  | 'filter'
  | 'insured'
  | 'redeem'
  | 'yield-farming'
  | 'governance'
  | 'smart-yield'
  | 'smart-alpha'
  | 'smart-exposure'
  | 'docs'
  | 'auto'
  | 'light-mode'
  | 'dark-mode'
  | 'overview'
  | 'wallet'
  | 'proposals'
  | 'pairs'
  | 'signal'
  | 'forum'
  | 'treasury'
  | 'pools'
  | 'mainnet'
  | 'fiat'
  | 'mint'
  | 'testnet'
  | 'vertical-menu'
  | 'menu'
  | 'hourglass'
  | 'loader'
  | 'bell'
  | 'gear'
  | 'calendar'
  | 'delegated-by-me'
  | 'voting-power'
  | 'bonus'
  | 'delegated'
  | 'external';

type IconProps = {
  name: IconNames;
  size?: number | string;
  // color?: 'primary' | 'secondary' | 'red' | 'green' | 'blue' | 'inherit';
  // rotate?: 0 | 90 | 180 | 270;
  className?: string;
  style?: React.CSSProperties;
};

export const Icon: React.FC<IconProps> = props => {
  const {
    name,
    size = 24,
    // rotate, color,
    className,
    style,
    ...rest
  } = props;

  return (
    <svg className={classNames(className)} width={size} height={size} style={style} {...rest}>
      <use xlinkHref={`/icons-sprite.svg#icon__${name}`} />
    </svg>
  );
};

type TokenIconComplexNames = 'aave' | 'stkaave' | 'bond';

export type TokenIconNames =
  | TokenIconComplexNames
  | 'compound'
  | 'cream'
  | 'yearn'
  | 'polygon'
  | 'bond'
  | 'usdc'
  | 'dai'
  | 'susd'
  | 'eth'
  | 'wbtc'
  | 'gusd'
  | 'usdt'
  | 'sy-pools'
  | 'unknown'
  | 'weth'
  | 'fiat'
  | 'usd';

type TokenIconProps = {
  name: TokenIconNames;
  size?: number | string;
  // color?: 'primary' | 'secondary' | 'red' | 'green' | 'blue' | 'inherit';
  // rotate?: 0 | 90 | 180 | 270;
  className?: string;
  style?: React.CSSProperties;
};

export const TokenIcon: React.FC<TokenIconProps> = props => {
  const {
    name,
    size = 24,
    // rotate, color,
    className,
    style,
    ...rest
  } = props;

  let content;

  switch (name) {
    case 'aave':
      content = (
        <>
          <svg fill="none" viewBox="0 0 40 40">
            <path
              fill="url(#paint0_linear)"
              d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
            />
            <path
              fill="#fff"
              d="M28.753 27.97L21.99 11.618c-.381-.846-.948-1.258-1.695-1.258h-.598c-.748 0-1.315.412-1.696 1.258l-2.944 7.123h-2.226a1.22 1.22 0 00-1.212 1.212v.015a1.223 1.223 0 001.212 1.211h1.196l-2.81 6.79a1.42 1.42 0 00-.082.463c0 .381.118.68.33.912.211.232.515.346.897.346.252-.005.494-.083.695-.232.217-.15.366-.366.485-.614l3.093-7.67h2.144a1.22 1.22 0 001.211-1.211v-.031a1.223 1.223 0 00-1.21-1.211h-1.145l2.36-5.882 6.434 16c.118.248.268.464.484.614.201.15.449.226.696.232.381 0 .68-.114.897-.346.216-.232.33-.53.33-.912a1.08 1.08 0 00-.083-.459z"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="34.912"
                x2="5.152"
                y1="7.453"
                y2="32.493"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#B6509E" />
                <stop offset="1" stop-color="#2EBAC6" />
              </linearGradient>
            </defs>
          </svg>
        </>
      );
      break;
    case 'stkaave':
      content = (
        <svg fill="none" viewBox="0 0 40 40">
          <path
            fill="url(#paint0_linear)"
            d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          />
          <path
            fill="#fff"
            d="M31.28 10.201L20.308 6.91a.818.818 0 00-.47 0L8.864 10.201a.82.82 0 00-.584.786v12.069a7.796 7.796 0 001.89 4.776 19.524 19.524 0 003.936 3.645 35.303 35.303 0 005.632 3.298.818.818 0 00.666 0 35.31 35.31 0 005.632-3.298 19.524 19.524 0 003.936-3.645 7.795 7.795 0 001.89-4.776v-12.07a.82.82 0 00-.583-.785z"
          />
          <path
            fill="url(#paint1_linear)"
            d="M26.818 25.403L21.621 12.84a1.397 1.397 0 00-1.303-.966h-.46a1.398 1.398 0 00-1.303.966l-2.266 5.467h-1.704a.933.933 0 00-.934.933v.014a.933.933 0 00.934.933h.92l-2.159 5.215a1.1 1.1 0 00-.064.356c-.01.258.082.509.256.7a.896.896 0 00.69.266.933.933 0 00.533-.178c.163-.121.291-.284.37-.471l2.378-5.892h1.646a.934.934 0 00.934-.933v-.02a.934.934 0 00-.934-.934h-.88l1.807-4.513 4.941 12.293c.08.188.207.35.371.471a.933.933 0 00.533.179.898.898 0 00.69-.267.982.982 0 00.256-.7.84.84 0 00-.055-.357z"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="36.28" x2="6.52" y1="9.08" y2="34.12" gradientUnits="userSpaceOnUse">
              <stop stop-color="#B6509E" />
              <stop offset="1" stop-color="#2EBAC6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="22.783"
              x2="13.181"
              y1="15.603"
              y2="25.886"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#B6509E" />
              <stop offset="1" stop-color="#2EBAC6" />
            </linearGradient>
          </defs>
        </svg>
      );
      break;
    case 'cream':
      content = (
        <svg fill="none" viewBox="0 0 40 40">
          <g clip-path="url(#clip0)">
            <path
              fill="#69E2DC"
              d="M21.61 20.944l7.014 7.013a1.34 1.34 0 01-.133 2.006 12.673 12.673 0 11.048-19.894 1.325 1.325 0 01.085 1.968l-7.019 7.019a1.335 1.335 0 00-.389.965c-.002.184.034.365.107.534.065.162.163.309.288.432v-.043zM20 0a20 20 0 100 40 20 20 0 000-40z"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0h40v40H0z" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'bond':
      content = (
        <svg fill="none" viewBox="0 0 40 40">
          <rect width="40" height="40" fill="#FF4339" rx="20" />
          <path
            fill="#fff"
            d="M20.075 17.98h-.145c-1.947 0-3.461 1.587-3.461 3.607v3.894l3.533-2.668 3.534 2.668v-3.894c0-1.947-1.587-3.534-3.462-3.606z"
          />
          <mask id="icon__bond-a" width="30" height="30" x="5" y="5" maskUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="15" fill="#C4C4C4" />
          </mask>
          <g mask="url(#icon__bond-a)">
            <path
              fill="#fff"
              d="M5 5v28.99l9.014-6.706v-7.645l-1.658-1.298L20 12.572l7.644 5.77-1.658 1.297v7.645L35 33.99V5H5z"
            />
          </g>
        </svg>
      );
      break;
    default:
      content = <use xlinkHref={`/token-icons-sprite.svg#icon__${name}`} />;
      break;
  }

  return (
    <svg className={classNames(className)} width={size} height={size} style={style} {...rest}>
      {content}
    </svg>
  );
};
