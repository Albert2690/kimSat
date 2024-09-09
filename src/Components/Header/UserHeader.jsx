import { useState,useEffect,useContext } from 'react';
import { BookingContext } from '../../Layouts/Layout';
import { TfiMenuAlt } from "react-icons/tfi";
import kimsatLogo from '../../assets/Kimsat Logo/KIMSAT FINAL LOGO-2.png';
// import kimsatLogo from '../../assets/Kimsat Logo/—Pngtree—white instagram icon png instagram_3562066.png';
import DepartmentModal from '../DepartmentModal';
import { IoMdArrowDropdown } from "react-icons/io";
import './Header.css'
import { Link } from 'react-router-dom';


function UserHeader() {
    const {showBooking,setShowBooking,showLogin,setShowLogin,setShowOTP} = useContext(BookingContext)

    console.log(showBooking,'boookingStatus')

  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [facility,setModalOpenFacility] = useState(false)

  // Calculate header height for offset
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById("header");
    setHeaderHeight(header?.offsetHeight || 0);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      setHeaderHeight(header?.offsetHeight || 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToBooking = () => {
    console.log('helloooihuihui')
    setShowBooking(true);
    

    setTimeout(() => {
      const bookingElement = document.getElementById("bookingmalayalam");
      
      if (bookingElement) {
        const elementPosition = bookingElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 100;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 0); 
}

  const handleDepartmentsHover = () => {
      if (!isSmallScreen) {
          console.log("Mouse over event triggered");
          setModalOpen(true);
      }
  };


  const handleDepartmentsLeave = () => {
    setModalOpen(false);
  };
  const handleFacilitiesHover = ()=>{
    if (!isSmallScreen) {
        console.log("Mouse over event triggered");
        setModalOpenFacility(true);
    }
  }

  const handlefacilitiesLeave = ()=>{
    setModalOpenFacility(false);
  }

  const handleBookingMobile = (pa)=>{
// console.log(pa,'clicked')
handleScrollToBooking()

 setMenuOpen(false)
  }


  return (
    <div id='header' className=" bg-gradient-to-r from-secondaryColor to-[#7A5299] z-[1000] shadow-lg fixed top-0 left-0 w-full">
      <header className="flex justify-between items-center px-3 mx-16 py-5 border-b">
        <div className="flex items-center">
          <img src={kimsatLogo} alt="KIMSAT Hospital Logo" className="mr-2 w-[130px] h-[50px]" />
        </div>
        <div className="hidden sm:flex items-center space-x-11 whitespace-nowrap">
          <span className="text-white text-md font-semibold">Latest News</span>
          <div className="scroll-container">
            <span className="text-white text-[15px] font-semibold scroll-news">അടുത്ത ആഴ്ച മുതൽ പ്രമേഹ രോഗികൾക്ക് ക്യാമ്പ് ആരംഭിക്കുന്നു</span>
          </div>
          <div className='flex space-x-2 justify-center items-center'>
            <span onClick={()=>setShowLogin(true)} className='text-white cursor-pointer'>Patient Login</span>
          </div>
          
          <button onClick={handleScrollToBooking} className="btn  px-5 py-2 text-md rounded-full">BOOK AN APPOINTMENT</button>

          
        </div>
        <div className="md:hidden ml-[100px]">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <TfiMenuAlt />
          </button>
        </div>
      </header>
      <div className='flex justify-start ml-4 sm:ml-0 sm:justify-center'>
        <nav className={`flex flex-col justify-start sm:flex-row space-y-2 md:space-y-0  md:space-x-8 py-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <Link to={'/'}>
            <span className="inline-block highlight p-2 font-semibold text-white  cursor-pointer">
  Home
</span>
            </Link>
      

          <span className="inline-block highlight p-2 font-semibold text-white cursor-pointer">Patient Portal</span>
          <span className="inline-block highlight p-2 font-semibold text-white cursor-pointer">About</span>
          <Link to={'/doctors'}>
          <span className="inline-block highlight p-2 font-semibold text-white cursor-pointer">Doctors</span>

          </Link>
          <span
            onMouseOver={handleDepartmentsHover}
            onMouseOut={handleDepartmentsLeave}
            className="relative inline-block highlight p-2 font-semibold text-white cursor-pointer"
          >
            Departments <IoMdArrowDropdown  className='absolute top-4 right-[-5%]'/>

            {modalOpen && <DepartmentModal />}
          </span>
          <span   onMouseOver={handleFacilitiesHover}
            onMouseOut={handlefacilitiesLeave}
            className="relative inline-block highlight p-2 font-semibold text-white cursor-pointer">Facilities<IoMdArrowDropdown  className='absolute top-4 right-[-5%]'/>
             {facility && <DepartmentModal />}
            </span>
          <span className="inline-block highlight p-2 font-semibold text-white cursor-pointer">Blog</span>
          <span className="inline-block highlight p-2 font-semibold text-white cursor-pointer">Careers</span>
          <span className="inline-block highlight p-2 font-semibold text-white cursor-pointer">Contact</span>
          <span onClick={()=>{setMenuOpen(false),setShowLogin(true)}} className='text-white sm:hidden cursor-pointer'>Patient Login</span>
          <button onClick={()=>handleBookingMobile('hiu')} className="btn sm:hidden px-5 py-2 text-md rounded-full">BOOK AN APPOINTMENT</button>
        </nav>
      </div>
    </div>
  );
}

export default UserHeader;
