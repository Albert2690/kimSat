import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HomeBanner from '../Components/HomeBanner';
import BookingContainer from '../Components/BookingContainer';
import BookingMalayalamContainer from '../Components/BookingMalayalamContainer';
import About from '../Components/About';
import Specialities from '../Components/Specialities';
import OurVisionPage from '../Components/OurVisionPage';
import Stories from '../Components/Stories';
import apiInstance from '../Api';
import './Home.css';
import Hero from '../Components/Hero';

function Home() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [tab, setTab] = useState('malayalam');
  const [departments, setDepartments] = useState([]); 
  const [malayalamNews,setMalayalamNews] = useState([])
  const [englishNews,setEnglishNews] = useState([])

  // Calculate header height for offset

  const handleApi =async()=>{
    try{
      const response = await apiInstance.get('/latest-news/')
      if(response.data.success){
        setMalayalamNews(response.data.data.malayalam || [])
        setEnglishNews(response.data.data.english || [])
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
handleApi()

  },[])
  const marqueeRef = useRef(null);
  const [duration, setDuration] = useState(10); // Default duration

  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await apiInstance.get('department/detail/list');
        console.log(response.data, 'data from department detailed page');
        if (response.data.success) {
          if (response.data.department_list.length > 0) {
            setDepartments(response.data.department_list);
          }
        } else {
          toast.error(response.data.error);
        }
      } catch (err) {
        console.log(err);
        toast.error(err);
      }
    };
    handleApi();
  }, []);

  useEffect(() => {
    const calculateDuration = () => {
      const marqueeWidth = marqueeRef.current?.scrollWidth || 0;
      const containerWidth = marqueeRef.current?.offsetWidth || 0;

      const newDuration = marqueeWidth > containerWidth ? marqueeWidth / 100 : 30; 
      setDuration(newDuration);
    };


    setTimeout(() => {
      calculateDuration();
    }, 100); 
  }, [englishNews]);

  useEffect(() => {
    window.scrollTo(0, {
      behavior: 'smooth',
    });
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <section className="relative text-center flex flex-col md:flex-row-reverse gap-5 justify-around items-center bg-white">
        <HomeBanner />
      </section>

      <div className="flex lg:hidden bg-secondaryColor py-3 items-center w-full overflow-hidden">
        {/* <span
          ref={marqueeRef}
          className="text-white text-[15px] font-semibold whitespace-nowrap"
          style={{
            animation: `marquee ${duration}s linear infinite`,
          }}
        >
          {text}
        </span> */}
          <span className="text-white text-[15px] font-semibold ">
            <marquee  direction="">
            <div className="flex flex-row items-center">
            <p style={{ wordSpacing: '5px' }} className="text-[14px]  leading-5">
               {malayalamNews.length>0 &&  malayalamNews} </p>

                <p style={{ fontFamily: 'Poppins', wordSpacing: '1px' }} className="text-[18px] ml-6 font-medium"> {englishNews.length>0 &&  englishNews}</p>
                </div>
           </marquee>
              </span>
      </div>

      {/* Booking Section */}
      {tab === 'malayalam' ? (
        <BookingMalayalamContainer tab={tab} setTab={setTab} />
      ) : (
        <BookingContainer tab={tab} setTab={setTab} />
      )}

      {/* Other sections */}
      <About />
      <Hero/>
      <Specialities department={departments} />
      <OurVisionPage />
      <Stories />
    </>
  );
}

export default Home;
