import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Service from "../components/Service"
import Process from "../components/Process"
import { useContextState } from "../context/context"
import Sidebar from "../components/sidebar"

export default function Index() {
  const {sidebar} = useContextState()

  return (
    <div className={`flex flex-col relative px-6 ${sidebar? "bg-gray-400" : "bg-gray-100"}`}>
      <Navbar/>
      <Hero/>
      <About/>
      <Process/>
      <Service/>
    </div>
  )
}
