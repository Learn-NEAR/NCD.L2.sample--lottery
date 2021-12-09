import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full bottom-0 bg-gray-900 px-9 py-6 mt-9 z-50">
      <h2 className="text-white text-2xl font-medium">Smart Lottery</h2>
      <ul className="flex ml-4 mt-3">
        <li>
          <a href="#" className="mr-3 text-lg text-gray-300 hover:underline">
            F.A.Q.
          </a>
        </li>
        <li>
          <a href="#" className="mr-3 text-lg text-gray-300 hover:underline">
            Contacts
          </a>
        </li>
        <li>
          <a href="#" className="mr-3 text-lg text-gray-300 hover:underline">
            Rules
          </a>
        </li>
      </ul>
      <p className="text-gray-700 text-right">
        © 2021 All rights reserved. Develop by{' '}
        <a href="https://t.me/NazarNyzhnyk" className="text-gray-400 hover:underline font-medium">
          Nazar Nyzhnyk
        </a>
      </p>
    </footer>
  );
};
