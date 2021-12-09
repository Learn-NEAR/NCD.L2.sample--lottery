import React from 'react';

export const InfoLottery = ({ chance, owner, winner, fee, pot, fee_strategy }) => {
  return (
    <div className="w-full bg-white rounded-md px-5 py-6 shadow-2xl">
      <p className="text-sm font-medium text-gray-400">Info about lottery</p>
      <div className="block  xl:pr-0 text-gray-900">
        <div className="flex w-full xl:w-1/2 mx-auto border-2 bg-yellow-400 border-yellow-400 my-3 p-3 rounded-md font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="ml-3">Pot</p>
          <p className="ml-auto">
            {pot}
            <span className="font-bold"> Ⓝ</span>
          </p>
        </div>
      </div>
      <div className="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
        <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <p className="ml-3">Chance of victory</p>
          {chance ? <p className="ml-auto">{chance}</p> : null}
        </div>
      </div>
      <div className="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
        <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          <p className="ml-3">Owner</p>
          <p className="ml-auto">{owner}</p>
        </div>
        <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
            />
          </svg>
          <p className="ml-3">Winner</p>
          <p className="ml-auto">{winner === null ? 'No winner yet' : winner}</p>
        </div>
      </div>
      <div className="sm:block md:block lg:block xl:flex xl:pr-0 text-gray-900">
        <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="ml-3">Fee</p>
          <p className="ml-auto">{fee}</p>
        </div>
        <div className="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <p className="ml-3">Fee strategy</p>
          <p className="ml-auto">{fee_strategy}</p>
        </div>
      </div>
    </div>
  );
};
