import {createContext,useState} from 'react'
import UserRouter from '../Routes/UserRouter'
import UserHeader from '../Components/Header/UserHeader'
import UserFooter from '../Components/Footer/UserFooter'


export const  BookingContext = createContext()

function Layout() {
const [showBooking,setShowBooking] = useState(false)
const [showLogin,setShowLogin] = useState(false)
const [showOTP,setShowOTP] = useState(false)

  return (
   <>

   <BookingContext.Provider value={{setShowBooking,showBooking,showLogin,setShowLogin,showOTP,setShowOTP}} >

  
    <UserHeader />
    <main className='mt-[80px] sm:mt-[200px]' >
      <UserRouter />
    </main>
    <UserFooter />
    </BookingContext.Provider>
   </>

  
  )
}

export default Layout