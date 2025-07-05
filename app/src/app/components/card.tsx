import { useState } from "react";
import { GrValidate } from "react-icons/gr";

export const Card =  () => {

    //@dev
    // This component let the image covered all the container and when is visible
    // it set the button and artist infos container visible

    const [isVisible, setIsVisible] = useState<boolean>(false);

      const CryptoPunks = [
      
      {
        id: 1,
        author:"CryptoPunks",
        name:"CryptoPunk 8332",
        img:"https://i2.seadn.io/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/8ad21e2fe7c0f2f0c7ff6b7ff3cde5/188ad21e2fe7c0f2f0c7ff6b7ff3cde5.png?w=350",
        price:"0.50 ETH",
      },

      {
        id: 2,
        author:"CryptoPunks",
        name:"CryptoPunk 4531",
        img:"https://i2.seadn.io/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/4c3fbab7649836b70f74b5a04a8ace/274c3fbab7649836b70f74b5a04a8ace.png?w=350",
        price:"0.56 ETH",
      },

      {
        id: 3,
        author:"CryptoPunks",
        name:"CryptoPunk 5611",
        img:"https://i2.seadn.io/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6565a1ed6615174cdcc4259dcccb81/856565a1ed6615174cdcc4259dcccb81.png?w=350",
        price:"0.37 ETH",
      },

]

    return (
        <div>
        {CryptoPunks.map((punk) => (
          <div key={punk.id} className="rounded-lg w-54 overflow-hidden color transition-all ease-in-out duration-300">
              <div className="h-82">
              <img
               src={punk.img} 
               alt={punk.name} 
               className="object-cover h-50 w-full"/>
                <div className="space-y-1 p-5">
                  <h3 className="text-gray-500 text-xs flex lowercase">{punk.author}<GrValidate className="ml-2 text-green-500" /></h3>
                   <span className="lowercase">{punk.name}</span>
                   <div className="justify-between flex items-center mt-3">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Price</span>
                      <span className="lowercase">{punk.price}</span>              
                    </div>
                    <button className="bg-green-400 p-1 rounded-lg">mint</button>
                   </div>
                </div>
             </div>    
         </div>
        ))}
        </div>
)
}