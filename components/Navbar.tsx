import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import { useContextState } from '../context/context'
import { GrClose } from "react-icons/gr"
import Sidebar from './sidebar'

export default function Navbar() {
  const { sidebar, setSidebar } = useContextState()

  return (
    <div className='sticky top-0 right-0 bg-gray-100'>
      <nav className='border-b-2 px-2 flex  justify-between items-center relative'>
        <div className="home-logo py-4">
          <h1 className='font-bold text-3xl'><Link href='/'>BROKER SITE</Link> </h1>
        </div>
        <div className="nav-links mr-16 hidden md:flex">
          <ul className='flex justify-between align-center '>
            <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/'>Home </Link></li>
            <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/login'>Login</Link></li>
            <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/register'>SignUp </Link></li>
            <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/about'>About us</Link></li>
            <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className={`md:hidden text-2xl `}>
          {sidebar ? <GrClose className='cursor-pointer text-white' onClick={() => setSidebar(false)} /> : <GiHamburgerMenu className='cursor-pointer' onClick={() => setSidebar(true)} />}
        </div>
      </nav>
      {
        sidebar ? (
          <div className='absolute w-full flex justify-center  h-[400px] top-[68px] rounded-xl z-20'>
            <Sidebar />
          </div>
        ) : ("")
      }
    </div>
  )
}
