import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import DoctorsPage from '../Pages/DoctorsPage'
import DoctorDetialsPage from '../Pages/DoctorDetialsPage'
function UserRouter() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/doctors" element={<DoctorDetialsPage/>} />

  </Routes>
  )
}

export default UserRouter