import { useState, useEffect, useContext } from "react";
import { BookingContext } from "../../Layouts/Layout";
import { TfiMenuAlt } from "react-icons/tfi";
import kimsatLogo from "../../assets/Kimsat Logo/KIMSAT FINAL LOGO-2.png";
// import kimsatLogo from '../../assets/Kimsat Logo/—Pngtree—white instagram icon png instagram_3562066.png';
import DepartmentModal from "../DepartmentModal";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacilitiesModal from "../FacilitiesComponents/FacilitiesModal";
import Cookies from "universal-cookie";

import {
  faAmbulance,
  faStethoscope,
  faCut,
  faHeartbeat,
  faFemale,
  faChild,
  faBone,
  faBrain,
  faUserMd,
  faLungs,
  faDna,
  faSpa,
  faWalking,
  faSyringe,
  faXRay,
  faMale,
  faVials,
  faPills,
  faSignInAlt,
  faPhoneVolume,
  faSignOut,
  faUser,
  faArrowRight,
  faPhone, // Import the login and right arrow icons
} from "@fortawesome/free-solid-svg-icons";
import Login from "../Login";
import apiInstance from "../../Api";
import { toast } from "react-toastify";

function UserHeader() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const { showBooking, setShowBooking, showLogin, setShowLogin, setShowOtp } =
    useContext(BookingContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [facility, setModalOpenFacility] = useState(false);

  // Calculate header height for offset
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    let token = localStorage.getItem("userToken");
    token ? setLogin(true) : setLogin(false);
    const header = document.getElementById("header");
    setHeaderHeight(header?.offsetHeight || 0);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      setHeaderHeight(header?.offsetHeight || 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate, login]);
  // const cookiess = document.cookie.split(';').reduce((acc, cookie) => {
  //   const [name, value] = cookie.split('=');
  //   acc[name.trim()] = decodeURIComponent(value);
  //   return acc;
  // }, {});

  // console.log(cookiess['access_token'],'access_tokenn ');

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

  const handleDepartmentsHover = () => {
    if (!isSmallScreen) {
      // console.log("Mouse over event triggered");
      setModalOpen(true);
    }
  };

  const handleDepartmentsLeave = () => {
    setModalOpen(false);
  };
  const handleFacilitiesHover = () => {
    if (!isSmallScreen) {
      // console.log("Mouse over event triggered");
      setModalOpenFacility(true);
    }
  };

  const handlefacilitiesLeave = () => {
    setModalOpenFacility(false);
  };

  const handleBookingMobile = (pa) => {
    // console.log(pa,'clicked')
    handleScrollToBooking();

    setMenuOpen(false);
  };

  const handleLogut = async () => {
    setMenuOpen(false);
    try {
      const result = await apiInstance.delete("/patient/logout", {
        withCredentials: true,
      });
      if (result.data.success) {
        localStorage.removeItem("mobile");
        localStorage.removeItem("userToken");
        setLogin(false);
        navigate("/");
      } else {
        toast.error(result.data.err);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div
      id="header"
      className=" bg-white z-[1000] shadow-md   fixed top-0 left-0 w-full"
    >
      <header className="flex justify-around ml-0  sm:ml-14 items-center   py-5 border-b">
        <div className="flex lg:mr-[70px] items-center">
          <Link to={'/'}>
          <img
            src={kimsatLogo}
            alt="KIMSAT Hospital Logo"
            className=" w-[100px] h-[40px] sm:w-[145px]  sm:h-[60px]"
          />
          </Link>
        </div>
        <div className="hidden sm:flex items-center justify-center space-x-9  ">
          <div className=" flex flex-row gap-3">
          <span className=" hidden lg:block text-secondaryColor text-md font-semibold">
            Latest News
          </span>
          <div className=" hidden max-w-[500px] lg:block ">
            <span className="text-redColor  font-semibold ">
            <marquee direction="">
              <div className="flex flex-row items-center">
              <p style={{ wordSpacing: '5px' }} className="text-[14px]  leading-5">
                കിംസാറ്റ് ആശുപത്രിയിലും. </p>

                <p style={{ fontFamily: 'Poppins', wordSpacing: '1px' }} className="text-[18px] ml-6 font-medium">   MEDISEP, the Kerala government's
                comprehensive insurance scheme for government employees,
                dependents and pensioners, is now available at Kimsat Hospital
                as well.</p>
              </div>
            
                
              </marquee>
            </span>
          </div>
          </div>
         

          <div>
            {/* <div className="flex flex-row justify-between"> */}

            <div className="flex  space-x-2 justify-center w-full  items-center  ">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="text-secondaryColor  text-lg"
              />
              {/* <h2 className=" text-sm font-semibold text-secondaryColor ">
                 -
              </h2> */}
              <a
                href="tel:+91 7356792035"
                className="text-redColor font-semibold"
              >
                735 679 2035
              </a>
            </div>
          </div>
          {/* <div className="flex flex-row space-x5"> */}
          {login ? (
            <div
              onClick={handleLogut}
              className="flex flex-col cursor-pointer space-x-2 justify-center items-center"
            >
              {/* <i className="fa fa-sign-out" aria-hidden="true"></i> */}

              <FontAwesomeIcon
                icon={faSignOut}
                className="text-xl text-secondaryColor card-child  mb-4"
              />
              {/* <i class="fa-solid fa-house"></i> */}

              <span className="text-secondaryColor text-sm m-[-2px] font-semibold cursor-pointer">
                Logout
              </span>
            </div>
          ) : (
            <div
              onClick={() => setShowLogin(true)}
              className="flex flex-row  cursor-pointer space-x-2 items-center"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-xl text-secondaryColor card-child "
              />

              {/* <i class="fa-solid fa-house-blank"></i> */}
              <span className="text-secondaryColor text-sm  item-start font-semibold cursor-pointer">
                {" "}
                Patient Login
              </span>
            </div>
          )}

          <button
            onClick={handleScrollToBooking}
            className="btn   px-7 py-2 text-md rounded-full"
          >
            BOOK AN APPOINTMENT{" "}
          </button>
        </div>

        {/* </div> */}
        {/* </div> */}
        <div className="md:hidden ml-[180px]  ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <TfiMenuAlt className="w-5 h-5" />
          </button>
        </div>
      </header>
      {/* <span className="text-white text-md font-semibold">Latest News</span>
          <div className="scroll-container">
            <span className="text-white text-[15px] font-semibold scroll-news">അടുത്ത ആഴ്ച മുതൽ പ്രമേഹ രോഗികൾക്ക് ക്യാമ്പ് ആരംഭിക്കുന്നു</span>
          </div> */}
      <div className="flex justify-start ml-4 sm:ml-0 sm:justify-center">
        <nav
          className={`flex flex-col justify-start sm:flex-row space-y-2 md:space-y-0  md:space-x-8 py-4 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link to={"/"}>
            <span
              onClick={() => setMenuOpen(false)}
              className="inline-block highlight p-2 font-semibold text-secondaryColor  cursor-pointer"
            >
              Home
            </span>
          </Link>

          {/* <span className="inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer">
            Patient Portal
          </span> */}
          <Link to={"/about"}>
            <span
              onClick={() => setMenuOpen(false)}
              className="inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer"
            >
              About
            </span>
          </Link>

          <Link to={"/doctors"}>
            <span
              onClick={() => setMenuOpen(false)}
              className="inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer"
            >
              Doctors
            </span>
          </Link>
          <Link to={"/departments"}>
            <span
              onClick={() => setMenuOpen(false)}
              onMouseOver={handleDepartmentsHover}
              onMouseOut={handleDepartmentsLeave}
              className="relative inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer"
            >
              Departments{" "}
              <IoMdArrowDropdown className="absolute top-3 right-[-8%]" />
              {modalOpen && <DepartmentModal />}
            </span>
          </Link>
          <Link to={"/facilites"}>
            <span
              onClick={() => setMenuOpen(false)}
              onMouseOver={handleFacilitiesHover}
              onMouseOut={handlefacilitiesLeave}
              className="relative inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer"
            >
              Facilities
              <IoMdArrowDropdown className="absolute top-3 right-[-8%]" />
              {facility && <FacilitiesModal />}
            </span>
          </Link>
          <Link to={"/blog"}>
            <span
              onClick={() => setMenuOpen(false)}
              className="inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer"
            >
              Blog
            </span>
          </Link>

          <Link to={"/career"}>
            <span
              onClick={() => setMenuOpen(false)}
              className="inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer"
            >
              Careers
            </span>
          </Link>

          <Link to={"/contact-us"}>
            <span
              onClick={() => setMenuOpen(false)}
              className="inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer"
            >
              Contact
            </span>
          </Link>

          <Link to={"/patient-profile"}>
            <span
              onClick={() => setMenuOpen(false)}
              className="inline-block highlight p-2 font-semibold text-secondaryColor cursor-pointer"
            >
              Patient Portal
            </span>
          </Link>

          {login ? (
            <div
              onClick={handleLogut}
              className="flex flex-row sm:hidden cursor-pointer space-x-4 ml-1   items-center"
            >
              <FontAwesomeIcon
                icon={faSignOut}
                className="text-xl text-secondaryColor card-child  "
              />
              {/* <span  className='text-secondaryColor text-xs m-[-2px] item-start font-semibold cursor-pointer'> Patient Login</span> */}
            </div>
          ) : (
            <div
            onClick={() => {setShowLogin(true),setMenuOpen(!menuOpen)}}
              className="flex flex-row sm:hidden cursor-pointer space-x-4 ml-1   items-center"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-xl text-secondaryColor card-child  "
              />
              <span  className='text-secondaryColor  item-start font-semibold cursor-pointer'>Login</span>
            </div>
          )}

          <span
            onClick={() => {
              setMenuOpen(false), setShowLogin(true);
            }}
            className="text-white sm:hidden cursor-pointer"
          >
            Patient Login
          </span>
          <button
            onClick={() => {
              handleBookingMobile("hiu"), setMenuOpen(false);
            }}
            className="btn sm:hidden px-5 py-2 text-md rounded-full"
          >
            BOOK AN APPOINTMENT{" "}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default UserHeader;
