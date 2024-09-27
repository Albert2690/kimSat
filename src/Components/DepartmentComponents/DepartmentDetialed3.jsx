import React, { useState, useEffect } from 'react';

const DepartmentDetialed3 = () => {
  const cards = [
    {
      icon: 'fas fa-eye',
      title: 'Clinical Ophthalmology Services',
      description: 'Department led by expert ophthalmologist deals with disorders of...'
    },
    {
      icon: 'fas fa-eye',
      title: 'Glaucoma Clinic',
      description: 'Glaucoma is a group of condition that damages the optic nerve....'
    },
    {
      icon: 'fas fa-eye',
      title: 'ROP Screening',
      description: 'Retinopathy of prematurity is a disorder in the development of...'
    },
    {
      icon: 'fas fa-eye',
      title: 'Cataract Surgery',
      description: 'Highly advanced cataract surgery is performed with precision...'
    },
    {
      icon: 'fas fa-eye',
      title: 'LASIK',
      description: 'Laser eye surgery for vision correction...'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);

  useEffect(() => {
    const updateVisibleCardsCount = () => {
      const isSmallScreen = window.innerWidth < 768; // 768px is typically the breakpoint for small screens
      setVisibleCardsCount(isSmallScreen ? 1 : 3);
    };

    updateVisibleCardsCount(); // Initial check
    window.addEventListener('resize', updateVisibleCardsCount); // Update on resize

    return () => window.removeEventListener('resize', updateVisibleCardsCount);
  }, []);

  const nextCard = () => {
    if (currentIndex < cards.length - visibleCardsCount) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(cards.length - visibleCardsCount); // Loop back to the end
    }
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + visibleCardsCount);

  return (
    <div className="p-5 bg-gray-50 sm:p-16 mx-auto">
      <h1 className="text-xl font-bold text-headingColor mb-4">Treatments & Procedures</h1>
      <p className="text-gray-600 text-justify mb-8">
        We provide comprehensive treatment for all types of diseases under one roof. Our highly experienced doctors supported by especially trained clinical staff, ensure the best care for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        {visibleCards.map((card, index) => (
          <div key={index} className="bg-white transform hover:bg-thirdColor group hover:scale-110 duration-1000 p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <i className={`${card.icon} text-4xl group-hover:text-white text-secondaryColor`}></i>
            </div>
            <h2 className="text-xl font-semibold text-headingColor group-hover:text-white mb-2">{card.title}</h2>
            <p className="text-gray-600 group-hover:text-white">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button 
          onClick={prevCard} 
          className={`border border-secondaryColor text-secondaryColor p-2 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentIndex === 0}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button 
          onClick={nextCard} 
          className={`border border-secondaryColor text-secondaryColor p-2 rounded ${currentIndex >= cards.length - visibleCardsCount ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentIndex >= cards.length - visibleCardsCount}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default DepartmentDetialed3;
