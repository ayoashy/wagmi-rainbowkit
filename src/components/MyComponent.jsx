import { useAccount, useBalance } from 'wagmi';

// Make sure that this component is wrapped with ConnectKitProvider
export const MyComponent = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
   const { data, isError, isLoading } = useBalance({
     address: address,
   });
  if (isConnecting) return <div>Connecting...</div>
  if (isDisconnected) return <div>Disconnected</div>
  return (
    <>
      <div>Connected Wallet: {address}</div>
      <div>
        {data && <>balance: {data.value}</>}
        {isLoading && <>Loading...</>}
        {isError && <>Error occurred😢</>}
      </div>
      
    </>
  );
  
};
