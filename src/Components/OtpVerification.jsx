import React, { useState, useContext, useEffect } from 'react';
import kimsatLogo from '../assets/Kimsat Logo/KIMSAT FINAL LOGO-2.png';
import { motion } from 'framer-motion';
import OtpComponent from './OtpComponent';
import apiInstance from '../Api';
import { BookingContext } from '../Layouts/Layout';
import './Login.css';

function OtpVerification() {
  const [otp, setOtp] = useState(Array(4).fill("")); 
  const { showOTP, setShowOTP } = useContext(BookingContext);

  

  useEffect(() => {
    if (showOTP) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }

  }, [showOTP]);

      
  return (

      showOTP && (
        

            <motion.div
           
            
            className="modal-overlay flex flex-row justify-center s:flex-row sm:justify-end ">
                 <div className="modal-content  ">
                   < motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{opacity:1,y:0}}
                    exit={{ opacity: 0, y: 100 }}
                     transition={{ duration: 1.1, ease: "easeInOut" }}
                   className="w-full flex-col space-y-8 max-w-md p-9 shadow-lg bg-white rounded-lg text-center">
                 <div onClick={()=>setShowOTP(false)} className="flex  justify-end">
                     <i className="fas fa-times text-gray-500 cursor-pointer"></i>
                 </div>
                 <img src={kimsatLogo} alt="Kimsat Hospital Logo" className="mx-auto w-[100px] h-[40px] mb-4" />
                 {/* <h1 className="text-2xl font-bold text-redColor">KIMSAT HOSPITAL</h1> */}
                 <h2 className="text-xl font-medium text-secondaryColor mt-6">Enter OTP</h2>
                 <p className="text-textColor mt-2">We have sent you an <span className="font-bold">One Time Password</span> on this mobile number</p>
                 <div className="mt-6 flex items-center justify-center">
                     
                         {/* <span className="text-textColor">+91</span>
                         <input type="number" placeholder="Enter your mobile number here" className=" ml-2 w-full outline-none" /> */}
                         <OtpComponent otp={otp} setOtp={setOtp}/>
                     
                 </div>
                 <p className="text-xs text-redColor mt-4">Powered by Kimsat Hospital</p>
             </motion.div>
                 </div>
               </motion.div>
     
             )


       
    
  
  
)
}

export default OtpVerification