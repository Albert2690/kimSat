import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiTarget, FiEye, FiBook } from "react-icons/fi";

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
    <div className='flex  justify-center'>
        
  
    <motion.div
    ref={ref}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{ transformStyle: "preserve-3d", transform }}
    className="relative h-96 w-72 rounded-xl bg-purple-50 shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <div
      style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
      className="absolute inset-4 grid p-6 place-content-between rounded-xl bg-white shadow-lg"
    >
      {/* Render the Icon here */}
      {Icon && <Icon className="mx-auto text-secondaryColor text-3xl mb-4" />}
      
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
}

const About3 = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row p-5 gap-4 sm:p-16 justify-around mb-10">
        {/* Use the TiltCard for Our Mission */}
        <TiltCard Icon={FiTarget} title="Our Mission" description="We are committed to delivering exceptional medical care with compassion, integrity, and respect for every individual we serve." />
        
        {/* Use the TiltCard for Our Philosophy */}
        <TiltCard Icon={FiBook} title="Our Philosophy" description="Our philosophy centers on holistic care that considers the physical, emotional, and social aspects of each patient’s health." />
        
        {/* Use the TiltCard for Our Vision */}
        <TiltCard Icon={FiEye} title="Our Vision" description="Our vision is to redefine healthcare by providing compassionate, patient-centered services that prioritize the well-being of our community." />
      </div>
      
      {/* Additional content for Chairman, etc. */}
    </div>
  );
}

export default About3;
