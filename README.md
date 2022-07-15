#  🎓 NCD.L2.sample--lottery dapp
This repository contains a complete frontend applications (Vue.js, React, Angular) to work with 
<a href="https://github.com/Learn-NEAR/NCD.L1.sample--lottery" target="_blank">NCD.L1.sample--lottery smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
3. Angular (angular branch)

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

<a href="https://sample-lottery.onrender.com/" target="_blank">Try VueJs deployed app</a>

<a href="https://sample-lottery-react.onrender.com/" target="_blank">Try React deployed app</a>

<a href="https://sample-lottery-ng.onrender.com/" target="_blank">Try Angular deployed app</a>
or you can clone the repo and put contract ids inside .env file :
```
...
VUE_APP_CONTRACT_ID = "dev-1638894261685-83136914267549"
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
npm run serve
```
or 
```
yarn serve
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
<a href="https://www.loom.com/share/a05799e6d7cf4ab789520e9ca8d28b0a" target="_blank">Vue.Js</a>

<a href="https://www.loom.com/share/d66f7ee30a1c409ba5166c7bff14bea7" target="_blank">React</a>

<a href="https://www.loom.com/share/6a669c2de52d45b9a6b915eeaf89d567" target="_blank">Angular</a>

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
export const wallet = new WalletConnection(near, "NCD.L2.sample--lottery");
```
After this by using Composition API we need to create ```useWallet()``` function and use inside ```signIn()``` and ```signOut()``` functions of wallet object. By doing this, login functionality can now be used in any component. 

And also we in return statement we are returning wallet object, we are doing this to call ``` wallet.getAccountId()``` to show accountId in ``` /components/PageTitle.vue ```

``` useWallet()``` code :
```
export const useWallet = () => {
    const accountId = ref('')
    accountId.value = wallet.getAccountId()
    const err = ref(null)
  
    onMounted(async () => {
      try {
        accountId.value = wallet.getAccountId()
      } catch (e) {
        err.value = e;
        console.error(err.value);
      }
    });
  
    const handleSignIn = () => {
      wallet.requestSignIn({
        contractId: CONTRACT_ID,
        methodNames: [] // add methods names to restrict access
      })
    };
  
    const handleSignOut = () => {
      wallet.signOut()
      accountId.value = wallet.getAccountId()
    };
  
    return {
      accountId,
      signIn: handleSignIn,
      signOut: handleSignOut
    }
  }
```

To work with smart contract we will create separate ```useLottery()``` function with Composition API to split the logic. We are loading the contract inside  ``` /services/near.js:```
```
function getLotteryContract() {
  return new Contract(
    wallet.account(), // the account object that is connecting
    CONTRACT_ID, // name of contract you're connecting to
    {
      viewMethods: ['get_owner', 'get_winner', 'get_pot', 'get_fee', 'get_fee_strategy', 'get_has_played',
        'get_last_played', 'get_active', 'explain_fees', 'explain_lottery'], // view methods do not change state but usually return a value
      changeMethods: ['play', 'configureLottery', 'configureFee', 'reset'] // change methods modify state
    }
  )
}

const contract = getLotteryContract()
```

and we are creating function to export for each contract function

example of a call with no params: 
```
//function to get all messages from thanks contract
export const getMessages = async () => {
    return await thanksContract.list()
}
```

example of call with params 
```
//function to configure Lottery
export const configureLottery = async (chance) => {
  return await contract.configure_lottery(
    { chance:chance },
    gas
  )
}


```

Then in ```composables/near.js``` we are just importing all logic from ```services/near.js```: 
```
import {
    wallet,
    CONTRACT_ID,
    getOwner,
    getWinner,
    getPot,
    getFee,
    getFeeStrategy,
    getHasPlayed,
    getLastPlayed,
    getActive,
    getExplainFees,
    getExplainLottery,
    play,
    reset
  } from "../services/near";
```

and using it to store some state of contracts and to call contracts functions: 
```
export const useLottery = () => {
      const  owner = ref("")
      const  winner = ref('')
      const  pot = ref('')
      const  fee = ref('')
      const  feeStrategy = ref('')
      const  hasPlayed = ref(null)
      const  lastPlayed = ref(null)
      const  active = ref(null)
      const  feesExplanation =  ref('')
      const  lotteryExplanation  = ref('')
      const  apiError = ref(null);

      onMounted(async () => {
          try {
            updateValues()
          }
          catch (e) {
            apiError.value = e;
            console.log(apiError.value);
          }
      })

      const updateValues = async () => {
        try {
          owner.value = await getOwner()
          winner.value = await getWinner()
          pot.value = await getPot()
          fee.value = await getFee()
          feeStrategy.value = FeeStrategies[await getFeeStrategy()]
          hasPlayed.value = wallet.getAccountId() && await getHasPlayed(wallet.getAccountId())
          lastPlayed.value = await getLastPlayed()
          active.value = await getActive()
          feesExplanation.value = await getExplainFees()
          lotteryExplanation.value = await getExplainLottery()
        } catch (e) {
          apiError.value = e;
          console.log(apiError.value);
        }
      }

      const handlePlay = async () => {
        fee.value = await getFee()
        hasPlayed.value = await getHasPlayed(wallet.getAccountId())
        await play(fee.value,hasPlayed.value);
      };

      const handleReset = async () => {
        reset();
      };

      return {
        owner,
        winner,
        pot,
        fee,
        feeStrategy,
        hasPlayed,
        lastPlayed,
        active,
        feesExplanation,
        lotteryExplanation,
        apiError,
        play:handlePlay,
        reset:handleReset,
        update: updateValues
      };
  };
```

Inside components we are using the same ``` useWallet()``` and ``` useContracts()``` functions to manage state of dapp. ``` /components/Summarize.vue ``` as an example :
```
    import { useWallet } from "@/composables/near"
import { useLottery } from "@/composables/near"
export default {
  setup(){
    const  { owner, winner, pot, fee, feeStrategy,hasPlayed, lastPlayed, active, feesExplanation, lotteryExplanation,  play,  reset}  = useLottery();
    const { accountId, signIn,  signOut } = useWallet();
    return  {
        owner,
        winner,
        pot,
        fee,
        feeStrategy,
        hasPlayed,
        lastPlayed,
        active,
        feesExplanation,
        lotteryExplanation,
        play,
        reset,
        accountId,
        signIn,
        signOut
    }
  }
}
```
