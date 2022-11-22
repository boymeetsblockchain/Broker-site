import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex  justify-between border-b-2 align-center'>
     <div className="home-logo p-4">
      <h1 className='font-bold text-3xl ml-16'><Link href='/'>BROKER SITE</Link> </h1>
     </div>
      <div className="nav-links mr-16">
        <ul className='flex justify-between align-center '>
          <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/'>Home </Link></li>
          <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/login'>Login</Link></li>
          <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/register'>SignUp </Link></li>
          <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/about'>About us</Link></li>
          <li className='p-4 text-gray-400 font-bold text-l hover:text-blue-400 hover:scale-125'><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
