import { FaUser } from "react-icons/fa"; 
import { useState } from "react";
import { CiInboxIn } from "react-icons/ci";
import { CiInboxOut } from "react-icons/ci";
import { useWallet } from "../hooks/useWallet";


export const User = () => {

const {addrSlice, userAdresse} = useWallet();
const [userOpen, isUserOpen] = useState(false);
return ( 

    <div>
      <button 
      className="rounded-lg flex items-center p-2 cursor-pointer buttonFahome mt-1"
       onClick={() => isUserOpen(true)}><FaUser className="rounded-lg cursor-pointer mr-1 w-6"/></button> 
       {/* Profile Container */}
      { userOpen && (
            <div className="fixed z-50 Profile items-center color rounded-lg right-0">
              <div className="relative flex items-center p-10">
                <div>
                <span className="text-blue-400-">{addrSlice(userAdresse)}</span>
                </div>
                <div className="block text-left">
                  <span className="text-3xl">$0</span>
                   <div className="flex mt-5">
                    <span className="text-xs">~0.00ETH</span>
                  </div>                
                  <div className="flex items-center space-x-3.5 mt-5">
                    <button className="cursor-pointer color p-2 py-3 hover:bg-colorGen rounded-4xl w-35 flex"><CiInboxIn className="mr-3"/>Deposit </button>
                    <button className="cursor-pointer color hover:color rounded-4xl py-3 p-2 w-35 flex ml-2 "><CiInboxOut className="mr-3"/> Withdraw </button>
                  </div>
                </div>
              </div>
                <div className="flex items-center">
                    <span className="text-6xl text-white"></span>
                </div>
            </div>
          )}
    </div>


)
}