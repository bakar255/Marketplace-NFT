"use client";

import React from "react";
import { FaWallet, FaUser } from "react-icons/fa"; 
import { IoNotificationsSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useWallet } from "./hooks/useWallet";
import { useBalance } from "./hooks/getSolde";
import { WalletDropdown } from "./components/WalletDropdown"
import { Notif } from "./components/notification"
import { Card } from "./components/card"

   export default function Home() {

   const { connectWallet, userAdresse, signer, provider, addrSlice, disconnectWallet, isConnected, BalanceOpen } = useWallet();
   const { balance, loading } = useBalance(userAdresse, provider);

  return (
     <div className="min-w-lg min-h-screen "> 
      <nav className=" font-bold shadow-sm min-h-15 rounded-lg items-center flex justify-between navbar-expand-lg bg-gray-800">
        <div className="mx-1 gap-8 flex ">  
         <div className="min-h-[40px] w-100 bg-gray-900 flex rounded-lg input-container ml-30">
          <IoIosSearch className="w-8 h-10 mx-3" />
          <input type="text" className="w-80 ml-2 text-white rounded-lg shadow-1 input" placeholder="Rechercher NFT's, Tokens..."/>
          </div>
          <li className="list-none">
            <ul className="space-x-8 mt-2 ">
              <a href="#" className="text-gray-300 hover:text-gray-400">Explore</a>
              <a href="#" className=" text-gray-300 hover:text-gray-400">Create</a>
              <a href="#" className="text-gray-400 hover:text-gray-100">Sell</a>
            </ul>
          </li>
          <button className="h-full w-full navbarbtn"></button>
           </div>
             <ul className="">
                <li className="flex gap-2.5">
                  <div className="mr-15">
                  { BalanceOpen && ( 
                    <div className="flex mt-2 ">
                      <a>ETH {balance}</a>
                    </div>
                  )}
                  </div>
                 <button className="bg-gray-900 rounded-lg flex items-center p-2 cursor-pointer buttonFahome"> <FaUser className="rounded-lg cursor-pointer mr-1 w-6"/> </button>
                 <Notif />
                <WalletDropdown />
             </li>
          </ul>
        </nav>
            <main className="flex flex-col items-center mt-10 ">
              <a className="text-4xl font-bold">The NFT Marketplace ! </a>
              <a className="text-2 leading-4">where you can buy and sell your NFT's !</a>
          <div className=" flex flex-col justify-center relative items-center space-y-2.5">
          </div>
        {/* NFT container */}
     <div className="flex flex-wrap gap-8 mt-8"> 
  <div className="w-70 h-80 bg-gray-500 rounded-lg flex flex-col items-center pb-7 p-1"> 
    <img 
      src="singe.nft.png" 
      alt="singe.nft" 
      className="h-full w-full object-cover mb-4 rounded-lg" />
       <button className="w-20 text-white bg-blue-600 py-2 px-6 rounded-lg cursor-pointer">
        Buy
        </button>
        <Card />
       <div className="w-full px-4">  
    </div>
  </div>
</div>
</main>
      <footer className="">
      </footer>
    </div>
  );

}
