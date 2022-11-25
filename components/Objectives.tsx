import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Objectives() {
  const router = useRouter()

  return (
    <div className="my-24 md:flex md:justify-between">
        <div className='text-center'>
        <h1 className="text-3xl font-semibold my-4">Objective</h1>
        <p className="text-lg text-gray-400 p-2">
          Since the founding of Bictrade.com, our principles have been absolute transparency, dedication to our clients, as well as a complete understanding of the features of our profile market and the expectations of different types of investors.
        </p>
        </div>
       <div className='flex md:ml-20 md:mr-6 justify-center mt-6 whitespace-nowrap items-center'>
        <button className='bg-blue-400 p-2 px-8 rounded-md font-semibold text-white' onClick={() => router.push('/sign-up')}>
            Get Started
          </button>
       </div>
    </div>
  )
}
