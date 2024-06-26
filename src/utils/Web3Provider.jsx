import { WagmiProvider, createConfig, http } from 'wagmi';
import {  mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(
        `https://eth-mainnet.g.alchemy.com/v2/${import.meta.PUBLIC_ALCHEMY_ID}`
      ),
      // [sepolia.id]: http(
      //   `https://eth-sepolia.g.alchemy.com/v2/${import.meta.PUBLIC_ALCHEMY_ID}`
      // ),
    },

    // Required API Keys
    walletConnectProjectId: import.meta.PUBLIC_WALLETCONNECT_PROJECT_ID,

    // Required App Info
    appName: 'Testing Wagmi',

    // Optional App Info
    appDescription: 'Your App Description',
    appUrl: 'https://family.co', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
