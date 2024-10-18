import React from 'react'
import SurgeonImage from '../../assets/images/aboutbanner.jpg'
import SurgeonImage1 from '../../assets/images/aboutbanner.jpg'

import './About1.css'
// frontend/src/assets/images/

function About1() {
  return (
    <div className=" bg-footerColor flex flex-col items-center">
    <div className="w-full">
        <img src={SurgeonImage} alt="Medical team in an operating room" className="" />
    </div>
    
    <div className="bg-white w-full pt-5 pb-10 px-4 md:px-10 flex-col flex sm:flex-row justify-around items-center shadow-md">
    <div className="text-center transform  duration-1000 hover:shadow-lg my-5 p-2 sm:p-5 rounded-lg">
                <i className="fas fa-bed text-2xl md:text-6xl  text-secondaryColor"></i>
                <h4 className="text-xl md:text-3xl font-bold text-headingColor mt-2">200+</h4>
                <p className="text-lg md:text-sm text-gray-500">Bed Capacity</p>
              </div>
              {/* <div className="border-l-2 border-gray-300 h-24"></div> */}
              {/* <div className="text-center transform  duration-1000 hover:shadow-2xl p-5 rounded-lg">
                <i className="fas fa-user-md text-lg md:text-6xl text-secondaryColor"></i>
                <h4 className="text-sm md:text-3xl font-bold text-headingColor mt-2">8M+</h4>
                <p className="text-gray-500 text-xs md:text-sm">Cured Patients</p>
              </div> */}
              <div className="text-center transform  duration-1000 hover:shadow-2xl p-5 rounded-lg">
                <i className="fas fa-user-md text-2xl md:text-6xl text-secondaryColor"></i>
                <h4 className="text-xl md:text-3xl font-bold text-headingColor mt-2">8M+</h4>
                <p className="text-gray-500 text-lg md:text-sm">Cured Patients</p>
              </div>
              {/* <div className="border-l-2 border-gray-300 h-24"></div> */}
              <div className="text-center transform  duration-1000 hover:shadow-2xl p-5 rounded-lg">
                <i className="fas fa-heartbeat text-2xl md:text-6xl text-secondaryColor"></i>
                <h4 className="text-xl md:text-3xl font-bold text-headingColor mt-2">100+</h4>
                <p className=" text-lg md:text-sm text-gray-500">Medical Apparatus</p>
              </div>
              {/* <div className="border-l-2 border-gray-300 h-24"></div> */}
              <div className="text-center transform   duration-1000 hover:shadow-2xl p-5 rounded-lg">
                <i className="fas fa-clock text-2xl md:text-6xl text-secondaryColor"></i>
                <h4 className="text-sm md:text-3xl font-bold text-headingColor mt-2">24/7</h4>
                <p className="text-lg md:text-sm text-gray-500">Emergency & Trauma Care</p>
              </div>
                    </div>
</div>
  )
}

export default About1