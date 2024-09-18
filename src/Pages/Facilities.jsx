import React from 'react'
import Facilities1 from '../Components/FacilitiesComponents/Facilities1'
import KimsatImage from '../assets/images/2024-02-19.jpg'

function Facilities() {
  return (
    <>
     <section className='mt-0 sm:mt-[-40px]'>
      <div className="flex justify-center">
        <img src={KimsatImage} alt="" className='sm:w-screen sm:h-screen ' />
      </div>
    </section>
    <div className='p-5  sm:p-16 bg-purple-50'>
        <Facilities1 />
    </div>
   
   </>
  )
}

export default Facilities