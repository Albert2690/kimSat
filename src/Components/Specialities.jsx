import React from 'react';
import './Specialities.css';
import { motion } from 'framer-motion';
import { Link,useNavigate } from 'react-router-dom';

function Specialities({ department }) {
  const navigate = useNavigate()
  const departments = department.splice(0, 6);

  const handleNavigate = (dept)=>{
navigate(`/department-detial/${dept}`)
  }

  console.log(departments, 'dept from sec');
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-5 sm:p-16">
      <h1 className="text-4xl text-headingColor font-semibold mb-8">Our Specialities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {departments.map((speciality, index) => (
         
          <motion.div
          onClick={()=>handleNavigate(speciality.name)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            key={index}
            className="bg-white card group cursor-pointer hover:bg-secondaryColor p-6 rounded-lg shadow-md text-center"
          >
            {/* Use <i> tag for FontAwesome icons */}
            <i className={`${speciality.icon} text-4xl text-secondaryColor group-hover:text-white mb-4`} />
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">{speciality.name}</h2>
            <p className="para text-justify card-child">{speciality.paragraph_1}</p>
          </motion.div>
         
        ))}
      </div>
      <Link to={'/departments'}>
        <button className="mt-8 btn">
          VIEW MORE <i className="fas fa-arrow-right ml-2" />
        </button>
      </Link>
    </div>
  );
}

export default Specialities;
