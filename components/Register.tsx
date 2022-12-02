import { Link } from '@mui/material'
import { useRouter } from 'next/router'
import { FaHome } from 'react-icons/fa'

const Register = () => {
    const router = useRouter()

  return (
    <div>
          <div className='bg-custom-name h-[100%] md:h-[100vh] md:flex justify-center items-center py-32 px-6'>
              <div className="md:flex">
                  <div className="bg-black p-4 md:px-10 flex flex-col">
                      <h2 className="text-blue-600 my-10 text-center text-2xl font-extrabold md:py-20">Broker Site</h2>
                      {/* <div className="w-full"> */}
                      <button className="bg-white my-4 flex items-center justify-center space-x-4 md:space-x-1 py-2 px-8 font-semibold md:rounded-xl" onClick={() => router.push("/")}><FaHome />
                          <h2>Back to Home page</h2>
                      </button>
                      <Link href="/sign-in">
                          <button className="bg-white my-4 py-2 px-8 font-semibold md:rounded-xl">Login</button>
                      </Link>
                  </div>
                  <div className="bg-white mx-3 md:flex-1 md:min-w-[400px] md:mx-0 py-10">
                      <div className="text-center space-y-2 md:px-10">
                          <h1 className="text-center text-2xl font-bold">Sign up for free</h1>
                      </div>
                      <form className="mt-10 px-6 space-y-6">
                          <div>
                              <input type="text" placeholder="Email address" className="p-2 border-b-2 border-gray-300 w-full outline-none focus:border-b-blue-500" />
                          </div>
                          <div>
                              <input type="Password" placeholder="Password" className="p-2 border-b-2 border-gray-300 w-full outline-none focus:border-b-blue-500" />
                          </div>
                          <div className="flex justify-between">
                              <button className="flex items-center space-x-2">
                                  <input type="checkbox" />
                                  <p>Remember me</p>
                              </button>
                              <Link href='forgotPassword'>
                                  <button className="text-[rgb(84,5,5)]">Forget Password?</button>
                              </Link>
                          </div>
                          <button className="bg-[#04042b] text-white p-2 px-10 font-semibold rounded-md w-full ">Login Now</button>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Register