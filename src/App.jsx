import { useState,createContext } from 'react'
import Layout from './Layouts/Layout'
import { BrowserRouter } from 'react-router-dom'
import './App.css'



function App() {

  return (

    <BrowserRouter>
    <Layout/>
    
    </BrowserRouter>  
    
  )
}

export default App
