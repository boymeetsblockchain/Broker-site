import { FaPhone, FaEnvelope} from "react-icons/fa"

export default function Contact() {
  return (
    <div className="my-4 mx-8 bg-gray-200 p-4">
      <h1 className="text-center text-4xl my-4 font-semibold">Contact Us</h1>
      <div className="bg-white border-2 border-gray-300 w-full p-6 space-y-5 mb-10">
        <div className="email flex items-center space-x-4">
             <div className="bg-[#f5f2f2] rounded-full p-3 flex items-center justify-center">
            <FaEnvelope className="text-blue-500 text-xl " /> 
             </div>
           <div className="email-info">
            <h1 className="text-xl font-semibold">Email:</h1>
            <p className="text-gray-400">support@Bictrade.com</p>
           </div>
        </div>
        <div className="call flex items-center space-x-4">
          <div className="bg-[#f5f2f2] rounded-full p-3 flex items-center justify-center">
            <FaPhone className="text-blue-500 text-xl " />
          </div>
          <div className="email-info">
            <h1 className="text-xl font-semibold">Call:</h1>
            <p className="text-gray-400">+1(337)886-5251</p>
          </div>
        </div>
       </div>
      <form className="bg-white w-full py-10 px-4 md:px-10 space-y-6">
        <div className="md:flex md:items-center space-y-6 md:space-y-0 md:space-x-6">
         <div className="name w-full space-y-2">
            <label htmlFor="Name">Your Name</label>
            <input type="text" className="block px-4 py-2 border focus:outline-none w-full"/>
          </div>
          <div className="email w-full space-y-2">
            <label htmlFor="email">Your Email</label>
            <input type="email" className="block  px-4 py-2 border bg-white w-full  focus:outline-none "/>
          </div>
         </div>
        <div className="subject w-full space-y-2">
          <label htmlFor="email">Subject</label>
          <input type="email" className="block  px-4 py-2 border bg-white w-full  focus:outline-none " />
        </div>
        <div className="email w-full space-y-2">
          <label htmlFor="email">Message</label>

          <textarea className="block  px-4 py-2 border bg-white w-full h-32 focus:outline-none " />
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-gray-600 p-2 mt-6">Send Message</button>
        </div>
        </form>
    </div>
  )
}
