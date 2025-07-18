"use client";

import React from "react";
import { FaWallet, FaUser } from "react-icons/fa"; 
import { IoNotificationsSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useWallet } from "./hooks/useWallet";
import { useBalance } from "./hooks/getSolde";
import { WalletDropdown } from "./components/WalletDropdown";
import { Notif } from "./components/notification";
import { Card } from "./components/card";
import { User } from "./components/FaUser";


   export default function Home() {

   const { connectWallet, userAdresse, signer, provider, addrSlice, disconnectWallet, isConnected, BalanceOpen } = useWallet();
   const { balance, loading} = useBalance(userAdresse, provider,);


  return (
     <div className="min-w-lg min-h-screen "> 
      <nav className=" font-bold shadow-sm  min-h-15 items-center flex justify-between navbar-expand-lg">
        <div className="mx-1 gap-8 flex ">  
         <div className="min-h-[40px] w-100 bg-gray-900 flex rounded-lg input-container ml-30">
          <IoIosSearch className="w-8 h-10 mx-3" />
          <input type="text" className="w-80 ml-2 text-white rounded-lg shadow-1 input" placeholder="Rechercher NFT's, Tokens..."/>
          </div>
          <li className="list-none">
            <ul className="space-x-8 mt-2 ">
              <a href="#" className="text-gray-300 hover:text-gray-400">Explore</a>
              <a href="/#create" className=" text-gray-300 hover:text-gray-400">Create</a>
              <a href="#" className="text-gray-300 hover:text-gray-400">Sell</a>
            </ul>
          </li>
          <button className="h-full w-full navbarbtn"></button>
           </div>
             <ul className="">
                <li className="flex gap-2.5">
                  <div className="mr-15">
                  { BalanceOpen && ( 
                    <div className="flex mt-2 space-y-2 ">
                      <a className="mr-3"> </a>
                      <span>{balance}</span>
                    </div>
                  )}
                  </div>
                  <User/>
                 <Notif />
                <WalletDropdown  />
             </li>
          </ul>
        </nav>
            <main className="">
           <section className="flex justify-center items-center py-20 bg-gradient-to-b from-sky-300y-900 to-gray-800">
          <div className="text-center max-w-2xl">
            <h1 className="text-white text-5xl font-bold mb-4 animate-fade-in">NFT MARKETPLACE</h1>
            <h2 className="text-2xl text-gray-300 mb-8">Where NFTs are traded to earn!</h2>
            <div className="flex justify-center gap-4">
            <button className="bg-[#3c3fe2] hover:bg-[#827ace] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
             Explore NFTs
              </button>
              <button className=" text-white bg-[#3c3fe2] hover:bg-[#827ace] hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Create NFT
              </button>
            </div>
          </div>
        </section>
        {/* NFT container */}
         <div className="showcase-container"> 
          <div className="flex flex-col items-center">
          </div>
          <div>
            <p className="text-4xl font-bold block">LATEST DROPS </p>
            <p className="border-1 border-solid mt-5.5"></p>
          </div>
         <Card /> 
    </div>
 </main>
      <footer className="">
      </footer>
    </div>
  );

}
