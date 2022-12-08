import React from 'react'
import { MdHome } from 'react-icons/md'
import { useContextState } from '../../context/context'

const UserSidebar = () => {
  const { activeSidebarLink, setActiveSidebarLink } = useContextState()
  return (
    <div>
      <div className={`flex items-center p-4 text-xl space-x-4 ${activeSidebarLink === "Dashboard"? "border-l-8 border-gray-800 dark:border-white": ""}`}>
        <MdHome className="text-2xl"/>
        <h2>Dashboard</h2>
      </div>
      <div className={`flex items-center p-4 text-xl space-x-4`}>
        <MdHome className="text-2xl"/>
        <h2>Dashboard</h2>
      </div>
      <div className={`flex items-center p-4 text-xl space-x-4`}>
        <MdHome className="text-2xl"/>
        <h2>Dashboard</h2>
      </div>
      <div className={`flex items-center p-4 text-xl space-x-4`}>
        <MdHome className="text-2xl"/>
        <h2>Dashboard</h2>
      </div>
      <div className={`flex items-center p-4 text-xl space-x-4`}>
        <MdHome className="text-2xl"/>
        <h2>Dashboard</h2>
      </div>
      <div className={`flex items-center p-4 text-xl space-x-4`}>
        <MdHome className="text-2xl"/>
        <h2>Dashboard</h2>
      </div>
      <div className={`flex items-center p-4 text-xl space-x-4`}>
        <MdHome className="text-2xl"/>
        <h2>Dashboard</h2>
      </div>
      <div>Log Out</div>
    </div>
  )
}

export default UserSidebar