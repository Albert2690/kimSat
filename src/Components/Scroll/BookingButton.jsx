import  { useState,useContext,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookingContext } from '../../Layouts/Layout';

function BookingButton() {
  const [isHovered,setIsHovered] = useState(false); // To track hover state
  const navigate = useNavigate()

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [facility, setModalOpenFacility] = useState(false);




  useEffect(() => {


    const header = document.getElementById("header");
    setHeaderHeight(header?.offsetHeight || 0);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      setHeaderHeight(header?.offsetHeight || 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate,]);


  const {  setShowBooking,  } =    useContext(BookingContext); 
    



  const handleScrollToBooking = () => {
 
    setShowBooking(true);
    navigate("/");
    setTimeout(() => {
      const bookingElement = document.getElementById("bookingmalayalam");

      if (bookingElement) {
        const elementPosition =
          bookingElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <div onClick={handleScrollToBooking} className='flex  flex-col gap-5 z-20 fixed bottom-36 right-4'>
      <motion.div
        className="relative flex items-center"
        onHoverStart={() => setIsHovered(true)}  // Set hover state to true
        onHoverEnd={() => setIsHovered(false)}   // Set hover state to false
      >
        {/* The Button */}
        <motion.button
          className="bg-thirdColor hover:bg-secondaryColor text-white p-2 rounded-full flex space-x-2 items-center group transition-all duration-300 ease-in-out shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon
            icon={faUserDoctor}
            className="p-1 text-xl text-white rounded-full transform transition-transform duration-500 group-hover:translate-y--2"
          />
        </motion.button>

        {/* Detail Box - Appears on Hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-12 bottom-0 bg-secondaryColor text-white p-3 rounded-lg shadow-lg text-sm w-max"
          >
            Book an Appointment
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default BookingButton;
