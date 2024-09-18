import React from 'react'
import Department1 from '../Components/DepartmentComponents/Department1'
import DepartmentPageImage from '../assets/images/logo_make_11_06_2023_377.jpg'

function DepartmentPage() {
  return (
   <>
     <section className='mt-0  sm:mt-[-40px]'>
      <div className="flex justify-center">
        <img src={DepartmentPageImage} alt="" className='  sm:w-screen sm:h-screen ' />
      </div>
    </section>
    <div className='p-5  sm:p-16 bg-purple-50'>
        <Department1 />
    </div>
   
   </>
  )
}

export default DepartmentPage