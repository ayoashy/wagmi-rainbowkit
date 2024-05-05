import { WagmiProvider } from 'wagmi';
import { config } from './config';



// eslint-disable-next-line react/prop-types
export const WagmiContext = ({children}) =>{
  return <WagmiProvider config={config}>{
{children}
  }</WagmiProvider>;
}
