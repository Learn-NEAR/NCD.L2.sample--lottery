import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ContractProvider } from './context/ContractProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContractProvider>
      <App />
    </ContractProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
