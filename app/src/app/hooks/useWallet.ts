"use client";

import { BrowserProvider } from "ethers";
import { ethers } from "ethers";
import { useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';


export const useWallet = () => {
  const [userAdresse, setUserAdresse] = useState<string>('');
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [BalanceOpen, setBalanceOpen] = useState<boolean>(false);
  const [modelProvider, setModelProvider] = useState(false);
  

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask.");
      return;
    }
    try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    const accounts = await provider.listAccounts();
    setIsConnected(true);
    setSigner(signer);
    setUserAdresse(address);
    setProvider(provider);
    setBalanceOpen(true);
    setModelProvider(false);
    } catch (error) {
      console.log("Error Connecting wallet")
    } finally {
      console.error();
    }
  }

const connectWalletConnect = async () => {
  try {
    const walletConnectProvider = new WalletConnectProvider({
      rpc: {
        1: "https://mainnet.infura.io/v3/8eb79aff59ef473c8d08a2b6d6de8096",
      },
      chainId: 1,
    });

    await walletConnectProvider.enable();
    
  } catch (error) {
    console.error("WalletConnect error:", error);
  }
};


  function addrSlice(address : string) {
    if(!address) return ("");
  return  `${address.slice(0,4)}...${address.slice(-2)}`
  }


  const disconnectWallet = async () => {
    setUserAdresse("");
    setSigner(null);
    setProvider(null);
    setIsConnected(false);  
    setBalanceOpen(false);
  }

   return { connectWallet, modelProvider, connectWalletConnect, userAdresse, signer, provider, addrSlice, disconnectWallet, isConnected, BalanceOpen };

};


