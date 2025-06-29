import { useState, useEffect, useRef} from "react";
import { useWallet } from "../hooks/useWallet";
import { FaWallet, FaChevronDown, FaUser} from "react-icons/fa";
import { IoSendOutline, IoToggleOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineDisconnect } from "react-icons/ai";

export const WalletDropdown = () => {

  const [isOpen, setIsOpen] = useState (false)
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { connectWallet, userAdresse, signer, provider, addrSlice, disconnectWallet, isConnected, BalanceOpen } = useWallet();

 useEffect(() =>  {
  const HandleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
     setIsOpen(false);
  }
 })



const Obj = [ 
  {
    id: 1,
    name : "Mon profil",
    icon: <FaUser className='mr-3' />,
    href:'#'

  },
    {
    id: 2,
    name : "Paramètres",
    icon: <IoSendOutline className='mr-3'/>,
    href:'#'

  },
    {
    id: 3,
    name : "Themes",
    icon: <IoToggleOutline className='mr-3'/>,
    href:'#'

  },
  {
    id: 4,
    name : "Disconnect Wallet",
    icon: <AiOutlineDisconnect className='mr-3'/>,
    href:'#',
    onClick: () => disconnectWallet()
  },
  
  
]

return (
  <div ref={dropdownRef} className="relative">
    <button onClick={isConnected ? () => setIsOpen(!isOpen) : connectWallet}
     className="colorGen rounded-lg py-2 text-white flex p-3 focus:outline mr-3 ">
        {isConnected ? addrSlice(userAdresse) : "Connect Wallet" } 
        {isConnected && (
           <FaChevronDown className={` mx-2  transition-tranform ${isOpen ? "rotate-180" : ''}`} />
        )}
    </button>
    {isConnected && isOpen && (
      <div className="dropdown-container flex flex-col">
        {Obj.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={item.onClick}
            className="flex items-center px-4 py-3 text-sm text-white dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            {item.icon} 
            <span className="paragraph">{item.name}</span>
          </a>
        ))}
      </div>  
    )}
  </div>
)}