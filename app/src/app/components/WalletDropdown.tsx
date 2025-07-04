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
    img:"MetaMask_Fox.svg.png",
    onClick: () => connectWallet
  },

  {
    id: 2,
    provider: "WalletConnect",
    img: "Wallet.svg"
  },

  {
  id:3,
  provider: "Coinbase Wallet",
  img: "realcoinbase.svg"
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
     className="buttonConnect">
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
       {walletProvider.map((provider) =>(
        <div
        className="bg-gray-600 rounded-lg py-2 hover:bg-gray-500 cursor-pointer mt-4 font-bold text-left flex"
        key={provider.id}>
        <img src={provider.img} alt=""  className="w-10 h-10"/>
           <button className="mx-3" onClick={provider.onClick}>{provider.provider}</button>
        </div>
       ))}
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