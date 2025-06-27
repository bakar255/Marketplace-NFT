"use client";

import React from "react";
import { FaWallet, FaUser } from "react-icons/fa"; 
import { IoNotificationsSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useWallet } from "./hooks/useWallet";
import { useBalance } from "./hooks/getSolde";


   export default function Home() {

   const { connectWallet, userAdresse, signer, provider, addrSlice, disconnectWallet, isConnected, BalanceOpen } = useWallet();
   const { balance, loading } = useBalance(userAdresse, provider);

  return (
     <div className="min-w-lg min-h-screen "> 
      <nav className=" font-bold shadow-sm min-h-15 rounded-lg items-center flex justify-between navbar-expand-lg bg-gray-800">
        <div className="mx-1 gap-8 flex ">  
         <div className="min-h-[40px] w-80 bg-gray-900 flex rounded-lg input-container ml-30">
          <IoIosSearch className="w-8 h-10 mx-3" />
          <input type="text" className="w-80 ml-2 text-white rounded-lg shadow-1 input" placeholder="Rechercher NFT's, Tokens..."/>
          </div>
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
                <button className="bg-gray-900 rounded-lg flex items-center p-3 cursor-pointer buttonFahome"><IoNotificationsSharp className="rounded-lg cursor-pointer"/></button>
               <button  className={isConnected ? " flex colorGen rounded-lg p-3 py-2 cursor-pointer mr-4" : " flex colorGen cursor-pointer rounded-lg p-3 py-2 mr-4"}  onClick={isConnected ? disconnectWallet : connectWallet}>
               {isConnected ? "Disconnect" : "Connect "}   <FaWallet className="ml-4 mt-1" /> </button>
             </li>
          </ul>
        </nav>
            <main className="flex flex-col items-center mt-10 ">
          {/* Sélecteur de filtre */}
          <div className=" flex flex-col justify-center relative items-center space-y-2.5">
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
