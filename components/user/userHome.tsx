import React, { useEffect } from 'react'
import { useContextState } from '../../context/context'
import Dashboard from './dashboard'
import Deposit from './Deposit'
import Invest from './Invest'
import Logout from './Logout'
import NavBar from './navBar'
import Profile from './Profile'
import Support from './Support'
import Trade from './Trade'
import UserSidebar from './userSidebar'
import Withdrawal from './Withdrawal'

const UserHome = () => {
  const { userSidebar, activeSidebarLink, setUserSidebar, screenSize, setScreenSize } = useContextState()


  // const { activeSidebarLink, setActiveSidebarLink } = useContextState()

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
        {activeSidebarLink === "Dashboard" ? <Dashboard /> : ""}
        {activeSidebarLink === "Profile" ? <Profile /> : ""}
        {activeSidebarLink === "Deposit" ? <Deposit /> : ""}
        {activeSidebarLink === "Trade" ? <Trade /> : ""}
        {activeSidebarLink === "invest" ? <Invest /> : ""}
        {activeSidebarLink === "withdrawal" ? <Withdrawal /> : ""}
        {activeSidebarLink === "support" ? <Support /> : ""}
        {activeSidebarLink === "logout" ? <Logout /> : ""}
        
        
        
        
        
        
        
        
            
          </div>
    </div>
  )
}

export default UserHome