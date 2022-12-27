import React from 'react'
import { MdHome, MdPersonPin, MdAddchart } from 'react-icons/md'
import { AiFillClockCircle } from "react-icons/ai"
import { GrMail } from "react-icons/gr"
import { useContextState } from '../../context/context'
import { FaCreditCard, FaCashRegister } from 'react-icons/fa'
import Whatsapp from '../whatsapp'

const UserSidebar = () => {
  const { activeSidebarLink, setActiveSidebarLink, userSidebar, setUserSidebar, } = useContextState()

  const handleSidebar = (clickedItem:string) => {
    setActiveSidebarLink(clickedItem)
    setUserSidebar(false)
  }

  return (
    <div className='bg-slate-400 dark:bg-slate-700 dark:text-white relative'>
      <div className={`flex items-center cursor-pointer p-4 text-xl space-x-4 ${activeSidebarLink === "Dashboard" ? "border-l-8 border-gray-500 bg-gray-300 dark:bg-gray-700 dark:border-white" : ""}`} onClick={() => handleSidebar("Dashboard")}>
        <MdHome className="text-2xl"/>
        <h2 className="text-lg">Dashboard</h2>
      </div>
      <div className={`flex items-center cursor-pointer p-4 text-xl space-x-4 ${activeSidebarLink === "Profile" ? "border-l-8 border-gray-500 bg-gray-300 dark:bg-gray-700 dark:border-white" : ""}`} onClick={() => handleSidebar("Profile")}>
        <MdPersonPin className="text-2xl"/>
        <h2 className="text-lg">Account Profile</h2>
      </div>
      <div className={`flex items-center cursor-pointer p-4 text-xl space-x-4 ${activeSidebarLink === "Deposit" ? "border-l-8 border-gray-500 bg-gray-300 dark:bg-gray-700 dark:border-white" : ""}`} onClick={() => handleSidebar("Deposit")}>
        <FaCreditCard className="text-2xl"/>
        <h2 className="text-lg">Make Deposits</h2>
      </div>
      <div className={`flex items-center cursor-pointer p-4 text-xl space-x-4 ${activeSidebarLink === "Trade" ? "border-l-8 border-gray-500 bg-gray-300 dark:bg-gray-700 dark:border-white" : ""}`} onClick={() => handleSidebar("Trade")} >
        <AiFillClockCircle className="text-2xl"/>
        <h2 className="text-lg">Trade History</h2>
      </div>
      <div className={`flex items-center cursor-pointer p-4 text-xl space-x-4 ${activeSidebarLink === "invest" ? "border-l-8 border-gray-500 bg-gray-300 dark:bg-gray-700 dark:border-white" : ""}`} onClick={() => handleSidebar("invest")}>
        <MdAddchart className="text-2xl"/>
        <h2 className="text-lg">Investment Plans</h2>
      </div>
      <div className={`flex items-center cursor-pointer p-4 text-xl space-x-4 ${activeSidebarLink === "withdrawal" ? "border-l-8 border-gray-500 bg-gray-300 dark:bg-gray-700 dark:border-white" : ""}`} onClick={() => handleSidebar("withdrawal")}>
        <FaCashRegister className="text-2xl"/>
        <h2 className="text-lg">Withdrawals</h2>
      </div>
      <div className={`flex items-center cursor-pointer p-4 text-xl space-x-4 ${activeSidebarLink === "support" ? "border-l-8 border-gray-500 bg-gray-300 dark:bg-gray-700 dark:border-white" : ""}`} onClick={() => handleSidebar("support")}>
        <GrMail className="text-2xl"/>
        <h2 className="text-lg">Our Support</h2>
      </div>
      <div className={`bg-blue-600 dark:bg-gray-800 p-4 pl-8 cursor-pointer `} onClick={() => handleSidebar("logout")}>Log Out</div>

      <div className='hidden lg:block'><Whatsapp /></div>
    </div>
  )
}

export default UserSidebar