import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiTarget, FiEye, FiBook } from "react-icons/fi";
import chairmainImage from "../../assets/images/CHAIRMAN 600-400.jpg";
import DoctorImage from '../../assets/images/Dr-Merlin-Mathew.png'
import DoctorImage1 from '../../assets/images/SHIBU KADAKAKAL.jpg'
import DoctorImage2 from '../../assets/images/P PRATHAPAN KIMSAT.jpg'
import DoctorImage3 from '../../assets/images/K ASHOKAN SECRETARY KIMSAT.jpg'
import DoctorImage4 from '../../assets/images/RAJESH R KIMSAT ADMIN OFFICER.jpg'
import DoctorImage5 from '../../assets/images/NR ANI KIMSAT.jpg'
import DoctorImage6 from '../../assets/images/CHARIMAN VIKRAMAN.jpg'
import DoctorImage7 from '../../assets/images/DR. MOHAMMED HUSSAIN.jpg'
import DoctorImage8 from '../../assets/images/Dr. v midhun president.jpg'
import DoctorImage9 from '../../assets/images/jayapalan.jpg'
import DoctorImage10 from '../../assets/images/suresh s pillai.jpg'
import DoctorImage12 from '../../assets/images/adv prabhulaghosh.jpg'
import DoctorImage11 from '../../assets/images/r latha.jpg'



import DefaultImage from '../../assets/images/pngegg.png'


// import DoctorImage8 from '../../assets/images/K ASHOKAN SECRETARY KIMSAT.jpg'



// frontend/src/assets/images/
// frontend/src/assets/images/
// frontend/src/assets/images/SHIBU KADAKAKAL.jpg

const members = [
  { name: "S. VIKRAMAN", title: "Chairman" ,img:DoctorImage6},
  { name: "Dr. V. MIDHUN", title: "President of KSCB",img:DoctorImage8 },
  { name: "P. ASOKAN", title: "Secretary",img:DoctorImage3 },
  { name: "P. PRATHAPAN", title: "Vice President of KSCB",img:DoctorImage2 },
  { name: "ADV. T.S. PRABHULLA KHOSH", title: "",img:DoctorImage12 },
  { name: "SHIBU KADAKKAL", title: "",img:DoctorImage1 },
  { name: "N.R. ANI", title: "",img:DoctorImage5 },
  { name: "R. LATHA", title: "" ,img:DoctorImage11},
  { name: "E.V JAYAPALAN", title: "",img:DoctorImage9 },
  // { name: "DR. SURESH S. PILLAI", title: "" ,img:DefaultImage},
];
const GoverningBody = [
 
  { name: "RAJESH R", title: "Admin Officer",img:DoctorImage4 },
  { name: "Dr. MOHAMMED HUSSAIN", title: "Medical Superintendent",img:DoctorImage7 },

];
const TiltCard = ({ Icon, title, description }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;
    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex  justify-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", transform }}
        className="relative h-96 w-72 rounded-xl bg-purple-50 shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid p-6 place-content-between rounded-xl bg-white shadow-lg"
        >
          {/* Render the Icon here */}
          {Icon && (
            <Icon className="mx-auto text-secondaryColor text-3xl mb-4" />
          )}

          {/* Title */}
          <p
            style={{ transform: "translateZ(50px)" }}
            className="text-center text-secondaryColor text-2xl font-bold"
          >
            {title}
          </p>

          {/* Description */}
          <p
            style={{ transform: "translateZ(50px)" }}
            className="px-2 text-start text-textColor mt-4 text-base leading-relaxed"
          >
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const About3 = () => {
  return (
    <div className="bg-white ">
      <div className="flex bg-purple-50 justify-center p-5 sm:p-16 items-center">
        <div className="   flex flex-col sm:flex-row   justify-between items-center gap-8">
          <div className="max-w-xl">
            <p className="text-red-700 text-xl mb-4">
              "At KIMSAT Hospital, humanity thrives. Compassion, affordability,
              and community engagement define our commitment to healthcare
              excellence."
            </p>
            <p className="font-bold text-lg">S. VIKRAMAN</p>
            <p className="text-gray-600">(Chairman)</p>
          </div>
          <div>
            {/* <img
              src={chairmainImage}
              alt="Portrait of S. Vikraman, Chairman of KIMSAT Hospital"
              className="rounded-lg object-fit w-[600px] h-[400px] shadow-lg"
            /> */}
             <img
              src={chairmainImage}
              alt="Image of Kadakkal Institute of Medical Science and Technology (KIMSAT) building"
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4  p-5 sm:p-16 justify-around mb-10">
        {/* Use the TiltCard for Our Mission */}
        <TiltCard
          Icon={FiTarget}
          title="Our Mission"
          description="We are committed to delivering exceptional medical care with compassion, integrity, and respect for every individual we serve."
        />

        {/* Use the TiltCard for Our Philosophy */}
        <TiltCard
          Icon={FiBook}
          title="Our Philosophy"
          description="Our philosophy centers on holistic care that considers the physical, emotional, and social aspects of each patient’s health."
        />

        {/* Use the TiltCard for Our Vision */}
        <TiltCard
          Icon={FiEye}
          title="Our Vision"
          description="Our vision is to redefine healthcare by providing compassionate, patient-centered services that prioritize the well-being of our community."
        />
      </div>

      

      <div className="p-5 bg-purple-50 sm:p-16">
        <h1 className="text-3xl sm:text-5xl flex justify-center text-secondaryColor font-bold mb-8">
        Governing Body
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <div
              key={index}
              className=" mx-auto bg-white hover:transform hover:scale-110 duration-300 rounded-lg shadow-md overflow-hidden relative hover:bg-gray-50 transition-all "
            >
              <div className="relative group">
                <img
                  className="w-[300px] h-[300px]"
                  src={member.img}
                  alt="Portrait of a person in a suit"
                />
                {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div> */}
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-headingColor">
                  {member.name}
                </h2>
                <p className="text-textColor">{member.title}</p>
              </div>
            </div>
          ))}
   
        </div>
        <div className="w-full flex flex-row justify-center">

      
<div
 
 className=" mx-auto mt-10 bg-white hover:transform hover:scale-110 duration-300 rounded-lg shadow-md overflow-hidden relative hover:bg-gray-50 transition-all "
>
 <div className="relative group">
   <img
     className="w-[300px] h-[300px]"
     src={DoctorImage10}
     alt="Portrait of a person in a suit"
   />
   {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div> */}
 </div>
 <div className="p-4 text-center">
   <h2 className="text-xl font-semibold text-headingColor">
   Dr. SURESH S. PILLAI
   </h2>
 
 </div>
</div>
</div>
      </div>
      <div className="flex flex-col smflex-row justify-center">

      </div>
      <div className="   p-5  sm:p-16 lg:mx-[250px] ">
        <h1 className="text-2xl sm:text-5xl flex justify-center text-secondaryColor font-bold mb-8">
         Administration
        </h1>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 "> */}
        <div className="flex flex-col my-16 sm:flex-row justify-center ">
          <div>
            
          </div>

          {GoverningBody.map((member, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden relative hover:bg-gray-50 transition-all duration-300"
            >
              <div className="relative group">
                <img
                  className="w-[300px] h-[300px] "
                  src={member.img}
                  alt="Portrait of a person in a suit"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-headingColor">
                  {member.name}
                </h2>
                <p className="text-textColor">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About3;
