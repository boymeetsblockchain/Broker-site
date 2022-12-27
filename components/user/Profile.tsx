import { BsArrowRight } from 'react-icons/bs'

const Profile = () => {
  return (
    <div className='bg-white h-[93vh] p-4'>
      <h1 className='text-2xl font-bold'>Account Profile</h1>
      <div className='bg-[#281d14db] mt-10 p-6 rounded-2xl'>
        <div className='bg-black text-white p-5 rounded-lg'>
          <h3 className='text-sm font-semibold text-green-600 flex items-center'>YOUR REFERRAL LINK <BsArrowRight className='ml-1 text-red-600 text-xl'/></h3>
          <h4 className='text-sm'>i4h55h5uf8jdu</h4>
        </div>
        <div className='text-white mt-10 md:flex md:items-center md:flex-wrap'>
          <div className='md:w-[47%] mx-2'>
            <h2>Full Name</h2>
            <h5 className='text-black p-2 md:p-1 rounded-lg bg-white mt-2'>Emmanuel uzoezie</h5>
          </div>
          <div className='md:w-[47%] mx-2'>
            <h2>Email address</h2>
            <h5 className='text-black p-2 md:p-1 x rounded-lg bg-white mt-2'>Emma@gmail.com</h5>
          </div>
          <div className='md:w-[47%] mx-2'>
            <h2>Phone number</h2>
            <h5 className='text-black p-2 md:p-1 x rounded-lg bg-white mt-2'>08131958146</h5>
          </div>
          <div className='md:w-[47%] mx-2'>
            <h2>Country</h2>
            <h5 className='text-black p-2 md:p-1 x rounded-lg bg-white mt-2'>Nigeria</h5>
          </div>
          <div className='md:w-[47%] mx-2'>
            <h2>Currency</h2>
            <h5 className='text-black p-2 md:p-1 x rounded-lg bg-white mt-2'>$</h5>
          </div>
          <div className='md:w-[47%] mx-2'>
            <h2>Password</h2>
            <h5 className='text-black p-2 md:p-1 x rounded-lg bg-white mt-2'>rted...d455</h5>
          </div>
          <div className='md:w-[47%] mx-2'>
            <h2>Confirm Password</h2>
            <h5 className='text-black p-2 md:p-1 x rounded-lg bg-white mt-2'>rted...d455</h5>
          </div>
          <div className='md:w-[40%] mt-5 md:ml-3'>
            <button className='bg-orange-500 p-3 px-6 md:p-1 text-sm rounded-lg'>Update</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Profile