import Image  from "next/image"
import {FaHome} from 'react-icons/fa'
import Link from "next/link"
import Register from "../components/Register"
import Whatsapp from "../components/whatsapp"
import Chat from "../components/chat"

export default function SignUp() {
  return (
    <div className="relative"> 
      <Register />
      <Whatsapp/>
      <Chat />
    </div>
  )
}

{/* <div className="bg-slate-50 relative flex  my-32 mx-56">
  <div className="homelink h-[460px] w-1/2 pb-4 bg-black flex flex-col justify-center items-center rounded-sm">
    {/* website Logo */}
//     <h1 className="text-blue-500 my-24 text-2xl text-center font-bold ">Broker Site</h1>
//     <button className=" bg-white items-center rounded-sm px-4 py-2 block">
//       <FaHome className="inline mx-4" />Back to HomePage
//     </button>
//     <button className=" bg-white items-center rounded-sm block px-4 py-2 mt-2">
//       Register Now
//     </button>
//   </div>
//   <div className="signup w-1/2 rounded-sm">
//     <h1 className="text-2xl font-bold text-center my-4">Sign Up for Free!</h1>
//     <form className="flex flex-col items-center">
//       <input type="text" placeholder="Full Name" className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1" />
//       <input type="email" placeholder="Email Address " className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1" />
//       <input type="number" placeholder="Phone Number" className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1" />

//       
// 
//       </select>
//       <select id="currency" name="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//         <option value="choose ">Choose your Currency</option>
//         <option value="dollar">Us Dollar</option>
//         <option value="british">British Pound Steling</option>
//         <option value="euro">Euro</option>
//       </select>
//       <input type="text" placeholder="Occupation" className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1" />
//       <input type="password" placeholder="Password" className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1" />
//       <input type="password" placeholder="Confirm Password" className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1" />
//       <div className="policy flex w-3/4 ">
//         <input type="checkbox" name="policy" id="" className=" mx-4 " />
//         <label htmlFor="policy">I agree to the privacy policy and terms of service.</label>
//       </div>

//       <button type="button" className="focus:outline-none text-white my-2 bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Sign Up Now</button>
//       <Link href='/sign-in' className="text-[#4f77ff] text-2xl text-center">
//         Already Have an Account
//       </Link>
//     </form>

//   </div>
// </div> */}
