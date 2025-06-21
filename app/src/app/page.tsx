
import React from "react";

export default function Home() {
  

  const nftDate = [
    { id: 1, image: "nftpunk.webp", alt: "nft"},
    { id: 2, image: "nftpunk.webp", alt: "nft"},
    { id: 3, image: "nftpunk.webp", alt: "nft"},
  ]
  ddsq

  return (
    <div className="min-w-lg">
      <nav className="shadow-sm bg-gray-800 min-h-15 rounded-lg items-center flex-col flex font-bold">
        NFT Marketplace
        </nav>
      <main className="flex flex-col items-center">

        {/* NFT container */}
       <h1 className="font-bold text-xl mb-4">NFT</h1>

<div className="flex flex-wrap gap-8">
  {nftDate.map((nft) => (
    <div
      key={nft.id}
      className="w-60 h-80 rounded-lg bg-gray-500 relative flex flex-col items-center justify-between p-4"
    >
      <img
        src={nft.image}
        alt={nft.alt}
        className="w-full h-60 rounded-lg object-cover"
      />
      <button className="bg-green-500 text-white focus:outline-none py-2 px-4 rounded-lg cursor-pointer">
        Buy
      </button>
    </div>
  ))}
</div>
</main>
      <footer className="">
      
      </footer>
         
    </div>
  );
}
