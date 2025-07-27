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
         <div className="min-w-lg mx-auto min-h-screen  bg-gradient-to-b  to-[#1b1846]"> 
            <main className="">
           <section className="flex justify-center items-center py-20 ">
          <div className="text-center max-w-2xl">
            <h1 className="text-white text-5xl font-bold mb-4 animate-fade-in">NFT MARKETPLACE</h1>
            <h2 className="text-2xl text-gray-300 mb-8">Where NFTs are traded to earn!</h2>
            <div className="flex justify-center gap-4">
            <button className="  text-white px-6 py-3 cursor-pointer rounded-lg font-medium transition-all duration-300 transform hover:scale-105" 
            style= {{ 
              backgroundColor:'rgb(39, 39, 92)'
             }}
            >
             Explore NFTs
              </button>
              <button className=" text-white cursor-pointer hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  style= {{ 
                  backgroundColor:'rgb(39, 39, 92)'
                }} >
                Create NFT
              </button>
            </div>
          </div>
        </section>
         {/* NFT container */}
         <div className="showcase-container "> 
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
