import React, { useState, useEffect } from 'react';
import './Hero1.css'; // Ensure this CSS is properly linked
import Doctorimage from '../assets/images/Dr-Merlin-Mathew.png';
import backgroundImage from '../assets/images/01-02.png';

const Hero1 = () => {
  const [active, setActive] = useState(3); // Starting with the 4th item

  const Doctors = [
    { name: 'Dr. Mohammed Hussain', image: Doctorimage, specialities: ['Orthopaedics'], qualification: 'MBBS, DNB (General Medicine)' },
    { name: 'Dr. Sreejith M D', image: Doctorimage, specialities: ['Neuro Surgery'], qualification: 'MBBS, MS (Neuro Surgery)' },
    { name: 'Dr. Merlin Mathew', image: Doctorimage, specialities: ['Pulmonology'], qualification: 'MBBS, MD (Pulmonology)' },
    { name: 'Dr. A', image: Doctorimage, specialities: ['Cardiology'], qualification: 'MBBS, MD (Cardiology)' },
    { name: 'Dr. B', image: Doctorimage, specialities: ['Oncology'], qualification: 'MBBS, MD (Oncology)' },
    { name: 'Dr. C', image: Doctorimage, specialities: ['Radiology'], qualification: 'MBBS, MD (Radiology)' },
  ];

  const loadShow = () => {
    const elements = document.querySelectorAll('.slider .item');
    
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
      elements[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      elements[i].style.zIndex = -stt;
      elements[i].style.filter = 'blur(5px)';
      elements[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Show items before active
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      elements[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      elements[i].style.zIndex = -stt;
      elements[i].style.filter = 'blur(5px)';
      elements[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const nextSlide = () => {
    if (active < Doctors.length - 1) {
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
    if (touchEndX < touchStartX) {
      nextSlide(); // Swiped left
    } else if (touchEndX > touchStartX) {
      prevSlide(); // Swiped right
    }
  };

  return (
    <div className='sect'
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="slider">
        {Doctors.map((doctor, index) => (
          <div 
            key={index}
            onDragStart={handleTouchStart}
            onDragEnd={handleTouchEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="item"
          >
            <img src={doctor.image} alt={doctor.name} />
            <h1>{doctor.name}</h1>
            <p>{doctor.specialities.join(', ')}</p>
            <p>{doctor.qualification}</p>
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
  );
};

export default Hero1;
