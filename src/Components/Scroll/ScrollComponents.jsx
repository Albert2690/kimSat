import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import ChatRedirect from '../WhatsappChat/ChatRedirect';

const ScrollComponents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // To track if at the top

  const toggleVisibility = () => {
    const scrollY = window.pageYOffset;
    console.log(scrollY,'scrolling')

    if (scrollY > 300) { 
      setIsVisible(true);
    
    } else {
      setIsVisible(false);
    
    }

    if(scrollY<document.documentElement.scrollHeight){
        setIsAtTop(true);
    }else{
        setIsAtTop(false)
    }
  };

// const toggleVisibility = () => {
//     const scrollY = window.pageYOffset;
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;

//     if (scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }

//     if (scrollY === 0) {
//       setIsAtTop(true);
//     } else {
//       setIsAtTop(false);
//     }


//     if (scrollY + windowHeight >= documentHeight - 10) {
//       setIsAtTop(false);  
//     }
// };



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>

      <div className='flex flex-col gap-5 fixed bottom-40 right-4'>

     
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className=" bg-thirdColor hover:bg-secondaryColor text-white p-2 rounded-full flex space-x-2 items-center group transition-all duration-300 ease-in-out shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            className="p-1 text-white rounded-full transform transition-transform duration-1000 group-hover:translate-y--2"
          />
        </motion.button>
      )}

      {isAtTop && (
        <motion.button
          onClick={scrollToBottom}
          className=" bg-thirdColor hover:bg-secondaryColor text-white p-2 rounded-full flex space-x-2 items-center group transition-all duration-300 ease-in-out shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            className="p-1 text-white rounded-full transform transition-transform duration-1000 group-hover:translate-y--2"
          />
        </motion.button>
      )}
       </div>
    </>
  );
};

export default ScrollComponents;
