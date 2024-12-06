import React from 'react'
import kimsatLogo from '../../assets/Kimsat Logo/KIMSAT FINAL LOGO-2.png'
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import arrowRight from '../../assets/Png Icons/Group 99.png'

//  
// 
//   
//  
//   
// 
//  
//  .


function UserFooter() {
  return (
//    <footer className='grid gird-cols-1 bg-gray-300 p-8 sm:grid-cols-3 gap-4'>
//     <div>
// Hello
//     </div>
//     <div>
//     Hello
//     </div>

//     <div>
//     Hello
//     </div>
//     <div>
//     Hello
//     </div>
//     <div>
//     Hello
//     </div>
//    </footer>
<footer id='footer' className="  bg-purple-50   p-5  sm:p-16">
<div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-6">
  {/* For Appointments Section */}
  <div className="flex-1 text-start">
    <p className="text-textColor text-lg font-bold lg:text-center">For Appointments</p>
    <div className="mt-2 text-sm lg:text-lg text-center text-headingColor font-bold">
      <p>0474-2982035 | 0474-2981985 | 0474-2651200</p>
      <p>0474-2651201 | 0474-2651202 | 0474-2651203</p>
      <p>0474-2651204 | 0474-2651205 |  0474-2651206</p>
      {/* <p>+91 7510992035 | +91 4742982035</p> */}
    </div>
  </div>

  {/* Emergency Section */}
  <div className="flex-1 text-start">
    <p className="text-textColor text-lg font-bold lg:text-center">Emergency</p>
    <div className="mt-2 text-sm lg:text-lg text-center text-headingColor font-bold">
      <p>+91 735 679 2035</p>
    </div>
  </div>

  {/* For Enquiries Section */}
  <div className="flex-1 text-start">
    <p className="text-textColor text-lg font-bold lg:text-center">For Enquiries</p>
    <div className="mt-2 text-sm lg:text-lg text-center text-headingColor font-bold">
      <p>kimsatcare@gmail.com</p>
    </div>
  </div>
</div>


<hr className="border-t-2 border-secondaryColor  mb-6" />
<div className="flex flex-col md:flex-row justify-between">
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <img src={kimsatLogo} alt="Kimsat Hospital Logo" className="mb-4 w-[100px] h-[40px]" />
        {/* <h1 className="text-2xl font-bold text-red-600">KIMSAT HOSPITAL</h1> */}
        <p className="mt-4 sm:max-w-[300px] text-textColor text-sm font-semibold leading-5 text-justify">
            The institution stands with a vision to offer advanced medical care to people in all walks of life at an affordable cost. KIMSAT will soon be among the best super specialty co-operative hospitals in Kerala.
        </p>
        <div className=" mt-6 flex flex-row gap-5">
            <p className="font-bold text-headingColor">Follow Us On</p>
            <div className="flex space-x-4">
      <a href="#" className="text-textColor hover:text-black">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="text-textColor hover:text-black">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className="text-textColor hover:text-black">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="text-textColor hover:text-black">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
        </div>
    </div>
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h2 className="text-xl text-headingColor font-bold mb-4">Quick Links</h2>
        <ul className="space-y-2">
            
        <Link to={'/about'}> <li className="text-textColor cursor-pointer font-semibold">About Kimsat</li></Link>
        <Link to={'/facilites'}>   <li className="text-textColor cursor-pointer font-semibold">Our Facilities</li></Link>
        <Link to={'/departments'}>  <li className="text-textColor cursor-pointer font-semibold">Our Departments</li></Link>
        <Link to={'/contact-us'}>  <li className="text-textColor cursor-pointer font-semibold">Support Services</li></Link>
        <Link to={'/career'}> <li className="text-textColor cursor-pointer font-semibold">Careers</li></Link>

       
        </ul>
    </div>
    <div className="w-full md:w-1/3">
        <h2 className="text-xl text-headingColor font-bold mb-4">kimsatcare Address</h2>
        <p className="text-textColor font-semibold ">
            Subsidiary of Kadakkal Service Co-Operative Bank,<br />
            Govindamangalam, Kadakkal,<br />
            Kollam, Kerala Pin:691536
        </p>
        <div className="mt-6">
            <h3 className="font-bold text-headingColor">Let’s Stay in Touch!</h3>
            <div className=" relative flex mt-2">
                <input type="email" placeholder="Enter email address" className="p-2 border border-textColor rounded-full focus:border-secondaryColor w-full" />
                <FontAwesomeIcon
                icon={faArrowRight}
                className="p-3 text-white absolute top-0 right-0 bg-secondaryColor cursor-pointer  rounded-full transform transition-transform duration-1000 group-hover:translate-x-2"
              />
            </div>
            <p className="text-textColor font-semibold  text-sm mt-5">We Never Spam You! 100% Privacy.</p>
        </div>
    </div>
</div>

<div className="mt-9 text-center text-textColor   items-start font-semibold  text-sm">


<div>
<p>© 2024 kimsatcare. All Rights Reserved | Crafted by Innodots Innovations Pvt Ltd</p>
    <p className="mt-2">
        <a href="#" className="text-textColor font-semibold ">Privacy Policy</a> | <a href="#" className="text-textColor font-semibold ">Terms of use</a>
    </p>
</div>
 
</div>
</footer>
  )
}

export default UserFooter