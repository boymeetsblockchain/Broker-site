import Image from 'next/image'

export default function AboutComponent() {
  return (
    <div className="bg-gray-200 mx-7 md:space-x-6 lg:space-x-3 lg:mx-28 mt-8  p-8 md:flex md:items-center">
      <div className='flex-1 flex justify-center'>
        <div className="about-image ">
          <Image src={require('/public/images/about.jpg')} alt="about-image" width={550} height={350} />
        </div>
      </div>
      <div className="about-info mt-4 md:mt-0 flex-1">
        <h1 className='text-3xl'>About Us</h1>
        <p className='text-[18px] md:text-[15px] lg:text-[18px]'>Bigtrade.com is founded with vision to create 100 percent transparent digital trading experience for its clients. We always had the idea that the investment industry was missing more broad-minded business values. Bictrade.com has a very forward-thinking approach and has always adopted a very flexible business philosophy which has helped us tap into different sectors of the investment sector with great success. Our company is interested in successful and prosperous traders who will create high trading volume. We are proud that we helped many customers to make revenue.</p>
      </div>
    </div>
  )
}
