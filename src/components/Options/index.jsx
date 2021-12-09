import React, { useEffect, useState } from 'react';
import { configureFee, configureLottery } from '../../services/near';

export const Options = ({ chance, fee }) => {
  const [inputChance, setInputChance] = useState('');
  const [inputFee, setInputFee] = useState('');

  useEffect(() => {
    chance && setInputChance(chance);
  }, [chance]);

  useEffect(() => {
    fee && setInputFee(fee);
  }, [fee]);

  const handleChange = (e, setInputFn) => {
    const value = e.target.value && parseInt(e.target.value);
    setInputFn(isNaN(value) ? 1 : value);
  };

  const validateValue = (value, defaultValue) => {
    switch (true) {
      case value < 1:
        return 1;
      case value >= 100:
        return 99;
      case isNaN(value):
        return parseInt(defaultValue);
      default:
        return value;
    }
  };

  const validateChance = (e) => {
    const value = parseInt(e.target.value);
    setInputChance(validateValue(value, chance).toString() + '%');
  };

  const validateFee = (e) => {
    const value = parseInt(e.target.value);
    setInputFee(validateValue(value, fee).toString() + ' NEAR');
  };

  const sendNewChance = () => {
    const newChance = validateValue(inputChance, chance).toString();
    if (newChance !== chance) {
      configureLottery({ chance: newChance });
    }
  };

  const sendNewFee = () => {
    const newFee = validateValue(inputChance, fee).toString();
    if (newFee !== fee) {
      configureFee({ strategy: newFee });
    }
  };

  return (
    <div className="w-full mt-10 px-5 md:px-9">
      <div className="w-full xl:w-1/2 md:mx-auto bg-white shadow-2xl rounded-md px-5 py-6">
        <p className="flex justify-between text-sm font-medium text-gray-400">
          Options (just for admin)
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </p>
        <div className="flex w-full my-3 pb-2 py-2 border-b font-medium text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <p className="">Set Chance</p>
          <input
            onChange={(e) => handleChange(e, setInputChance)}
            onBlur={validateChance}
            className="ml-auto font-medium text-right w-20 mr-5"
            value={inputChance}
          />
          <button
            className="flex text-gray-900 inline-block border-2 border-yellow-400 rounded-md px-4 py-1 hover:bg-yellow-400"
            onClick={sendNewChance}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Change
          </button>
        </div>
        <div className="flex w-full my-3 pb-2 py-2 border-b font-medium text-gray-900">
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
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="">Fee</p>
          <input
            onChange={(e) => handleChange(e, setInputFee)}
            onBlur={validateFee}
            className="ml-auto font-medium text-right w-20 mr-5"
            value={inputFee}
          />
          <button
            className="flex text-gray-900 inline-block border-2 border-yellow-400 rounded-md px-4 py-1 hover:bg-yellow-400"
            onClick={sendNewFee}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Change
          </button>
        </div>
      </div>
    </div>
  );
};
