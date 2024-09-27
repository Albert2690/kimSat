import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import apiInstance from '../Api';

function DoctorDetailsPage() {
  const [tab, setTab] = useState('Overview'); // State for active tab

 

  useEffect(() => {
    const handleDoctorApi = async () => {
      try {
        const id = 'e820a9df-2b01-416a-90f2-7ff5d3917196';
  
        const otpResponse = await apiInstance.get(`doctors/${id}/`, {
          withCredentials: true,
        });
  
        console.log(otpResponse, 'doctor details');
      } catch (err) {
        console.log(err);
      }
    };
  
    handleDoctorApi();
  }, []);
  

  return (
    <div className=" mx-auto  bg-white  shadow-sm">
      <div className="flex bg-[#F8F8F8] p-5  sm:p-16 gap-5 flex-col md:flex-row">
        <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" alt="Profile picture of Dr. Mohammed Hussain" className="w-36 h-36  object-cover mx-auto md:mx-0 md:mr-8" />
        <div className="text-center sm:flex sm:flex-row md:justify-start sm:gap-16 sm:items-end w-full    md:text-left  md:mt-0">
            <div>
            <h1 className="text-2xl text-headingColor font-bold">Dr. Mohammed Hussain</h1>
          <p className="mt-2 text-lg text-secondaryColor">MD, DNB (Radiation Oncology), FRCR (Clinical Oncology)</p>
          <p className="text-textColor text-sm">Clinical Assistant Professor</p>
          <p className="text-textColor text-sm">Speciality: Cancer Centre, Radiation Oncology</p>
            </div>
          
          <div className="mt-4 flex flex-col md:flex-row items-center md:items-start">
            <Link to={'/booking'}>
            <button className="hover:bg-secondaryColor bg-thirdColor text-white px-4 py-2 rounded-full flex space-x-2 items-center mb-2 md:mb-0 group transition-all duration-300 ease-in-out">
              <span>Book an Appointment</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="p-2 text-white  rounded-full transform transition-transform duration-1000 group-hover:translate-x-2"
              />
            </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 p-5  sm:p-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <ul className="space-y-4 text-center md:text-left">
              {/* Applying dynamic styles based on tab state */}
              <li
                className={`cursor-pointer p-4 ${tab === 'Overview' ? 'bg-[#F8F8F8] font-bold text-headingColor' : 'text-textColor'}`}
                onClick={() => setTab('Overview')}
              >
                Overview
              </li>
              <li
                className={`cursor-pointer p-4 ${tab === 'Qualification' ? 'bg-[#F8F8F8] font-bold text-headingColor' : 'text-textColor'}`}
                onClick={() => setTab('Qualification')}
              >
                Qualification
              </li>
              <li
                className={`cursor-pointer p-4 ${tab === 'Work Experience' ? 'bg-[#F8F8F8] font-bold text-headingColor' : 'text-textColor'}`}
                onClick={() => setTab('Work Experience')}
              >
                Work Experience
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div className="w-full md:w-3/4 mt-4 md:mt-0 md:pl-10">
            {tab === 'Overview' && (
              <motion.div 
              initial={{ opacity: 0, y: 100 }}
             whileInView={{opacity:1,y:0}}
             exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}>

          
                <h2 className="text-xl text-headingColor font-bold">Overview</h2>
                <p
                
                className="mt-4 para text-lg transition ">
                  Dr. Mohammed Hussain is currently working as Clinical Assistant Professor in the Department of Radiation Oncology at Kimsat Hospital. He completed his MBBS in 2011 from Bangalore Medical College and Research Institute and MD Radiation Oncology in 2016 from Tata Memorial Centre. He has co-authored publications in national and international journals.
                </p>
                </motion.div>
            )}

            {tab === 'Qualification' && (
             <motion.div 
             initial={{ opacity: 0, x:80 }}
            whileInView={{opacity:1,x:0}}
            exit={{ opacity: 0, y: -100 }}
             transition={{ duration: 1.1, ease: "easeInOut" }}>

                <h2 className="text-xl text-headingColor font-bold">Qualification</h2>
                <div class=" mx-auto mt-10 p-">
        
        <div class="space-y-4">
            <div class="flex items-start">
                <div class="border-l-2 border-secondaryColor h-6 mr-2"></div>
                <div>
                    <h2 class="text-lg font-medium text-headingColor">MBBS</h2>
                    <p class="para">Bangalore Medical College and Research Institute, Rajiv Gandhi University of Health Sciences, 2006-2011</p>
                </div>
            </div>
            <div class="flex items-start">
                <div class="border-l-2 border-secondaryColor h-6 mr-2"></div>
                <div>
                    <h2 class="text-lg font-medium text-headingColor">Rotatory Internship</h2>
                    <p class="para">Bangalore Medical College and Research Institute, Rajiv Gandhi University of Health Sciences, 2011 - 2012</p>
                </div>
            </div>
            <div class="flex items-start">
                <div class="border-l-2 border-secondaryColor h-6 mr-2"></div>
                <div>
                    <h2 class="text-lg font-medium text-headingColor">Doctor of Medicine (MD)</h2>
                    <p class="Para">Radiation Oncology from Tata Memorial Centre, 2016</p>
                </div>
            </div>
            <div class="flex items-start">
                <div class="border-l-2 border-secondaryColor h-6 mr-2"></div>
                <div>
                    <h2 class="text-lg font-medium text-headingColor">Diplomate of National Board (DNB)</h2>
                    <p class="para">Radiation Oncology, from National Board of Examinations, New Delhi, 2021</p>
                </div>
            </div>
            <div class="flex items-start">
                <div class="border-l-2 border-secondaryColor h-6 mr-2"></div>
                <div>
                    <h2 class="text-lg font-medium text-headingColor">Fellowship of the Royal College of Radiologists (FRCR)</h2>
                    <p class="para">London - Clinical Oncology, 2022</p>
                </div>
            </div>
        </div>
    </div>
              </motion.div>
            )}

            {tab === 'Work Experience' && (
           <motion.div 
           initial={{ opacity: 0, y: -100 }}
          whileInView={{opacity:1,y:0}}
          exit={{ opacity: 0, y: -100 }}
           transition={{ duration: 1.1, ease: "easeInOut" }}

             
             className="p-8 my-5 justify-center">
             <h1 className="text-xl  font-semibold mb-4">Work Experience</h1>
             <div class="mb-4 p-4 bg-thirdColor hover:bg-secondaryColor text-white max-w-[500px] border border-secondary rounded-lg">
        <span class="block text-lg font-bold text-secondary-foreground">2019 - Present</span>
        <span class="block text-md font-medium">Clinical Assistant Professor</span>
        <span class="block text-sm text-muted-foreground">Department of Radiation Oncology, Amrita Hospital, Kochi.</span>
      </div>
             {/* <div className="flex space-x-5 flex-col gap-5 justify-start items-start">
                 <div className="bg-thirdColor p-4 rounded-md shadow-md">
                     <span className="text-lg text-white font-semibold">2019 - Present</span>
                 </div>
                 <div className="ml-0 sm:ml-4">
                     <h2 className="text-lg font-semibold">Clinical Assistant Professor</h2>
                     <p className="para">Department of Radiation Oncology, Amrita Hospital, Kochi.</p>
                 </div>
             </div> */}
             <div className="flex space-x-5 flex-col gap-5 justify-start items-start">
                 <div className="bg-thirdColor p-4 rounded-md shadow-md">
                     <span className="text-lg text-white font-semibold">2019 - Present</span>
                 </div>
                 <div className="ml-0 sm:ml-4">
                     <h2 className="text-lg font-semibold">Clinical Assistant Professor</h2>
                     <p className="para">Department of Radiation Oncology, Amrita Hospital, Kochi.</p>
                 </div>
             </div>
         </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetailsPage;
