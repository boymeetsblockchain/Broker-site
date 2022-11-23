import Image from 'next/image'

export default function AboutComponent() {
  return (
    <div className="bg-gray-200 mx-20 mt-8 ">
      <div className="about-image">
      <Image src={require('/public/images/about.jpg')} alt="about-image" width={400} height={250}/>
      </div>
      <div className="about-info p-6">
        <h1 className='text-2xl'>About Us</h1>
        <p className=''>Bigtrade.com is founded with vision to create 100 percent transparent digital trading experience for its clients. We always had the idea that the investment industry was missing more broad-minded business values. Bictrade.com has a very forward-thinking approach and has always adopted a very flexible business philosophy which has helped us tap into different sectors of the investment sector with great success. Our company is interested in successful and prosperous traders who will create high trading volume. We are proud that we helped many customers to make revenue.</p>
      </div>
    </div>
  )
}
