"use client";

import React from "react";
import { FaUser } from "react-icons/fa"; 
import { useWallet } from "./hooks/useWallet";
import { useBalance } from "./hooks/getSolde";


   export default function Home() {

   const { connectWallet, userAdresse, signer, provider, addrSlice } = useWallet();
   const { balance, loading } = useBalance(userAdresse, provider);

  return (
    <div className="min-w-lg min-h-screen "> 
      <nav className=" font-bold shadow-sm min-h-15 rounded-lg items-center flex justify-between navbar-expand-lg bg-gray-800">
        <div className="mx-1 gap-8 ">  
         NFT Marketplace 
         <div className="min-h-[40px] w-90 bg-gray-900 flex">
        <input type="text" className="w-80 ml-10 text-white" placeholder="Rechercher NFT's, Tokens"/>
        </div>
        </div>
          <ul className="">
             <li className="flex gap-2.5">
               <button className="bg-gray-950 focus:outline-none cursor-pointer rounded-lg px-4 py-2 mx-2 " onClick={connectWallet}>Connect Wallet</button>
               <button className="bg-gray-950 rounded-lg flex items-center p-2 "> <FaUser className=" bg-sky-500 rounded-lg cursor-pointer mr-1 w-8 h-8"/>{addrSlice(userAdresse)} </button>
             </li>
          </ul>
        </nav>
            <main className="flex flex-col items-center mt-10 ">
          {/* Sélecteur de filtre */}
          <div className=" flex flex-col justify-center relative items-center space-y-2.5">
          <a href="">SOLDE : {balance} ETH</a>
          </div>
        {/* NFT container */}
     <div className="flex flex-wrap gap-8 mt-8"> {/* Suppression de space-x-7 */}
  <div className="w-70 h-80 bg-gray-500 rounded-lg flex flex-col items-center pb-7 p-1"> {/* Suppression de relative inutile ici */}
    <img 
      src="singe.nft.png" 
      alt="singe.nft" 
      className="h-full w-full object-cover mb-4 rounded-lg" />
    <button className="w-20 text-white bg-blue-600 py-2 px-6 rounded-lg cursor-pointer">
        Buy
      </button>
       <div className="w-full px-4"> {/* Conteneur interne pour le bouton */}  
    </div>
  </div>
</div>
</main>
      <footer className="">
      </footer>
    </div>
  );

}
