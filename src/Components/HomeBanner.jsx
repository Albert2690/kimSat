import React, { useEffect, useState } from 'react';

import KimsatBanner1 from '../assets/images/cover 1.jpg';
import KimsatBanner2 from '../assets/images/cover 2.jpg';
import KimsatBanner3 from '../assets/images/cover 3.jpg';
import KimsatBanner4 from '../assets/images/home banner template (1).jpg'
// "C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function HomeBanner() {
  const images = [KimsatBanner1, KimsatBanner2, KimsatBanner3,KimsatBanner4];

  // Add clones for the infinite loop effect
  const totalSlides = images.length + 2; // 2 extra for clone slides
  const [activeIndex, setActiveIndex] = useState(1); // Start with the first real slide
  const [transition, setTransition] = useState(true);

  // Clone first and last slides for infinite loop
  const clonedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    if (activeIndex === totalSlides - 1) {
      // When reaching the last cloned slide, reset to first real slide without transition
      setTransition(false);
      setActiveIndex(1); // Go to the first real slide
    } else {
      setTransition(true);
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      // When reaching the first cloned slide, reset to last real slide without transition
      setTransition(false);
      setActiveIndex(totalSlides - 2); // Go to the last real slide
    } else {
      setTransition(true);
      setActiveIndex((prevIndex) => prevIndex - 1);
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
      handleNext(); // Swiped left
    } else if (touchEndX > touchStartX + 50) {
      handlePrev(); // Swiped right
    }
  };

  // Handle smooth transition reset when sliding infinitely
  useEffect(() => {
    if (!transition) {
      const timeout = setTimeout(() => setTransition(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [transition]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slide container */}
      <div
        className={`flex ${transition ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {clonedImages.map((src, index) => (
          <div 
           onTouchStart={handleTouchStart}
           onTouchMove={handleTouchMove}
           onTouchEnd={handleTouchEnd}
          key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              className="w-full  h-[400px] md:h-[600px] lg:h-[700px] object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index + 1)} // Adjust for cloned slides
            className={`w-3 h-3 rounded-full ${
              index + 1 === activeIndex || (activeIndex === 0 && index === images.length - 1)
                ? 'bg-white'
                : 'bg-gray-400'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-textColor p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-textColor p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </button>
    </div>
  );
}

export default HomeBanner;
