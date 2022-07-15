import { ref } from "vue";

export const useContractProvider = () => {
  const defaultContractId = ref(process.env.VUE_APP_CONTRACT_ID)
  const contractId = ref(localStorage.getItem('CONTRACT_ID'))
  const isChangeContractIdFormOpened = ref(false)
  !contractId.value && localStorage.setItem('CONTRACT_ID', defaultContractId.value);
  contractId.value = contractId.value ?? defaultContractId.value
  const inputContractId = ref(localStorage.getItem('CONTRACT_ID'))

  const handleSetContractId = (Id) => {
    localStorage.setItem('CONTRACT_ID', Id);
    contractId.value = localStorage.getItem('CONTRACT_ID');
    location.reload()
  };

  const handleSetDefaultContractId = () => {
    localStorage.setItem('CONTRACT_ID', defaultContractId.value);
    contractId.value = localStorage.getItem('CONTRACT_ID')
    inputContractId.value = localStorage.getItem('CONTRACT_ID')
    location.reload()
  };

  return {
    defaultContractId,
    contractId,
    inputContractId,
    isChangeContractIdFormOpened,
    setContractId: handleSetContractId,
    setDefaultContractId: handleSetDefaultContractId
  };
};