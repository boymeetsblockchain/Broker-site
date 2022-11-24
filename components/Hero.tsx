import Image from "next/image"

export default function Hero() {
  return (
    <div className="lg:px-20">
      <div className='md:flex md:flex-row-reverse  md:items-center md:justify-between my-8 w-full'>
        <div className="w-full md:w-inherit mb-10 flex justify-center">
          <div className="hero-image w-[280px] md:w-[350px] flex justify-center">
            <Image src={require('/public/images/hero-img.png')} alt="hero-image" width={700} height={300} />
          </div>
        </div>
        <div className="hero-info p-3">
          <h1 className='text-4xl md:text-5xl text-gray-600 font-bold'>
            Diversify your portfolio with a true multi-asset broker
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 my-5'>Forex - Commodities - Bonds - Metals</p>
          <p className='text-xl md:text-2xl text-gray-600 my-5'>Energies - Shares - Indices - DMA - ETFs</p>
          <button className='bg-blue-400 text-2xl rounded-sm px-6 py-2 my-4 text-white'>Get Started </button>
        </div>

      </div>
    </div>
  )
}
