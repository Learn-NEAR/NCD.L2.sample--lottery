import React, { useState } from 'react';
import { wallet } from '../../services/near';
import { ChangeContract } from './ChangeContract';
import { useContract } from '../../context/ContractProvider';

export const Navigation = ({ accountId, setAccountId, apiError, setApiError }) => {
  const { contractId } = useContract();

  const [isOpenChangeContact, setIsOpenChangeContact] = useState(false);

  const signIn = () => {
    try {
      wallet.requestSignIn(contractId);
    } catch (error) {
      setApiError(error);
    }
  };

  const signOut = () => {
    wallet.signOut();
    setAccountId('');
  };

  return (
    <>
      <div className="">
        <div className="relative w-full flex bg-white text-gray-900 px-5 md:px-9">
          <a href="#" className="flex items-center text-lg font-medium my-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 text-yellow-400 h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
            Smart lottery
          </a>

          <div className="flex ml-60 absolute flex-col items-center justify-center bg-white">
            <button
              onClick={() => setIsOpenChangeContact(true)}
              className="relative z-20 flex justify-center pt-1 w-20 h-10 border-l-8 border-r-8 border-b-8 border-yellow-200 rounded-b-full bg-yellow-400 text-gray-800 hover:text-yellow-400 hover:bg-gray-800 hover:border-gray-200 animate-pulse"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-4" viewBox="0 0 20 11" fill="none">
                <path
                  d="M1.86998 0.408361L0.0999756 1.8917L9.99998 10.1334L19.9 1.88336L18.13 0.408361L9.99998 7.18336L1.86998 0.408361Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <p className="text-gray-900 font-bold text-sm text-center">Try frontend with your deployed contract ID</p>

            {isOpenChangeContact ? (
              <ChangeContract
                apiError={apiError}
                setApiError={setApiError}
                setIsOpenChangeContact={setIsOpenChangeContact}
              />
            ) : null}
          </div>

          {accountId ? (
            <div className="ml-auto hidden md:flex">
              <span className="flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 hover:bg-yellow-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {accountId}
              </span>

              <button
                onClick={signOut}
                className="flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 ml-7 hover:bg-yellow-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          ) : (
            <div className="ml-auto hidden md:flex">
              <button
                onClick={signIn}
                className="flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 ml-7 hover:bg-yellow-300"
              >
                Login
              </button>
            </div>
          )}
          <a href="#" className="sm:block md:hidden mt-6 ml-auto text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
