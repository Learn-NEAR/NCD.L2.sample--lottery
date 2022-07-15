#  🎓 NCD.L2.sample--lottery dapp
This repository contains a complete frontend React application to work with 
<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">NCD.L1.sample--lottery smart contract</a> targeting the NEAR platform:

The example here is playful. It's a toy involving a lottery.
The goal of this repository is to make it as easy as possible to get started writing frontend with Vue.js, React and Angular for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## ⚡  Usage

![image](https://user-images.githubusercontent.com/38455192/145136911-fe10f671-2137-483a-8326-343f857d095a.png)

<a href="https://www.loom.com/share/835719fe8e2e45c4a2970ed435f62a56" target="_blank">Video demo UI walkthrough</a>

You can use this app with contract ids which were deployed by creators of this repo,  or you can use it with your own deployed  contractId.
If you are using not yours contractId some functions of the lottery contract will not work because  they are set to work  only  if owner called this  functions.

Example of such function:

![image](https://user-images.githubusercontent.com/38455192/145134082-bb64a93d-cd45-48e3-bd84-b34f366fdbcb.png)

To get possibility to work with the full functionality of the smart contract, you need to paste your contractId inside UI of deployed dapp. 
Before pasting id make sure that you deployed correct smart contract, in other case this code may not work as expected.

<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">Link to smart contract repo</a>

<a href="https://www.loom.com/share/1060f789861a4652bfef96ef357cdbb3" target="_blank">How to correctly deploy NCD.L1.sample--lottery smart contract (video tutorial)</a>

After you deployed  your contract, you need to paste  id in one of deployed dapps
<a href="https://sample-lottery-react.onrender.com/" target="_blank">Try React deployed app</a>
or you can clone the repo and put contract ids inside .env file :
```
...
REACT_APP_CONTRACT_ID = "put your smart-contract id here"
...
```

After you input your values inside .env file, you need to :
1. Install all dependencies 
```
npm install
```
or
```
yarn
```
2. Run the project locally
```
npm run start
```
or 
```
yarn start
```

Other commands:

Compiles and minifies for production
```
npm run build
```
or
```
yarn build
```
Lints and fixes files
```
npm run lint
```
or
```
yarn lint
```

## 👀 Code walkthrough for Near university students
<a href="https://www.loom.com/share/d66f7ee30a1c409ba5166c7bff14bea7" target="_blank">React</a>

We are using ```near-api-js``` to work with NEAR blockchain. In ``` /services/near.js ``` we are importing classes, functions and configs which we are going to use:
```
import { keyStores, Near, Contract, WalletConnection, utils } from "near-api-js";
```
Then we are connecting to NEAR:
```
// connecting to NEAR, new NEAR is being used here to awoid async/await
export const near = new Near({
    networkId: process.env.VUE_APP_networkId,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: process.env.VUE_APP_nodeUrl,
    walletUrl: process.env.VUE_APP_walletUrl,
});

``` 
and creating wallet connection
```
const getContractID = () => localStorage.getItem('CONTRACT_ID');
const wallet = () => new WalletConnection(near, getContractID()));
```
After this by using API we can use wallet and call signIn() and signOut() functions of wallet object. By doing this, login functionality can now be used in any component.

And also we in return statement we are returning wallet object, we are doing this to call ```wallet.getAccountId()``` to show accountId in ```/hooks/useLottery.jsx```

``` wallet()``` code :
```
export const signIn = () => {
  return wallet().requestSignIn({ contractId: getContractID() });
};

export const signOut = () => {
  return wallet().signOut(getContractID());
};
```

To work with smart contract we will create separate ```useLottery()``` function with Composition API to split the logic. We are loading the contract inside  ``` /services/near.js:```
```
export const contract = () =>
  new Contract(wallet().account(), getContractID(), {
    viewMethods: [
      'get_owner',
      'get_winner',
      'get_pot',
      'get_fee',
      'get_fee_strategy',
      'get_has_played',
      'get_last_played',
      'get_active',
      'explain_fees',
      'explain_lottery',
    ],
    changeMethods: ['play', 'configure_lottery', 'configure_fee', 'reset'],
    sender: wallet().account(),
  });
```

example of call with params 
```
//function to play game
export const play = (fee, hasPlayed) => {
  const feeNumber = fee.match(/(\d+)/)[0]; //* 1000000000000000000000000
  const attachedDeposit = utils.format.parseNearAmount(feeNumber);
  if (hasPlayed) {
    return contract().play({}, gas, attachedDeposit);
  } else {
    return contract().play();
  }
};
```

example of call with no params 
```
//function to get winner
export const getWinner = () => {
  return contract().get_winner();
};
```

Then in ```hooks/useLottery.jsx``` and ```hooks/useSign.jsx``` we are just importing all logic from ```services/near.js```: For example in ```useSign``` component
```
import { signIn, signOut, wallet } from '../services/near';
```

and using it to store some state of contracts and to call contracts functions:
```
export const useSign = ({ setApiError }) => {
  const [accountId, setAccountId] = useState('');

  const getAccountId = useCallback(async () => {
    try {
      setAccountId(await wallet().getAccountId());
    } catch (error) {
      setApiError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAccountId();
  }, [getAccountId]);

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
    getAccountId();
  };

  return {
    accountId,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };
};
```

Inside ```/src/pages/Home.jsx``` we have lifecycle hook ```useEffect()``` where we are getting all the data from the smart contract And we are using API request from ```services/near.js``` as an example :
```
export const Home = () => {
  const { owner, winner, pot, fee, feeStrategy, hasPlayed, lotteryExplanation, play, reset } = useLottery({
    setApiError,
  });

  const { accountId, signIn, signOut } = useSign({ setApiError });
```
