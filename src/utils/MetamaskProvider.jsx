import { MetaMaskProvider } from '@metamask/sdk-react';

// eslint-disable-next-line react/prop-types
const MetamaskProvider = ({ children }) => {
  return (
    <>
      <MetaMaskProvider
        debug={true}
        sdkOptions={{
          dappMetadata: {
            name: 'Storage App',
            url: window.location.host,
            // iconUrl: icon, // optional
          },
        }}
      >
        {children}
      </MetaMaskProvider>
    </>
  );
};

export default MetamaskProvider;
