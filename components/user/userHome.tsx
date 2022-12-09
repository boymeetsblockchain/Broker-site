import React, { useEffect } from 'react'
import { useContextState } from '../../context/context'
import Dashboard from './dashboard'
import NavBar from './navBar'
import UserSidebar from './userSidebar'

const UserHome = () => {
    const { userSidebar, setUserSidebar, screenSize, setScreenSize } = useContextState()

    console.log(userSidebar)

    useEffect(() => {
        const handleScreenSide = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleScreenSide)
        handleScreenSide();

        return () => window.removeEventListener('resize', handleScreenSide)
    }, [])

    useEffect(() => {
        if (screenSize === undefined || screenSize <= 900) {
            setUserSidebar(false)
        } else {
            setUserSidebar(true)
        }
    }, [screenSize])
  return (
    <div className={`md:flex relative`}>
          {userSidebar ? <div className='w-[300px] bg-gray-400 dark:bg-slate-700 fixed md:relative z-20 h-screen'>
            <UserSidebar />
          </div> : <div className='w-0'></div>}
          <div className={`flex-1 ${userSidebar ? "bg-red-600 md:bg-inherit" : ""} w-inherit`}>
            <NavBar />
            <Dashboard />
          </div>
    </div>
  )
}

export default UserHome