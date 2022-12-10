import React from 'react'
import { useContextState } from '../../context/context'

const Dashboard = () => {
    const { userSidebar, setUserSidebar, screenSize, setScreenSize } = useContextState()

  return (
      <div className='' onClick={() => setUserSidebar(prev => !prev)}>Dashboard
      
      
      </div>
  )
}

export default Dashboard