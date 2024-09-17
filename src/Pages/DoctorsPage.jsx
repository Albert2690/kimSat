import React from 'react'
import DoctorsList from '../Components/DoctorComponents/DoctorsList'
import DoctorPageImage from  '../../src/assets/images/doctor-nurses-special-equipment.jpg'
// "C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\Rectangle 1.jpg"
import Login from '../Components/Login'

function DoctorsPage() {
  return (
    <>
      <section className='mt-0 sm:mt-[-40px]'>
      <div className="flex justify-center">
        <img src={DoctorPageImage} alt="" className='sm:w-screen sm:h-screen ' />
      </div>
    </section>
    <DoctorsList/>
    <Login/>
    
    </>
  )
}

export default DoctorsPage