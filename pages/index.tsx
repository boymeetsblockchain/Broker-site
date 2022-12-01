import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Service from "../components/Service"
import Process from "../components/Process"
import { useContextState } from "../context/context"
import Objectives from "../components/Objectives"
import Testimonial from "../components/Testimonial"
import Payment from "../components/Payment"
import Frequent from "../components/Frequent"
import Contact from "../components/Contact"
import Footer from "../components/footer"
import Whatsapp from "../components/whatsapp"
import Chat from "../components/chat"

export default function Index() {
  const {sidebar} = useContextState()

  return (
    <div className={`flex flex-col pb-10 relative px-6 ${sidebar? "bg-gray-400" : "bg-gray-100"}`}>
      <Navbar/>
      <Hero/>
      <About/>
      <Process/>
      <Service/>
      <Objectives/>
      <Testimonial />
      <Payment/>
      <Frequent/>
      <Contact/>
      <Footer />
      <Whatsapp />
      <Chat />
    </div>
  )
}
