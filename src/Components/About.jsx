import React from 'react';
import DoctorImage from '../assets/images/asd 3.png';
import { motion } from 'framer-motion';


function About() {
  return (
    <div className="container bg-white p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
      <motion.div 
  initial={{ opacity: 0, y: 100 }}
 whileInView={{opacity:1,y:0}}
 exit={{ opacity: 0, y: -100 }}
  transition={{ duration: 1.1, ease: "easeInOut" }}
  className="w-full md:w-1/3 text-center md:text-left"
>
          <h1 className="text-3xl md:text-5xl font-bold text-headingColor">About Us</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-secondaryColor mt-4">The Best</h2>
          <h3 className="text-xl md:text-2xl font-medium text-textColor mt-2">
            Multi Speciality Hospital In Kadakkal
          </h3>
          <p className="para mt-4">
            The institution stands with a vision to offer advanced medical care to people in all walks of life at an affordable cost. KIMSAT will soon be among the best multi-specialty co-operative hospitals in Kerala. The hospital will offer the best in patient care supported by technologically advanced healthcare facilities.
          </p>
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, y: -100 }}
         whileInView={{opacity:1,y:0}}
         exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        className="relative w-full my-9 md:w-2/3 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative flex justify-center items-center">
            <img
              src={DoctorImage}
              alt="Doctor with stethoscope"
              className="relative w-[300px] h-[320px] z-20 sm:w-[400px] sm:h-[420px] md:w-[530px] md:h-[556px]"
            />
            {/* Card 1 */}
            <div className="absolute top-[25%] left-[-12%] z-[0] opacity-90 transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 duration-1000 hover:shadow-2xl bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
              <i className="fas fa-search text-secondaryColor"></i>
              <div>
                <p className="text-headingColor font-bold">Well Qualified doctors</p>
                <p className="text-textColor text-xs mt-1 font-semibold">Treat with care</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="absolute top-[20%] right-[-40%] opacity-90 z-[39] transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 duration-1000 hover:shadow-2xl bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
              <i className="fas fa-calendar-alt text-secondaryColor"></i>
              <div>
                <p className="text-headingColor font-bold">Book an appointment</p>
                <p className="text-textColor text-xs mt-1 font-semibold">Online appointment</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="absolute bottom-[10%] left-[10%] z-[42] opacity-90 transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 duration-1000 hover:shadow-2xl bg-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-2">
              <i className="fas fa-phone-alt text-secondaryColor"></i>
              <div>
                <p className="text-headingColor font-bold">Contact no</p>
                <p className="text-textColor text-xs mt-1 font-semibold">+91 4742982035</p>
              </div>
            </div>
            
          </div>
         
        </motion.div>
      
      </div>
      {/* <div className="flex justify-center mt-12">
            <div className="flex items-center justify-between   space-x-3 md:space-x-16">
              <div className="text-center transform hover:scale-125 duration-1000 hover:shadow-2xl p-5 rounded-lg">
                <i className="fas fa-bed text-xl md:text-6xl  text-secondaryColor"></i>
                <h4 className="text-lg md:text-3xl font-bold text-gray-900 mt-2">200+</h4>
                <p className="text-xs md:text-sm text-gray-500">Bed Capacity</p>
              </div>
              <div className="border-l-2 border-gray-300 h-24"></div>
              <div className="text-center transform hover:scale-125 duration-1000 hover:shadow-2xl p-5 rounded-lg">
                <i className="fas fa-user-md text-xl md:text-6xl text-secondaryColor"></i>
                <h4 className="text-lg md:text-3xl font-bold text-gray-900 mt-2">8M+</h4>
                <p className="text-gray-500 text-xs md:text-sm">Cured Patients</p>
              </div>
              <div className="border-l-2 border-gray-300 h-24"></div>
              <div className="text-center transform hover:scale-125 duration-1000 hover:shadow-2xl p-5 rounded-lg">
                <i className="fas fa-heartbeat text-xl md:text-6xl text-secondaryColor"></i>
                <h4 className="text-lg md:text-3xl font-bold text-gray-900 mt-2">100+</h4>
                <p className=" text-xs md:text-sm text-gray-500">Medical Apparatus</p>
              </div>
              <div className="border-l-2 border-gray-300 h-24"></div>
              <div className="text-center transform hover:scale-125  duration-1000 hover:shadow-2xl p-5 rounded-lg">
                <i className="fas fa-clock text-xl md:text-6xl text-secondaryColor"></i>
                <h4 className="text-lg md:text-3xl font-bold text-gray-900 mt-2">24/7</h4>
                <p className="text-xs md:text-sm text-gray-500">Emergency & Trauma Care</p>
              </div>
            </div>
          </div> */}
    </div>
  );
}

export default About;
