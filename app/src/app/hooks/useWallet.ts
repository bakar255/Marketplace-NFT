"use client";

import { ethers } from "ethers";
import { useState } from "react";

export const useWallet = () => {
  const [userAdresse, setUserAdresse] = useState<string>('');
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask.");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    setSigner(signer);
    setUserAdresse(address);
  };

  return { connectWallet, userAdresse, signer };
};
