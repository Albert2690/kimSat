import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import DoctorsPage from '../Pages/DoctorsPage'
import DoctorDetialsPage from '../Pages/DoctorDetialsPage'
import AboutPage from '../Pages/AboutPage'
import DepartmentPage from '../Pages/DepartmentPage'
import DepartmentDetialPage from '../Pages/DepartmentDetialPage'
import Facilities from '../Pages/Facilities'


function UserRouter() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/doctor-detials" element={<DoctorDetialsPage/>} />
   <Route  path="/doctors" element={<DoctorsPage/>}/>
   <Route path='/about' element={<AboutPage/>} />
   <Route path='/departments' element={<DepartmentPage/>} />
   <Route path='/department-detial/:no' element={<DepartmentDetialPage/>} />
   <Route path='/facilites' element={<Facilities/>} />
 

   


  </Routes>
  )
}

export default UserRouter