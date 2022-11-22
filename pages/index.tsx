import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
export default function index() {
  return (
    <div className="flex flex-col mx-2">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}
