import {createContext,useState} from 'react'
import UserRouter from '../Routes/UserRouter'
import UserHeader from '../Components/Header/UserHeader'
import UserFooter from '../Components/Footer/UserFooter'
import Loader from '../Components/Loader/Loader'
import ScrollComponents from '../Components/Scroll/ScrollComponents'
import ChatRedirect from '../Components/WhatsappChat/ChatRedirect'


export const  BookingContext = createContext()

function Layout() {
const [showBooking,setShowBooking] = useState(false)
const [showLogin,setShowLogin] = useState(false)
const [showOTP,setShowOTP] = useState(false)


  return (
   <>

   <BookingContext.Provider value={{setShowBooking,showBooking,showLogin,setShowLogin,showOTP,setShowOTP}} >

  
    <UserHeader />
    <main className=' relative mt-[80px] sm:mt-[160px]' >
      <UserRouter /> 
      <ScrollComponents/>
      <ChatRedirect/>

    </main>
    <UserFooter />
    </BookingContext.Provider>
   </>

  
  )
}

export default Layout