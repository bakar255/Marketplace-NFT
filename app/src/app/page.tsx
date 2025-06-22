"use client";

import React from "react";
import { FaUser } from "react-icons/fa"; 
import { useWallet } from "./hooks/useWallet";


   export default function Home() {

   const { connectWallet, userAdresse, signer } = useWallet();

   const nftDate = [
    { id: 1, image: "nftpunk.webp", alt: "nft"},
    { id: 2, image: "nftpunk.webp", alt: "nft"},
    { id: 3, image: "nftpunk.webp", alt: "nft"},
   ]
 
  return (
    <div className="min-w-lg min-h-screen"> 
      <nav className=" font-bold shadow-sm min-h-15 rounded-lg items-center flex justify-between navbar-expand-lg">
        NFT Marketplace 
          <ul className="flex ">
             <li className="flex">
               <button className="bg-blue-600 focus:outline-none cursor-pointer rounded-lg px-4 py-2 mx-2 " onClick={connectWallet}>Connexion</button>
               <button className="bg-blue-600 rounded-lg "> <FaUser className=" mx-3 cursor-pointer"/> </button>
             </li>
          </ul>
        </nav>
            <main className="flex flex-col items-center mt-10 bg-gray-700">
          {/* Sélecteur de filtre */}
          <div className=" flex flex-col justify-center relative items-center space-y-2.5">
            <a className="font-semibold text-2xl">Parcourir les NFT par prix et collection : </a>
              <div className="flex flex-row space-x-6 mt-10">
                    <a className="font-semibold">Filter:</a>
                <select name="Category" id="" className="h-8 w-30 focus:outline bg-blue">
              <option value="Gaming">Gaming</option>
              </select>
              <select name="Category" id="" className="h-8 w-30 focus:outline">
              <option value="Gaming">Prix</option>
              </select>
            </div>
          </div>
        {/* NFT container */}
       <h1 className="font-bold text-xl mb-4"></h1>
    <div className="flex flex-wrap gap-8 space-x-7 mt-8">
  {nftDate.map((nft) => (
    <div
      key={nft.id}
      className="w-50 h-50 rounded-lg bg-gray-500 relative flex flex-col items-center justify-between p-4">
      <img
        src={nft.image}
        alt={nft.alt}
        className="w-50 h-50 rounded-lg object-cover outline-1"
      />
      <button className="bg-green-500 text-white focus:outline-none py-2 px-4 rounded-lg cursor-pointer">
        Mint
      </button>
    </div>
  ))}
</div>
</main>
      <footer className="">
      </footer>
    </div>
  );

}
