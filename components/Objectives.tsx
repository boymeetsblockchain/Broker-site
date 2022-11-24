import Link from 'next/link'

export default function Objectives() {
  return (
    <div className="my-24 flex flex-col mx-32 justify-center align-center">
        <h1 className="text-3xl font-semibold my-4">Objective</h1>
      <div className='obj-talk flex align-center'>
      <p className="text-l text-gray-400 p-2">
        Since the founding of Bictrade.com, our principles have been absolute transparency, dedication to our clients, as well as a complete understanding of the features of our profile market and the expectations of different types of investors.
        </p>
        <Link href ='/sign-up' className='bg-blue-400 block  rounded-sm px-6 py-2 my-4 text-white'>Start</Link>
      </div>
    </div>
  )
}
