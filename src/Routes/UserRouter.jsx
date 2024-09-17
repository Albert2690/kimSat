import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import DoctorsPage from '../Pages/DoctorsPage'
import DoctorDetialsPage from '../Pages/DoctorDetialsPage'
import AboutPage from '../Pages/AboutPage'
function UserRouter() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/doctor-detials" element={<DoctorDetialsPage/>} />
   <Route  path="doctors" element={<DoctorsPage/>}/>
   <Route path='about' element={<AboutPage/>} />

  </Routes>
  )
}

export default UserRouter