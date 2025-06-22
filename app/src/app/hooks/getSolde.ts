import { ethers } from "ethers";

export async function getSolde(address: string): Promise<string> {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const balance = await provider.getBalance(address);
  return ethers.utils.formatEther(balance);
}