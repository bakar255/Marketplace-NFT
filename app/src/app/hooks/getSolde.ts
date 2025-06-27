import {useState, useEffect} from "react";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";

export const useBalance = (address:string, provider: BrowserProvider | null) => {

  const [balance, setBalance] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(false);
  const [BalanceOpen, setBalanceOpen] = useState<boolean>(false);

useEffect(() => {
    const fetchBalance = async () => {
      if (!address || !provider) {
        setBalance('0');
        return;
      }

      try {
        setLoading(true);
        const balancepure = await provider.getBalance(address);
        const BalanceFormat = parseFloat(ethers.formatEther(balancepure));
        setBalance(parseFloat(BalanceFormat).toFixed(3));
      } catch (err) { 
        alert('Failed to fetch balance');
      } finally {
        setLoading(false);
      }
    };

       fetchBalance();
  }, [address, provider]); 

 
  return { balance, loading, BrowserProvider };
};