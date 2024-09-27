import React from 'react'
import Department1 from '../Components/DepartmentComponents/Department1'
import DepartmentPageImage from '../assets/images/logo_make_11_06_2023_377.jpg'

function DepartmentPage() {
  return (
   <>
     <section className='mt-0  sm:mt-[-40px]'>
     {/* <div className="relative flex justify-center"> */}
  {/* <div className="relative w-full h-screen">
    <img src={DepartmentPageImage} alt="" className='sm:w-screen sm:h-screen ' />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-98"></div>
  </div> */}
   <div className="w-full">
        <img src={DepartmentPageImage} alt="Medical team in an operating room" className="w-full h-[450px] object-cover" />

    </div>
  {/* <h2 className='absolute top-1/2 left-1/4 text-8xl text-white font-bold z-10'>Departments</h2> */}
{/* </div> */}

    </section>
    <div className='p-5  sm:p-16 bg-purple-50'>
        <Department1 />
    </div>
   
   </>
  )
}

export default DepartmentPage