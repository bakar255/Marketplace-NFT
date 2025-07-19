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
      <nav className=" font-bold shadow-sm min-h-15 rounded-lg items-center flex justify-between navbar-expand-lg">
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
           <section className="flex justify-center items-center">
          <div className=" w-2/6 mt-15">
            <div className=" p-5 shadow-sm rounded-lg w-2xlflex-col">
             <h1 className="text-white text-4xl">NFT MARKETPLACE</h1>
             <h2 className="text-3xl text-gray-50">Where NFT are trade to earn !</h2>
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
