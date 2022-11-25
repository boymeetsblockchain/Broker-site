import Image from 'next/image'
import React from 'react'
import persontwo from "../public/images/persontwo.png"
import testone from "../public/images/testone.png"

const Testimonial = () => {
  return (
    <div className='py-4'>
        <div className='relative'>
            <div className='bg-gray-200 flex justify-center py-4'>
                  <Image src={testone} alt width={450} height={200}/>
            </div> 
        </div>
    </div>
  )
}

export default Testimonial