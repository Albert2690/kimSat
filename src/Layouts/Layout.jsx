import {createContext,useState} from 'react'
import UserRouter from '../Routes/UserRouter'
import UserHeader from '../Components/Header/UserHeader'
import UserFooter from '../Components/Footer/UserFooter'
import Loader from '../Components/Loader/Loader'
import ScrollComponents from '../Components/Scroll/ScrollComponents'
import ChatRedirect from '../Components/WhatsappChat/ChatRedirect'
import Login from '../Components/Login'
import OtpVerification from '../Components/OtpVerification'
import BookingOtp from '../Components/BookingOtp'
import BookingButton from '../Components/Scroll/BookingButton'
import PhoneComponent from '../Components/Scroll/PhoneComponent'
import SideComponent from '../Components/Scroll/SideContact'
// import Loader from '../Components/Loader/Loader'

export const  BookingContext = createContext()

function Layout() {
const [showBooking,setShowBooking] = useState(false)
const [showLogin,setShowLogin] = useState(false)
const [showOTP,setShowOTP] = useState(false)
const [showBookingOTP,setShowBookingOTP] = useState(false)



  return (
   <>

   <BookingContext.Provider value={{setShowBooking,showBooking,showBookingOTP,setShowBookingOTP,showLogin,setShowLogin,showOTP,setShowOTP}} >

  
    <UserHeader />
    <main className=' relative mt-[80px] sm:mt-[160px]' >
      <UserRouter /> 
      <Login/>
      {/* <ScrollComponents/> */}
      <BookingButton/>
      <ChatRedirect/>
      <BookingOtp/>
      <OtpVerification />
      {/* <PhoneComponent/> */}
<SideComponent/>
      {/* <Loader/> */}

    </main>
    <UserFooter />
    </BookingContext.Provider>
   </>

  
  )
}

export default Layout