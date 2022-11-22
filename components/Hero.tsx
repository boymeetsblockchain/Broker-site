import Image from "next/image"

export default function Hero() {
  return (
    <div className='flex flex-1 justify-around mx-32 my-8'>
     <div className="hero-info p-3">
       <h1 className='text-6xl font-bold'>
       Diversify your portfolio with a true multi-asset broker
       </h1>
       <p className='text-2xl text-gray-300 my-6'>Forex - Commodities - Bonds - Metals</p>
       <p className='text-2xl text-gray-300 my-6'>Energies - Shares - Indices - DMA - ETFs</p>
       <button className='bg-blue-400 rounded-sm px-6 py-2 my-6 text-white'>Get Started </button>
     </div>
     <div className="hero-image ml-60">
        <Image src={require('/public/images/hero-img.png')} alt="hero-image" width={700} height={300}/>
     </div>
    </div>
  )
}
