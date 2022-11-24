import Image from "next/image"
import {FaGlobe,FaHeadset,FaLock,} from 'react-icons/fa'
import { BiWorld  } from "react-icons/bi"
import verify from "../public/images/verify.png"
import multi from "../public/images/multi.png"

export default function Service() {
  return (
    <div className="">
      <div className='flex flex-col mx-6 my-8 bg-gray-200 p-14'>
        <div className="service-talk">
          <h1 className='text-center font-semibold text-4xl '>Services</h1>
          <p className='text-lg text-center mt-4'>Building trust is important and to ensure you know you are protected, Bictrade.com has employed regulation and state-of-the-art technology for you to trade with confidence.</p>
          <div className="servcice md:flex md:items-center mt-8 md:flex-wrap md:justify-center space-x-3">
            <div className="global md:flex md:flex-col md:items-center md:w-[250px] pt-10 md:h-[320px] my-6 bg-white p-4 pb-7 hover:border-b-4 hover:border-pink-500">
              <div className="mb-2 text-center">
                <div className="flex justify-center"><BiWorld className="text-5xl mb-2 text-pink-400" /></div>
                <h1 className="font-bold text-xl">Global</h1>
              </div>
              <p className="text-center">Our services are provided in over 100 countries worldwide.</p>
            </div>
            <div className="global md:flex md:flex-col md:items-center md:w-[250px] pt-10 md:h-[320px] my-6 bg-white p-5 pb-7 hover:border-b-4 hover:border-sky-600">
              <div className="mb-2 text-center">
                <div className="flex justify-center"><FaHeadset className="text-5xl mb-2 text-sky-600" /></div>
                <h1 className="font-bold text-xl">Support</h1>
              </div>
              <p className="text-center">Our Support team works tirelessly all day and night to make sure you suffer no inconvenience.</p>
            </div>
            <div className="global md:flex md:flex-col md:items-center md:w-[250px] pt-10 md:h-[320px] my-6 bg-white p-4 pb-7 hover:border-b-4 hover:border-green-400">
              <div className="mb-2 text-center">
                <div className="flex justify-center">
                  <Image src={verify} alt="" width={50} height={50} />
                </div>
                <h1 className="font-bold text-xl">Security</h1>
              </div>
              <p className="text-center">We use DDOS attack prevention, and Secure Socket Layer encryption in order to protect our assets and our client data..</p>
            </div>
            <div className="global md:flex md:flex-col md:items-center md:w-[250px] pt-10 md:h-[320px] my-6 bg-white p-4 pb-7 hover:border-b-4 hover:border-blue-500">
              <div className="mb-2 text-center">
                <div className="flex justify-center">
                  <Image src={multi} alt="" width={50} height={50} />
                </div>
                <h1 className="font-bold text-xl">Multi Asset</h1>
              </div>
              <p className="text-center">Trade Stocks, Commodities and Forex with endless trading opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
