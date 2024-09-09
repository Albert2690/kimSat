import React from 'react'
import kimsatLogo from '../../assets/Kimsat Logo/KIMSAT FINAL LOGO-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import arrowRight from '../../assets/Png Icons/Group 99.png'


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
<footer id='footer' className="  bg-[#F4F4F4] mt-10  px-12 py-12">
<div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center mb-6">
    <div className="mb-4 md:mb-0">
        <p className="text-textColor text-sm sm:text-lg font-bold">For Appointments</p>
        <p className="text-sm sm:text-lg font-bold">+91 7510992035 | +91 4742982035</p>
    </div>
    <div className="mb-4 md:mb-0">
        <p className="text-textColor font-bold text-sm sm:text-lg">Emergency</p>
        <p className="text-sm sm:text-lg font-bold">+91 4742982035</p>
    </div>
    <div>
        <p className="text-textColor text-sm sm:text-lg  font-bold">Patient Enquiries</p>
        <p className="text-xl font-bold">kimsatcare@gmail.com</p>
    </div>
</div>
<hr className="border-t-2 border-redColor  mb-6" />
<div className="flex flex-col md:flex-row justify-between">
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <img src={kimsatLogo} alt="Kimsat Hospital Logo" className="mb-4 w-[100px] h-[40px]" />
        {/* <h1 className="text-2xl font-bold text-red-600">KIMSAT HOSPITAL</h1> */}
        <p className="mt-4 sm:max-w-[300px] text-textColor text-sm font-semibold leading-5 text-justify">
            The institution stands with a vision to offer advanced medical care to people in all walks of life at an affordable cost. KIMSAT will soon be among the best multi-specialty co-operative hospitals in Kerala.
        </p>
        <div className=" mt-6 flex flex-row gap-5">
            <p className="font-bold">Follow Us On</p>
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
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <ul className="space-y-2">
            <li><a href="#" className="text-textColor font-semibold">About Kimsat</a></li>
            <li><a href="#" className="text-textColor font-semibold">Specialities</a></li>
            <li><a href="#" className="text-textColor font-semibold">Our Departments</a></li>
            <li><a href="#" className="text-textColor font-semibold">Support Services</a></li>
            <li><a href="#" className="text-textColor font-semibold">Careers</a></li>
        </ul>
    </div>
    <div className="w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-4">kimsatcare Address</h2>
        <p className="text-textColor font-semibold ">
            Subsidiary of Kadakkal Service Co-Operative Bank,<br />
            Govindamangalam, Kadakkal,<br />
            Kollam, Kerala Pin:691536
        </p>
        <div className="mt-6">
            <h3 className="font-bold">Let’s Stay in Touch!</h3>
            <div className=" relative flex mt-2">
                <input type="email" placeholder="Enter email address" className="p-2 border border-textColor rounded-full focus:border-redColor w-full" />
               <img onClick={()=>console.log("hello email senting")} src={arrowRight} alt=""  className='w-9 h-9 absolute top-1 right-1'/>
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