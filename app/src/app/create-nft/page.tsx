
export default function createNFT() {

    return(
       <div className="min-h-screen bg-[#11110d]">
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-100 mb-6">
          Earn to create your{' '}
          <span className="bg-gradient-to-r from-sky-800 to-purple-300 text-transparent bg-clip-text">
            NFT
          </span>{' '}
          directly here!
        </h1>
        <p className="text-2xl text-gray-400 max-w-4xl mb-8">
          Create your NFT, and earn royalties and fee by selling it to others users in the platform.
          You can import your own NFT to do so.
        </p>
        <div className="w-150 max-w-4xl h-60 rounded-lg bg-[#957a7a]/20 backdrop-blur-sm border border-[#957a7a]/30 p-6">
        </div>

        <button className="bg-gradient-to-r from-sky-800 to-purple-300 p-8 py-3 rounded-sm max-w-4xs mt-9 outline-1 outline-gray-800 cursor-pointer">Create your NFT</button>
      </div>
    </div>
  </section>
</div>
    )
}