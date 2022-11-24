import Image from 'next/image'
import {useState} from 'react'
export default function Process() {
  const [clickItem, setClickItem]= useState('first-item')

  const  handleclick = (click:string)=>{
    // if(clickItem === ""){
      setClickItem(click)
    // } else if (clickItem === click)
  }

  return (
    <div className="md:flex mx-4 md:flex-row-reverse md:mx-0 lg:mx-10 md:items-center md:justify-center md:space-x-7 lg:space-x-14 my-16 md:my-24">
      <div className='md:w-[46%]'>
        <div className='flex justify-center'>
          <div className="process-img">
            <Image src={require('/public/images/f1.png')} alt="about-image" width={400} height={300} />
          </div>
        </div>
      </div>
      <div className="process md:w-[46%] mt-10 md:mt-0">
        <div className={` ${clickItem === "first-item" ? " border-l-4 border-blue-600 bg-gray-200" : ""} py-6 px-4 border-l-4  hover:bg-gray-200 cursor-pointer `} onClick={() => handleclick("first-item")}>
          <h2 className={`text-xl font-semibold ml-4 ${clickItem === "first-item" ? "text-blue-600": "text-black"}`}>Open An Account</h2>
          <p className='ml-4'>it is easy and free .Fill the  `Registration` form and you are good to go</p>
        </div>
        <div className={` ${clickItem === "second-item"? " border-l-4 border-blue-600 bg-gray-200" : ""} py-6 px-4 border-l-4  hover:bg-gray-200 cursor-pointer `} onClick={() => handleclick("second-item")}>
          <h2 className={`text-xl font-semibold ml-4 ${clickItem === "second-item" ? "text-blue-600": "text-black"}`}>Fund Your  Account</h2>
          <p className='ml-4'>Fund your investment through any of the available payment gateways</p>
        </div>
        <div className={` ${clickItem === "third-item" ? " border-l-4 border-blue-600 bg-gray-200" : ""} py-6 px-4 border-l-4  hover:bg-gray-200 cursor-pointer `} onClick={() => handleclick("third-item")}>
          <h2 className={`text-xl font-semibold ml-4 ${clickItem === "third-item" ? "text-blue-600" : "text-black"}`}>Trade</h2>
          <p className='ml-4'>Predict market Movement accurately to start earning</p>
        </div>
        <div className={` ${clickItem === "fourth-item" ? " border-l-4 border-blue-600 bg-gray-200" : ""} py-6 px-4 border-l-4  hover:bg-gray-200 cursor-pointer `} onClick={() => handleclick("fourth-item")}>
          <h2 className={`text-xl font-semibold ml-4 ${clickItem === "fourth-item" ? "text-blue-600": "text-black"}`}>Withdraw Profit</h2>
          <p className='ml-4'>Swift withdrawal of your profit after successful trades</p>
        </div>
      </div>
    </div>
  )
}
