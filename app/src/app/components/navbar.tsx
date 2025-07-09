// components/Navbar.tsx
"use client";

import { FaWallet, FaUser } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useWallet } from "../hooks/useWallet";
import { useBalance } from "../hooks/getSolde";
import { WalletDropdown } from "./WalletDropdown";
import { Notif } from "./notification";
import { User } from "./FaUser";

export function Navbar() {
  const { connectWallet, userAdresse, provider, BalanceOpen } = useWallet();
  const { balance } = useBalance(userAdresse, provider);

  return (
    <nav className="font-bold shadow-sm min-h-15 rounded-lg items-center flex justify-between navbar-expand-lg color">
      <div className="mx-1 gap-8 flex">
        <div className="min-h-[40px] w-100 bg-gray-900 flex rounded-lg input-container ml-30">
          <IoIosSearch className="w-8 h-10 mx-3" />
          <input
            type="text"
            className="w-80 ml-2 text-white rounded-lg shadow-1 input"
            placeholder="Rechercher NFT's, Tokens..."
          />
        </div>
        <li className="list-none">
          <ul className="space-x-8 mt-2">
            <a href="#" className="text-gray-300 hover:text-gray-400">Explore</a>
            <a href="#" className="text-gray-300 hover:text-gray-400">Create</a>
            <a href="#" className="text-gray-300 hover:text-gray-400">Sell</a>
          </ul>
        </li>
        <button className="h-full w-full navbarbtn"></button>
      </div>
      <ul>
        <li className="flex gap-2.5">
          <div className="mr-15">
            {BalanceOpen && (
              <div className="flex mt-2 space-y-2">
                <a className="mr-3"></a>
                <span>{balance}</span>
              </div>
            )}
          </div>
          <User />
          <button className="bg-gray-900 rounded-lg flex items-center p-2 cursor-pointer buttonFahome">
            <FaUser className="rounded-lg cursor-pointer mr-1 w-6" />
          </button>
          <Notif />
          <WalletDropdown />
        </li>
      </ul>
    </nav>
  );
}