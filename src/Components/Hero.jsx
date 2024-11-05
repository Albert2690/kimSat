import React, { useState, useEffect } from 'react';
import './Hero1.css';
import Doctorimage from '../assets/images/Dr-Merlin-Mathew.png';
import Doctorimage1 from '../assets/images/RAJESH R KIMSAT ADMIN OFFICER.jpg';
import Doctorimage2 from '../assets/images/DR. MOHAMMED HUSSAIN.jpg';
import Doctorimage3 from '../assets/images/P PRATHAPAN KIMSAT.jpg';
import backgroundImage from '../assets/images/01-02.png';
import Loader from './Loader/Loader';
import apiInstance from '../Api';

const Hero = () => {
  const [active, setActive] = useState(2);
  const [loading,setIsLoading] = useState(false)
  const [doctors,setDoctors] = useState([])



  const handleApi = async () => {
    try {
      setIsLoading(true);
      const response = await apiInstance.get("doctors/list");
      const fetchedDoctors = response.data.data;
  
      // Check if there are at least 3 items to swap
      if (fetchedDoctors && fetchedDoctors.length > 2) {
        // Swap the 2nd and 0th elements
        [fetchedDoctors[0], fetchedDoctors[2]] = [fetchedDoctors[2], fetchedDoctors[0]];
      }
  
      setDoctors(fetchedDoctors); 
    } catch (err) {
      console.log("Error while fetching data", err);
     
    } finally {
      setIsLoading(false);
    }
  };
  
  
  useEffect(() => {
    handleApi();
  }, []);

  const loadShow = () => {
    const elements = document.querySelectorAll('.slider .item');
    
    if (!elements[active]) return; // Exit if `active` index is out of bounds
    
    // Reset all items
    elements.forEach((item) => {
      item.style.transform = '';
      item.style.zIndex = '';
      item.style.filter = '';
      item.style.opacity = '';
    });
  
    // Set active item style
    elements[active].style.transform = 'none';
    elements[active].style.zIndex = 1;
    elements[active].style.filter = 'none';
    elements[active].style.opacity = 1;
  
    // Show items after active
    let stt = 0;
    for (let i = active + 1; i < elements.length; i++) {
      stt++;
      elements[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt})`;
      elements[i].style.zIndex = -stt;
      elements[i].style.filter = 'blur(2px)';
      elements[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  
    // Show items before active
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      elements[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt})`;
      elements[i].style.zIndex = -stt;
      elements[i].style.filter = 'blur(2px)';
      elements[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };
  

  useEffect(() => {
    if (doctors.length > 0) {
      loadShow();
    }
  }, [active,doctors]);

  const nextSlide = () => {
    if (active < doctors.length - 1) {
      setActive((prevActive) => prevActive + 1);
    }
  };
   
  const prevSlide = () => {
    if (active > 0) {
      setActive((prevActive) => prevActive - 1);
    }
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchEndX < touchStartX - 50) {
      nextSlide(); // Swiped left
    } else if (touchEndX > touchStartX + 50) {
      prevSlide(); // Swiped right
    }
  };
  
  let dragStartX = 0;
  let dragEndX = 0;

  const handleDragStart = (e) => {
    dragStartX = e.clientX; // Store the starting position
  };

  const handleDragEnd = (e) => {
    dragEndX = e.clientX; // Store the ending position

    // Determine the drag direction
    if (dragEndX < dragStartX - 50) {
      nextSlide(); // Dragged left
    } else if (dragEndX > dragStartX + 50) {
      prevSlide(); // Dragged right
    }
  };

  return (

    loading ? 

      <Loader/> :(

        <div className='sect'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className='hero-title font-bold text-3xl sm:text-6xl'>Our Heroes</h1>
        <div className="slider">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className={`item ${active === index ? 'active' : ''} cursor-pointer`}
              draggable
            >
              <img src={doctor.photo} alt={doctor.name} />
              <div className="flex mt-7 flex-col   text-center ">
              <h1 className='text-thirdColor text-lg font-bold'>{doctor.user.username}</h1>
              <p className='text-thirdColor text-sm font-semibold'>{doctor.specialization[0].name}</p>
              </div>
             
              {/* .join(', ')} */}
              {/* <p>{doctor.qualification}</p> */}
            </div>
          ))}
          <button id="next" onClick={nextSlide}>
            &gt;
          </button>
          <button id="prev" onClick={prevSlide}>
            &lt;
          </button>
        </div>
      </div>
      )


    
   
  );
};

export default Hero;
