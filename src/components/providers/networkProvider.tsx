import { FC, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useSessionStorage } from 'react-use-storage';

import { RopstenNetwork } from 'networks/ropsten';
import { MainnetNetwork } from 'networks/mainnet';

import { InvariantContext } from 'utils/context';
import { isDevelopmentMode, isProductionMode } from '../../utils';

import { Web3Network } from 'networks/types';

export type NetworkType = {
  networks: Web3Network[];
  defaultNetwork: Web3Network;
  activeNetwork: Web3Network;
  findNetwork: (networkId: string) => Web3Network | undefined;
  findNetworkByChainId: (chainId: number) => Web3Network | undefined;
  changeNetwork: (networkId: string) => Web3Network | undefined;
};

const Context = createContext<NetworkType>(InvariantContext('NetworkProvider'));

export function useNetwork(): NetworkType {
  return useContext(Context);
}

const networks: Web3Network[] = (() => {
  if (isDevelopmentMode) {
    return [
      MainnetNetwork,
      RopstenNetwork,
    ]
  }

  if (isProductionMode) {
    return [MainnetNetwork, RopstenNetwork];
  }

  return [];
})();

const NetworkProvider: FC = props => {
  const { children } = props;

  const [lastNetwork, setLastNetwork] = useSessionStorage<string | undefined>('last_network');

  const initialNetwork = useMemo<Web3Network>(() => {
    let network: Web3Network | undefined;

    try {
      if (lastNetwork) {
        const networkId = lastNetwork?.toLowerCase();
        network = networks.find(n => n.id.toLowerCase() === networkId);
      }
    } catch {
      //
    }

    return network ?? networks[0];
  }, [lastNetwork]);

  const [activeNetwork] = useState<Web3Network>(initialNetwork);

  const findNetwork = useCallback((networkId: string): Web3Network | undefined => {
    return networks.find(n => n.id.toLowerCase() === networkId.toLowerCase());
  }, []);

  const findNetworkByChainId = useCallback((chainId: number): Web3Network | undefined => {
    return networks.find(n => n.meta.chainId === chainId);
  }, []);

  const changeNetwork = useCallback((networkId: string): Web3Network | undefined => {
    const network = findNetwork(networkId);

    if (network) {
      setLastNetwork(network.id.toLowerCase());
      window.location.reload();
    }

    return network;
  }, []);

  useEffect(() => {
    window.document.title = activeNetwork.config.title;
  }, [activeNetwork]);

  const value: NetworkType = {
    networks,
    defaultNetwork: networks[0],
    activeNetwork,
    findNetwork,
    findNetworkByChainId,
    changeNetwork,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default NetworkProvider;
