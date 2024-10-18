import React from 'react'
import HospitalImage from '../assets/images/2023-05-17.jpg'
import { motion } from 'framer-motion'


function OurVisionPage() {
  return (
    <div className=" grid justify-center bg-footerColor  items-center p-5  sm:p-16 max-h-screen">
                    <div className=" p-8 rounded-lg shadow-sm flex flex-col md:flex-row">
                        <motion.div
                        
                       
                        className="w-full  mb-6 md:mb-0">
                            <motion.img 
                            //  initial={{ opacity: 0, x: -100 }}
                            //  whileInView={{opacity:1,x:0}}
                            //  exit={{ opacity: 0, x: 100 }}
                            //   transition={{ duration: 1.1, ease: "easeInOut" }}
                            src={HospitalImage} alt="KIMSAT Hospital building with people walking towards the entrance" className="rounded-lg w-[300px] h-[220px] z-20 sm:w-[400px] sm:h-[420px] md:w-[720px] md:h-[400px] shadow-lg"/>
                        </motion.div>
                        
                        <motion.div 
                        
                        // initial={{ opacity: 0, x: 100 }}
                        // whileInView={{opacity:1,x:0}}
                        // exit={{ opacity: 0, x: -100 }}
                        //  transition={{ duration: 1.1, ease: "easeInOut" }}
                        className="w-full  sm:mt-20 text-center md:w-1/2 md:pl-8">
                            <h1 className="text-4xl font-bold text-headingColor mb-4">Our Vision</h1>
                            <h2 className="text-xl text-secondaryColor mb-4">Advanced & Affordable Medical Care</h2>
                            <p className="text-textColor leading-16 text-start text-xs sm:text-sm  mb-4">
                                The institution stands with a vision to offer advanced medical care to people in all walks of life at an affordable cost. KIMSAT will soon be among the best multi-specialty co-operative hospitals in Kerala.
                            </p>
                        
                        </motion.div>
                       
                    </div>
                </div>
  )
}

export default OurVisionPage