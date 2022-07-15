#  🎓 Lottery dapp
This repository contains a complete frontend applications to work with

<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">NCD.L1.sample--lottery smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
3. Angular (angular branch)

The example here is playful. It's a toy involving a lottery.
The goal of this repository is to make it as easy as possible to get started writing frontend with VueJs and React for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## Usage

![image](https://user-images.githubusercontent.com/38455192/145136911-fe10f671-2137-483a-8326-343f857d095a.png)

<a href="https://www.loom.com/share/835719fe8e2e45c4a2970ed435f62a56" target="_blank">Video demo UI walkthrough</a>

You can use this app with contract id`s which was deployed by creators of this repo,  or you can use it with your own deployed  contractId.
If you are using not yours contractId some functions of the lottery contract will not work because  they are setted to work  only  if owner called this  functions.

Example of such  function:

![image](https://user-images.githubusercontent.com/38455192/145134082-bb64a93d-cd45-48e3-bd84-b34f366fdbcb.png)

And some functions, like ``` reset ```, you can call only from CLI. so to restart lottery you will need CLI.

To get possibility to work with the full functionality of the smart contract, you need to paste your contractId inside UI of deployed dapp.
Before pasting id make sure that you deployed correct smart contract, in other case this code may  not work as expected.

<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">Link to smart contract repo</a>

<a href="https://www.loom.com/share/1060f789861a4652bfef96ef357cdbb3" target="_blank">How to correctly deploy NCD.L1.sample--lottery smart contract (video tutorial)</a>

After you deployed  your contract, you need to paste  id in one of deployed dapps

<a href="https://sample-lottery.onrender.com/" target="_blank">Try VueJs deployed app</a>

<a href="https://sample-lottery-react.onrender.com/" target="_blank">Try React deployed app</a>

<a href="https://sample-lottery-ng.onrender.com/" target="_blank">Try Angular deployed app</a>

### Code walkthrough for NCD students:
<a href="https://www.loom.com/share/a05799e6d7cf4ab789520e9ca8d28b0a" target="_blank">Vue.Js</a>

<a href="https://www.loom.com/share/d66f7ee30a1c409ba5166c7bff14bea7" target="_blank">React</a>

<a href="https://www.loom.com/share/6a669c2de52d45b9a6b915eeaf89d567" target="_blank">Angular</a>

## Project setup
To deploy sample--lottery to your account visit <a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">this repo (smart contract deployment instructions are inside)</a>

After you deployed  your contract, and you have contract ids, you can input them on a deployed website or you can clone the repo and put contract ids inside src/environments/environment.ts file :
```
CONTRACT_ID = "put your thanks contract id here"
...
```

After you input your values inside environment.ts file, you need to :
1. Install Angular CLI (if previously you didn't)
```
npm i -g @angular/cli
```

2. Install all dependencies
```
npm i
```
3. Run the project locally
```
npm run serve
```

Other commands:

Compiles and minifies for production
```
npm run build
```
Lints and fixes files
```
npm run lint
```

## 👀 Code walkthrough for Near university students

<a href="https://www.loom.com/share/6a669c2de52d45b9a6b915eeaf89d567" >Code walk-through video | TBA |</a>

### -- Contract --

To work with lottery contract was separated inside ``` src/app/services/near.service.ts```.
```
  getLotteryContract() {
    return new Contract(
      this.wallet.account(), // the account object that is connecting
      environment.CONTRACT_ID, // name of contract you're connecting to
      {
        viewMethods: ['get_owner', 'get_winner', 'get_pot', 'get_fee', 'get_fee_strategy', 'get_has_played', 'get_last_played', 'get_active', 'explain_fees', 'explain_lottery'], // view methods do not change state but usually return a value
        changeMethods: ['play', 'configure_lottery', 'configure_fee', 'reset'] // change methods modify state
      }
    )
  }
```

### -- Main Service --

We are using ```near-api-js``` to work with NEAR blockchain. In ``` src/app/services/near.service.ts ``` we are importing classes, functions and configs which we are going to use:
```
import { keyStores, Near, Contract, utils, WalletConnection } from "near-api-js";
```

The class contains two variables
```
public near: Near;
public wallet: WalletConnection;
```

Then in ``` constructor() ``` we are connecting to NEAR:
```
    this.near = new Near({
      networkId: environment.NETWORK_ID,
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: environment.NODE_URL,
      walletUrl: environment.WALLET_URL,
      headers: {}
    });
``` 
and creating wallet connection
```
this.wallet = new WalletConnection(this.near, "lottery");
```

that class contain

### -- Lottery Service --

``` src/app/services/lottery.service.ts ``` represents the main container for the functionality needed in the app

We use that class to store all shared data and functions:
```
  public FeeStrategies = ['Free', 'Constant', 'Linear', 'Exponential']
  public owner = '';
  ...
  
  updateValues() {...};
  handlePlay() {...};
  handleReset() {...};
  handleSignIn() {...};
```

With dependency injection, we are able to share everything with other components. ``` src/app/components/page-title/page-title.component.spec.ts ``` as an example :
```
  constructor(public lotteryService: LotteryService) {
  }

  async handlePlay() {
    await this.lotteryService.handlePlay();
  }
```

## Examples
``` src/app/services/near.service.ts ```
### - Function | No Parameters -
```
// get winner of the contract, if exists
getWinner() {
  return await this.lotteryContract.get_winner();
};
```

### - Function | With Parameters -
```
// configure Fee
configureFee({strategy}: {strategy: any}) {
  return await this.lotteryContract.configure_fee(
    { strategy }
  )
}
```

