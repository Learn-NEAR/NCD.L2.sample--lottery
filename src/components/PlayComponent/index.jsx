import React from 'react';
import { wallet } from '../../services/near';

export const PlayComponent = ({ accountId, owner, contractId, fee, has_played, play, reset, setApiError }) => {
  const handlePlay = () => {
    if (accountId) {
      play();
    } else {
      try {
        wallet.requestSignIn(contractId);
      } catch (error) {
        setApiError(error);
      }
    }
  };
  return (
    <div className="w-full bg-white rounded-md px-5 py-6 shadow-2xl md:ml-0 mt-9 lg:mt-0 lg:ml-9 ">
      <div className="block md:flex">
        <div className="">
          <p className="text-sm font-medium text-gray-400">Place your bet</p>
          <p className="text-gray-900 font-bold text-2xl my-2">
            First time is free to play
            <br className="hidden md:block" /> and you may win!
          </p>
          <p className="text-gray-600 font-normal w-2/3">
            If you've already played once then any other play costs you a fee. This fee is calculated as 1 NEAR X the
            square of the total number of unique players
          </p>
        </div>
      </div>
      {has_played ? (
        <div className="ml-auto mt-10">
          <p className="text-gray-500 flex font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            Fee
          </p>
          <p className="text-gray-900 text-xl font-bold mt-2 ml-2">{fee}</p>
        </div>
      ) : null}
      <div className="w-full flex justify-center">
        <button
          onClick={handlePlay}
          style={{ boxShadow: '0px 4px 15px rgba(255, 206, 34, 0.75)' }}
          className="bg-yellow-400 py-3 w-full md:w-1/2 rounded-md mt-10 font-medium shadow-2xl text-gray-900 hover:bg-yellow-300"
        >
          Play
        </button>
      </div>
      {accountId && owner === accountId ? (
        <div className="w-full flex justify-center">
          <button
            onClick={reset}
            style={{ boxShadow: '0px 4px 15px rgba(255, 206, 34, 0.75)' }}
            className="bg-yellow-400 py-3 w-full md:w-1/2 rounded-md mt-10 font-medium shadow-2xl text-gray-900 hover:bg-yellow-300"
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
};
