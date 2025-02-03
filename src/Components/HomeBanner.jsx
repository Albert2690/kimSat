import  { useEffect, useState } from 'react';
import KimsatBanner1 from '../assets/images/IMG_5098.jpg';

import KimsatBanner2 from '../assets/images/home dialysis.jpg';
import KimsatBanner4 from '../assets/images/homebannermedicep.jpg';
import mobileViewBanner1 from '../assets/images/phonesizehomebanner3.jpg';
import mobileViewBanner2 from '../assets/images/IMG_5102.jpg';
import mobileViewBanner3 from '../assets/images/phonesizebanner1.jpg';

// "C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\phonesizehomebanner2.jpg"
// "C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\phonesizehomebanner3.jpg"
// "C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\phonesizebanner1 (2).jpg"
// "C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\phoneappointment.jpg"
// "C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\phonesizedoctorsbanner.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function HomeBanner() {
  const desktopImages = [KimsatBanner1, KimsatBanner2, KimsatBanner4];
  const mobileImages = [mobileViewBanner2,mobileViewBanner1,  mobileViewBanner3];

  const [activeIndex, setActiveIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update `isMobile` state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;
  const totalSlides = images.length + 2;
  const clonedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    if (activeIndex === totalSlides - 1) {
      setTransition(false);
      setActiveIndex(1);
    } else {
      setTransition(true);
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      setTransition(false);
      setActiveIndex(totalSlides - 2);
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
      handleNext();
    } else if (touchEndX > touchStartX + 50) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (!transition) {
      const timeout = setTimeout(() => setTransition(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [transition]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
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
            key={index}
            className="w-full flex-shrink-0"
          >
            <img
              src={src}
              className="w-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index + 1)}
            className={`w-3 h-3 rounded-full ${
              index + 1 === activeIndex || (activeIndex === 0 && index === images.length - 1)
                ? 'bg-white'
                : 'bg-gray-400'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

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
