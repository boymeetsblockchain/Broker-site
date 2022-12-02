import Image  from "next/image"
import {FaHome} from 'react-icons/fa'
import Link from "next/link"
export default function signup() {
  return (
    <div className="bg-slate-50 relative flex  my-32 mx-56">
      <div className="homelink h-[460px] w-1/2 pb-4 bg-black flex flex-col justify-center items-center rounded-sm">
         {/* website Logo */}
         <h1 className="text-blue-500 my-24 text-2xl text-center font-bold ">Broker Site</h1>
         <button className=" bg-white items-center rounded-sm px-4 py-2 block">
          <FaHome className="inline mx-4" />Back to HomePage
         </button>
         <button className=" bg-white items-center rounded-sm block px-4 py-2 mt-2">
          Register Now
         </button>
      </div>
      <div className="signup w-1/2 rounded-sm">
       <h1  className="text-2xl font-bold text-center my-4">Login to your Account</h1>
        <form className="flex flex-col items-center">
           <input type="email" placeholder="Email Address "  className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1" />
         
            <input type="password" placeholder="Password" className="my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1"  />
         
            <div className="policy my-4 flex w-3/4 ">
            <input type="checkbox" name="policy" id="" className="mx-4" />
            <label htmlFor="remember">Remember Me</label>
            <Link href='forgot-password'
            className="ml-14"> Forgot Password?</Link>
            </div>
          
            <button type="button" className="focus:outline-none text-white my-2 bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Login Now</button>
            <Link href='/signup' className="text-[#4f77ff] text-2xl text-center">
              Dont Have an Account?
            </Link>
           </form>
           
      </div>
    </div>
  )
}
