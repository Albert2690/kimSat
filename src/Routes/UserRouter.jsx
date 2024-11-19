import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import DoctorsPage from '../Pages/DoctorsPage'
import DoctorDetialsPage from '../Pages/DoctorDetialsPage'
import AboutPage from '../Pages/AboutPage'
import DepartmentPage from '../Pages/DepartmentPage'
import DepartmentDetialPage from '../Pages/DepartmentDetailedPage'
import Facilities from '../Pages/Facilities'
import Contact from '../Pages/Contact'
import Career from '../Pages/Career'
import BookingPage from '../Pages/BookingPage'
import Blog from '../Pages/Blog'
import FacilitiesDetialed from '../Pages/FacilitiesDetialed'
import BlogDetial from '../Pages/BlogDetial'
import PatientHome from '../Pages/PatientHome'
import NotFound from '../Pages/NotFound'
import MrdDetailed from '../Pages/MrdDetailed'


function UserRouter() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/doctor-details/:id" element={<DoctorDetialsPage/>} />
    {/* <Route path="/doctor-detials" element={<DoctorDetialsPage/>} /> */}

   <Route  path="/doctors" element={<DoctorsPage/>}/>
   <Route path='/about' element={<AboutPage/>} />
   <Route path='/departments' element={<DepartmentPage/>} />
   <Route path='/department-detial/:name' element={<DepartmentDetialPage/>} />
   <Route path='/facility-detial/:name' element={<FacilitiesDetialed/>} />

   <Route path='/facilites' element={<Facilities/>} />
   <Route path='/contact-us' element={<Contact/>} />
   <Route path='/career' element={<Career/>} />
   <Route path='/booking/:id' element={<BookingPage/>} />
   <Route path='/career' element={<Career/>} />
   <Route path='/blog' element={<Blog/>} />
   <Route path='/blog-detial/:id' element={<BlogDetial/>}/>
   <Route path='/patient-profile' element={<PatientHome/>}/>
   <Route path='/patient-profile/detail/:id' element={<MrdDetailed/>} />
   <Route path='/404error' element={<NotFound/>}/>

   <Route path='/*' element={<NotFound/>}/>






 

   


  </Routes>
  )
}

export default UserRouter