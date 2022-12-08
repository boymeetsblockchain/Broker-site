import React, { useEffect } from 'react'
import UserHome from '../components/user/userHome'
import { useContextState } from '../context/context'

const UserDashboard = () => {
    

  return (
    <div className='h-screen bg-slate-600'>
       <UserHome />
    </div>
  )
}

export default UserDashboard