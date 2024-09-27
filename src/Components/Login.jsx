import React from 'react'
import { createContext, useState, useContext, useEffect } from 'react';
import kimsatLogo from '../assets/Kimsat Logo/KIMSAT FINAL LOGO-2.png'
import { motion } from 'framer-motion';
import apiInstance from '../Api';
import { toast } from 'react-toastify';


import { BookingContext } from '../Layouts/Layout';
import './Login.css'

function Login() {

    const {showLogin,setShowLogin,showOTP,setShowOTP} = useContext(BookingContext)
    const [mobile,setMobile] = useState('')
    const [error,setError] = useState('')
    console.log(mobile,'mobile consoling from login')

    useEffect(() => {
        if (showLogin) {
          document.body.classList.add('modal-active');
        } else {
          document.body.classList.remove('modal-active');
        }
      }, [showLogin]);

      const handleSubmit = async(e) => {
        e.preventDefault()

        console.log('otp subbmission')
        // toast.success('mobile updated')
        if(mobile.length!==10){
          setError('Enter a valid mobile number')
          return
        }
        setError('')
        const response = await apiInstance.post("/patient/login", {
         phone_number:mobile
        }, {
          withCredentials: true 
        });
        localStorage.setItem('mobile',mobile)
        if(response.data){
          console.log(response.data,'response from backend')
          console.log(response.data.mesage,'message')

        }

       

        console.log(response,'mobile while submiting')
        setShowLogin(false)
        console.log('clicked')
        setShowOTP(true)
       
      }
  return (

      showLogin && (
        
           
        
            <motion.div
           
            
            className="modal-overlay ">
                 <div className="modal-content ">
                   < motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity:1,y:0}}
                    exit={{ opacity: 0, y: 100 }}
                     transition={{ duration: 1.1, ease: "easeInOut" }}
                   className="w-full flex-col space-y-8 max-w-md p-9 shadow-lg bg-white rounded-lg text-center">
                 <div onClick={()=>setShowLogin(false)} className="flex  justify-end">
                     <i className="fas fa-times text-gray-500 cursor-pointer"></i>
                 </div>
                 <img src={kimsatLogo} alt="Kimsat Hospital Logo" className="mx-auto w-[100px] h-[40px] mb-4" />
                 {/* <h1 className="text-2xl font-bold text-redColor">KIMSAT HOSPITAL</h1> */}
                 <h2 className="text-xl font-medium text-secondaryColor mt-6">Enter Your Mobile Number</h2>
                 <p className="text-textColor mt-2">We will sent you an <span className="font-bold">One Time Password</span> on this mobile number</p>
                 <div className="mt-6">
                     <div className="flex items-center  ">
                         
                         <form  onSubmit={handleSubmit}>
                          <div className='flex flex-row justify-center'>
                          <span className="text-textColor text-xl mt-3">+91</span>  
                          <input type="number" onChange={(e)=>setMobile(e.target.value)} placeholder ="Enter your mobile " className="border rounded-lg  p-2 border-textColor ml-2 min-w-[300px] text-sm sm:text-lg outline-none" />
                          </div>
                       
                         <button type='submit' className="mt-6  bg-secondaryColor text-white py-2 px-3 w-[200px] rounded-lg">Get OTP</button>
                         </form>
                     </div>
                     
                 </div>
              
                 <p className="text-xs text-redColor mt-4">Powered by Kimsat Hospital</p>
             </motion.div>
                 </div>
               </motion.div>
     
             )


       
    
  
  
)
}

export default Login