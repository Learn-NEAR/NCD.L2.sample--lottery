import { ref } from "vue";
import {
    wallet
} from "../services/near";

const accountId = ref(null)

export const useWallet = () => {

    const handleGetAccountId = () => {
        return wallet.getAccountId()
    }

    const handleSignIn = () => {
        // redirects user to wallet to authorize your dApp
        // this creates an access key that will be stored in the browser's local storage
        // access key can then be used to connect to NEAR and sign transactions via keyStore
        wallet.requestSignIn({
            contractId: localStorage.getItem('CONTRACT_ID'),
            methodNames: [] // add methods names to restrict access
        })
    };

    const handleSignOut = () => {
        wallet.signOut()
        accountId.value = wallet.getAccountId()
    };

    return {
        accountId,
        getAccountId: handleGetAccountId,
        signIn: handleSignIn,
        signOut: handleSignOut
    }
}