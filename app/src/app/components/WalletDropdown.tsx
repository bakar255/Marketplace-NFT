import { useState, useEffect, useRef} from "react";
import { useWallet } from "../hooks/useWallet";
import { FaWallet, FaChevronDown, FaUser} from "react-icons/fa";
import { IoSendOutline, IoToggleOutline, } from "react-icons/io5";
import { IoMdSettings, IoMdClose } from "react-icons/io";
import { AiOutlineDisconnect } from "react-icons/ai";

export const WalletDropdown = () => {

  const [isOpen, setIsOpen] = useState (false)
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [ModelProvider, setModelProvider] = useState(false);
  const { connectWallet, userAdresse, signer, provider, addrSlice, disconnectWallet, isConnected, BalanceOpen } = useWallet();

 useEffect(() =>  {
  const HandleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
     setIsOpen(false);
  }
 })


 const walletProvider = [
  
  {
    id: 1,
    provider: "Metamask",
  },

  {
    id: 2,
    provider: "WalletConnect",
  },

  {
  id:3,
  provider: "Coinbase Wallet",
  }
 ]

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
    {/* Button connectWallet  */}
    <button onClick={isConnected ? () => setIsOpen(!isOpen) : () => setModelProvider(true)}
     className="colorGen rounded-lg py-2 text-white flex p-3 focus:outline mr-3 ">
        {isConnected ? addrSlice(userAdresse) : "Connect Wallet" } 
        {isConnected && (
           <FaChevronDown className={` mx-2  transition-tranform ${isOpen ? "rotate-180" : ''}`} />
        )}
    </button>
    {/* Container Proivder  */}
    { ModelProvider && (  
    <div className="modelProvider">
      <div className=" flex justify-between relative"> 
       <label className="block font-bold text-left mb-4"> Connect your wallet</label>
       <button className="x" onClick={ () => setModelProvider(false)}> <IoMdClose /> </button>
       </div>
       <div className="bg-gray-600 rounded-lg py-2 hover:bg-gray-500 cursor-pointer mt-4 font-bold text-left flex">
        <img src="MetaMask_Fox.svg.png" alt="fox" className="w-10 h-10 " />
        <button className="mx-2">Metamask</button>
       </div>
    </div>
    )}
    {/* State variable set true */}
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