import React from 'react'
import AboutComponent from '../components/About'
import Navbar from '../components/Navbar'
import { useContextState } from '../context/context'

const About = () => {
    const { sidebar } = useContextState()

  return (
      <div className={`px-6 ${sidebar ? "bg-gray-400" : "bg-gray-100"}`}> 
          <Navbar /> 
          <AboutComponent />
    </div>
  )
}

export default About