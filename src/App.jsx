import { ConnectKitButton } from 'connectkit';
import { Web3Provider } from './utils/Web3Provider';
import { MyComponent } from './components/MyComponent';


export const App = () => {
  return (
    <Web3Provider>
      <ConnectKitButton />
      <h1>Here we are going to be !</h1>
      <MyComponent/>
    </Web3Provider>
  );
};
