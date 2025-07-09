import { FaUser } from "react-icons/fa"; 
import { useState } from "react";


export const User = () => {

const [userOpen, isUserOpen] = useState(false);
return ( 

    <div>
      <button className="" onClick={() => isUserOpen(true)}><FaUser/></button> 
      {userOpen && (
        <div className="fixed z-50 w-52 items-center right-0">
            <div className="flex items-center">
                <span className="text-6xl text-white"></span>
                <span></span>
            </div>
        </div>
      )}

    </div>


)
}