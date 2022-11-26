import { FaPhone, FaEnvelope} from "react-icons/fa"

export default function Contact() {
  return (
    <div className="flex flex-col my-4 mx-32">
      <h1 className="text-center text-4xl my-4 font-semibold">Contact Us</h1>
       <div className="bg-white border-sm w-full p-6 border-b-4">
        <div className="email flex items-center">
          <FaEnvelope size={30}className="text-blue-500 mr-2 "/>  
           <div className="email-info">
            <h1 className="text-3xl font-semibold">Email:</h1>
            <p>support@Bictrade.com</p>
           </div>
        </div>
        <div className="call flex my-4 items-center mb-8">
          <FaPhone size={30}className="text-blue-500 mr-2 "/>  
           <div className="email-info">
            <h1 className="text-3xl font-semibold">Call:</h1>
            <p>+1(337)886-5251</p>
           </div>
        </div>
       </div>
        <form  className="bg-white w-full ">
         <div className="name-eamil flex mx-6">
         <div className="name">
            <label htmlFor="Name">Your Name</label>
            <input type="text" className="block px-4 py-2 border focus:outline-none"/>
          </div>
          <div className="email">
            <label htmlFor="email">Your Email</label>
            <input type="email" className="block  px-4 py-2 border bg-white w-full  focus:outline-none "/>
          </div>
         </div>
        </form>
    </div>
  )
}
