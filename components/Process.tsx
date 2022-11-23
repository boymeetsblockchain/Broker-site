import Image from 'next/image'
import {useState} from 'react'
export default function Process() {
  const[blue,setBlue]= useState(false)
  const  onBlue =()=>{
    setBlue( (prev)=> !prev)
  }
  return (
    <div className="flex mx-32 justify-between my-8 flex-1">
      <div className="process">
        <div className={` ${blue ? "border-blue-600" :"border-gray-400"} py-6 px-4 border-l-4 border-gray-400 hover:bg-gray-200 cursor-pointer `} onClick={onBlue}>
          <h2 className={`text-xl font-semibold ml-4 ${blue ? "text-blue-600": "text-black"}`}>Open An Account</h2>
          <p className='ml-4'>it is easy and free .Fill the  `Registration` form and you are good to go</p>
        </div>
        <div className={` ${blue ? "border-blue-600" :"border-gray-400"} py-6 px-4 border-l-4 border-gray-400 hover:bg-gray-200 cursor-pointer `}onClick={onBlue}>
          <h2  className={`text-xl font-semibold ml-4 ${blue ? "text-blue-600": "text-black"}`}>Fund Your  Account</h2>
          <p className='ml-4'>Fund your investment through any of the available payment gateways</p>
        </div>
        <div className={` ${blue ? "border-blue-600" :"border-gray-400"} py-6 px-4 border-l-4 border-gray-400 hover:bg-gray-200 cursor-pointer `} onClick={onBlue}>
          <h2  className={`text-xl font-semibold ml-4 ${blue ? "text-blue-600": "text-black"}`}>Trade</h2>
          <p className='ml-4'>Predict market Movement accurately to start earning</p>
        </div>
        <div className={` ${blue ? "border-blue-600" :"border-gray-400"} py-6 px-4 border-l-4 border-gray-400 hover:bg-gray-200 cursor-pointer `} onClick={onBlue}>
          <h2 className={`text-xl font-semibold ml-4 ${blue ? "text-blue-600": "text-black"}`}>Withdraw Profit</h2>
          <p className='ml-4'>Swift withdrawal of your profit after successful trades</p>
        </div>
      </div>
      <div className="process-img">
      <Image src={require('/public/images/f1.png')} alt="about-image" width={400} height={250}/>
       
      </div>
    </div>
  )
}
