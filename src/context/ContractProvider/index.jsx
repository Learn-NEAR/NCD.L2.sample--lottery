import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const ContractProvider = ({ children }) => {
  const defaultContractId = process.env.REACT_APP_CONTRACT_ID;
  const contractId = localStorage.getItem('CONTRACT_ID');
  !contractId && localStorage.setItem('CONTRACT_ID', defaultContractId);

  const [data, setData] = useState(contractId ?? defaultContractId);

  const setContractId = (contractId) => {
    localStorage.setItem('CONTRACT_ID', contractId);
    setData(contractId);
  };

  return <DataContext.Provider value={{ contractId: data, setContractId }}>{children}</DataContext.Provider>;
};

export const useContract = () => useContext(DataContext);
