import Link from 'next/link'
import React from 'react'
import { useContextState } from '../context/context'

const Sidebar = () => {
    const { setSidebar } = useContextState() 

  return (
      <div className='bg-white w-full rounded-xl'>
          <ul className='p-3'>
              <li className='p-2 text-gray-400 font-bold text-l hover:text-blue-400 ' onClick={() => setSidebar(false)}><Link href='/'>Home </Link></li>
              <li className='p-2 text-gray-400 font-bold text-l hover:text-blue-400 ' onClick={() => setSidebar(false)}><Link href='/sign-in'>Login</Link></li>
        <li className='p-2 text-gray-400 font-bold text-l hover:text-blue-400 ' onClick={() => setSidebar(false)}><Link href='/SignUp'>SignUp </Link></li>
              <li className='p-2 text-gray-400 font-bold text-l hover:text-blue-400 ' onClick={() => setSidebar(false)}><Link href='/about'>About us</Link></li>
              <li className='p-2 text-gray-400 font-bold text-l hover:text-blue-400 ' onClick={() => setSidebar(false)}><Link href='/contact'>Contact</Link></li>
          </ul>
    </div>
  )
}

export default Sidebar