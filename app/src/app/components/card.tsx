import { useState } from "react";

export const Card =  () => {

    //@dev
    // This component let the image covered all the container and when is visible
    // it set the button and artist infos container visible

    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className="relative flex-wrap "> 
        <div className=" justify-center items-center rounded-lg">
         <div 
         className="rounded-lg bg-gray-500 flex items-center w-50 pb-20 relative" 
          onMouseEnter={() => setIsVisible(true)}
           onMouseLeave={() => setIsVisible(false)}>
            <div className="bottom-0 justify-between  font-bold absolute">
                0.05 ether
               <a className="absolute bottom-10 left-9 font-bold text-white">Singe</a>
            </div>
            <div>
            <img src="singe.nft.png" alt="" className="object-cover rounded-lg"/>
            </div>
              <div/>
              </div>    
            {isVisible && (
            <div className=" absolute bottom-1 ">
                <div className="absolute bottom-0 left-0 top-0  p-2 bg-gray-400 rounded-b-lg">
                <button className="bg-green-500 p-4">buy</button>
              </div>
            </div>
            )}
            
          </div>
        </div>
    )
}