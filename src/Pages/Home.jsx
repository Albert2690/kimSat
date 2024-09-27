import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import kimsatImage from '../assets/images/Untitled-1-01.png';
import './Home.css';
import BookingContainer from '../Components/BookingContainer';
import About from '../Components/About';
import BookingMalayalamContainer from '../Components/BookingMalayalamContainer';
import Specialities from '../Components/Specialities';
import OurVisionPage from '../Components/OurVisionPage';
import Blog from '../Components/Blog';
import { motion } from 'framer-motion';
import Login from '../Components/Login';
import OtpVerification from '../Components/OtpVerification';
import Stories from '../Components/Stories'; 
import apiInstance from '../Api';
import Cookies from 'universal-cookie';


function Home() {
  
    const [tab,setTab] = useState('malayalam')
    const [token, setToken] = useState(null); // Initialize state for token
  const cookies = new Cookies();

  useEffect(() => {
    const fetchedToken = cookies.get('access_token');
    console.log(fetchedToken, 'fetctokenn'); // This logs the fetched token from cookies
    setToken(fetchedToken); 
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    console.log(token, 'token'); // This will log the token after it's been updated
  }, [token]); // This runs every time the token changes

   
  return (
    <>
    <section className="text-center flex md:flex-row-reverse gap-5 justify-around items-center flex-col    bg-white">
      < motion.div 
      
    //   initial={{ opacity: 0, y: -100 }}
    //   whileInView={{opacity:1,y:0,transition: { type: 'spring', stiffness: 120, damping: 5 }}}
      
    //   exit={{ opacity: 0, y: 100 }}
    //    transition={{ duration: .5, ease: "easeInOut" }}
      className=''>
      
        <img src={kimsatImage} alt="KIMSAT Hospital Building" className="mx-auto scale-animation  w-[90%] sm:w-[950px] mb-8"/>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80 "></div>  */}
        </motion.div>
        <motion.div
        
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{opacity:1,y:0}}
        // exit={{ opacity: 0, y: -100 }}
        //  transition={{ duration: 1.1, ease: "easeInOut" }}
        className='text-center items-center '>
          <h1 className=" text-[50px] sm:text-[70px] text-headingColor font-bold">KIMSAT</h1>
          <h2 className="text-md sm:text-lg text-secondaryColor ">HOSPITAL KADAKKAL</h2>
          <hr className="w-16 border-red-600 my-4 mx-auto"/>
          <p className="text-gray-600 leading-3 text-xs sm:text-lg">Advanced & Affordable Medical Care</p>
        </motion.div>

        {/* <div className='sm:absolute sm:bottom-10 w-full flex justify-center'>
          <div className="mt-[150px] justify-center sm:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
            <Link to={'/doctors'}>
              <button className="btn w-full sm:w-[270px] text-xs sm:text-sm rounded-full">FIND DOCTORS</button>
            </Link>
            <Link to={'/doctors'}>
              <button className="btn hover:text-black hover:bg-white hover:border-redColor w-full sm:w-[270px] text-xs sm:text-sm rounded-full">BOOK A HEALTH CHECKUP</button>
            </Link>
            <Link to={'/doctors'}>
              <button className="btn w-full sm:w-[270px] text-xs sm:text-sm rounded-full">PATIENT PORTAL</button>
            </Link>
            <Link to={'/doctors'}>
              <button className="btn w-full sm:w-[270px] text-xs sm:text-sm rounded-full">VISA MEDICALS</button>
            </Link>
            <Link to={'/doctors'}>
              <button className="btn w-full sm:w-[270px] text-xs sm:text-sm rounded-full">TELEHEALTH CONSULTATION</button>
            </Link>
          </div>
        </div> */}
        <OtpVerification/>

       
     
    </section>
    {  tab==='malayalam'?
    <BookingMalayalamContainer tab={tab} setTab={setTab} />
    :
    <BookingContainer tab={tab} setTab={setTab} />


}
    <About/>
    <Specialities/>
    <OurVisionPage/>
    <Blog/>
    <Stories/>
   </>
  );
}

export default Home;
