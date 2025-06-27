"use client";

import { BrowserProvider } from "ethers";
import { ethers } from "ethers";
import { useState } from "react";


export const useWallet = () => {
  const [userAdresse, setUserAdresse] = useState<string>('');
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false)

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask.");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setIsConnected(true);
    setSigner(signer);
    setUserAdresse(address);
    setProvider(provider);
  };

  function addrSlice(address : string) {
  return address.slice(0,3 ) + "..." + address.slice(-2);
  }



  const disconnectWallet = async () => {
    setUserAdresse("")
    setSigner(null)
    setProvider(null)
    setIsConnected(false);  
  }

  
   return { connectWallet, userAdresse, signer, provider, addrSlice, disconnectWallet, isConnected };

  
};


