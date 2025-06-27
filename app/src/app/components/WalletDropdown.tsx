import { useState, useEffect, useRef} from "react";
import { useWallet } from "../hooks/useWallet";

const WalletDropdown = () => {

  const [isOpen, setIsOpen] = useState (false)
  const dropdownRef = useEffect<HTMLDivElement>;
  const { connectWallet, userAdresse, signer, provider, addrSlice, disconnectWallet, isConnected, BalanceOpen } = useWallet();

 useEffect(() =>  {
  const HandleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
     setIsOpen(false);
  }
 })
document.addEventListener("mousedown", HandleClick)
}