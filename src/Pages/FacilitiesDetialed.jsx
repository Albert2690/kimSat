import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../Api";
import KimsatImage from "../assets/images/2023-08-07.jpg";
import CommonGallery from "../Components/CommonGallery";
import image1 from '../assets/images/Rectangle 36-3.png'
import image2 from '../assets/images/WhatsApp Image 2024-10-02 at 11.29.28 AM.jpeg'

// frontend/src/assets/images/

// import KimSat from '../assets/images/Bazooka - Official Teaser ｜ Mammootty ｜ Gautham Vasudev Menon ｜ Deeno Dennis.mp4'
import { toast } from "react-toastify";
// C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\
function FacilitiesDetialed() {
  const { name } = useParams();
  console.log(name, "name facility  ! ");
  const [department, setDepartment] = useState(null); // Initialize as null
  const [doctors, setDoctors] = useState([]);
    const [images] = useState([image1,image2,image1,image2,image1,image2])
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    window.scroll(0, {
      behaviour: "smooth",
    });
    const handleApi = async () => {
      try {
        const response = await apiInstance.get(`/facilities/c/${name}/`);
        if (response.data.success) {
          setDepartment(response.data.data);
          // setDoctors(response.data.department_details.doctors);
          // setCards(response.data.department_details.card);
        } else {
          toast.error("Error ocuured while fetching");
        }
      } catch (error) {
        console.error("Error fetching department details:", error);
      }
    };
    handleApi();
  }, [name]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  console.log(department?.bullet_points, "bulllet");
  return (
    <>
      <section className="mt-0 sm:mt-[-40px]">
        <div className="flex justify-center">
          <img
            src={department?.banner}
            alt=""
            className="sm:w-screen sm:h-[450px] w-full  object-cover "
          />
        </div>
      </section>
      <div className=" p-5  sm:p-16 flex flex-col items-center sm:flex-row">
        <div className="p-8 md:p-16 sm:w-3/4 w-full">
          <div className=" mx-auto bg-white ">
            <h1 className="text-3xl md:text-4xl text-headingColor font-bold mb-4 md:mb-6">
              {department?.heading}
            </h1>
            <p className="text-textColor text-justify mb-4 md:mb-6">
              {department?.paragraph1}
            </p>
            <div className="flex flex-col md:flex-row mb-4 md:mb-6">
              <ul className="list-disc list-inside text-textColor space-y-2 my-4 md:mr-6">
                {department?.bullet_points.map((items, index) => {
                  return (
                    <li key={index} className="text-textColor">
                      {items}
                    </li>
                  );
                })}
                {/* <li>Lorem Ipsum is simply dummy</li>
                                <li>Lorem Ipsum is simply dummy</li>
                                <li>Lorem Ipsum is simply dummy</li>
                                <li>Lorem Ipsum is simply dummy</li>
                                <li>Lorem Ipsum is simply dummy</li>
                                <li>Lorem Ipsum is simply dummy</li> */}
              </ul>
            </div>
            <p className="text-textColor">{department?.paragraph2}</p>
          </div>
        </div>
        <div className="flex sm:w-1/4 w-full justify-center md:justify-end  md:w-auto">
          <div className="relative">
            {/* Video element */}
            {/* <video
                ref={videoRef}
                onClick={handlePlayPause}
                src={KimSat}
                autoPlay={true}
                disableRemotePlayback
                loop
                controls
                className="w-full h-auto"
                muted 
            /> */}
            <img
              src={department?.image}
              alt="Kimsat-Image"
              className="w-full h-auto"
            />

            {/* Play button overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
                <button
                    onClick={handlePlayPause}
                    className="bg-white rounded-full p-2"
                >
                    <i className={`fas fa-${isPlaying ? 'pause' : 'play'} text-2xl text-textColor`}></i>
                </button>
            </div> */}
          </div>
        </div>

      </div>
      <CommonGallery page={department?.heading} Images={images} />

    </>
  );
}

export default FacilitiesDetialed;
