import { useState } from "react";

export const Card =  () => {

    //@dev
    // This component let the image covered all the container and when is visible
    // it set the button and artist infos container visible

    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className="relative"> 
         <div 
         className="rounded-lg bg-gray-500 flex items-center" 
          onMouseEnter={() => setIsVisible(true)}
           onMouseLeave={() => setIsVisible(false)}>
            <div>
            <img src="singe.nft.png" alt=""  className="object-cover rounded-lg"/>
            </div>
              <div/>
    
            {isVisible && (
            <div className=" absolute bottom-1 ">
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-400 rounded-b-lg">
                <button className="bg-green-500 p-4">buy</button>
              </div>
            </div>
            )}
            
          </div>
        </div>
    )
}