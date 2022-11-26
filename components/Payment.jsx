import { FaBitcoin, FaPaypal,FaCcMastercard, FaCcVisa} from "react-icons/fa"
export default function Payment() {
  return (
    <div className="flex flex-col justify-center mx-32">
      <h1 className="text-center text-4xl font-semibold my-2">Payment </h1>
      <p className="text-center text-xl my-2">Wide range of payment options</p>
      <div className="icon flex my-4 justify-around">
        <FaBitcoin size={80} />
         <FaPaypal size={80} />
         <FaCcMastercard size={80} />
         <FaCcVisa size={80} />
      </div>
    </div>
  )
}
