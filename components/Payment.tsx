import Image from "next/image"
import { FaBitcoin, FaPaypal,FaCcMastercard, FaCcVisa} from "react-icons/fa"
import { SiVisa } from "react-icons/si"
import skrill from "../public/images/skrill.png"
import master from "../public/images/master.png"
import paypal from "../public/images/paypal.png"
import bank from "../public/images/bank.png"


export default function Payment() {
  return (
    <div className="flex flex-col justify-center mx-20">
      <h1 className="text-center text-gray-600 text-4xl font-semibold my-2">Payment </h1>
      <p className="text-center text-gray-600  text-xl my-2">Wide range of payment options</p>
        <div className="border-gray-200 border-2 px-0 my-10">
         <div className="md:flex md:justify-center">
            <div className="w-full h-36  md:w-[300px] border-gray-200 flex items-center justify-center text-2xl md:border-r-2">
              <FaBitcoin />
              <h2>bitcoin</h2>
            </div>
          <div className="w-full h-36 border-t-2 md:border-t-0 md:border-r-2 md:w-[300px] border-gray-200 flex items-center justify-center text-2xl">
              <Image src={skrill} alt="" width={100} />
            </div>
          <div className="w-full h-36 border-t-2 md:border-t-0 md:w-[300px] border-gray-200 flex items-center justify-center text-2xl">
              <Image src={paypal} alt="" width={80} />
            </div>
         </div>
          <div className="md:flex">
            <div className="w-full md:border-r-2 h-36 border-t-2 md:w-[300px] border-gray-200 flex items-center justify-center text-2xl">
              <Image src={bank} alt="" width={80} />
            </div>
            <div className="w-full h-36 border-t-2 md:w-[300px] border-gray-200 flex md:border-r-2 items-center justify-center text-2xl">
              <Image src={master} alt="" width={80} />
            </div>
            <div className="w-full h-36 border-t-2 md:w-[300px] border-gray-200 flex items-center justify-center text-6xl text-gray-700">
              <SiVisa />
            </div>
          </div>
      </div>
    </div>
  )
}

{/* <FaBitcoin />
         <FaPaypal size={80} />
         <FaCcMastercard size={80} />
         <FaCcVisa size={80} /> */}
