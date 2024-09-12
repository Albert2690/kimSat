import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAmbulance, faStethoscope, faCut, faHeartbeat, faFemale, 
  faChild, faBone, faBrain, faUserMd, faLungs, faDna, 
  faSpa, faWalking, faSyringe, faXRay, faMale, faVials, faPills 
} from '@fortawesome/free-solid-svg-icons';
import './Specialities.css'
import { motion } from 'framer-motion';

const specialities = [
    { icon: faAmbulance, title: "Emergency Medicine", description: 'Kimsat Hospital operates a state-of-the-art emergency department staffed by highly skilled emergency...' },
    { icon: faStethoscope, title: "General Medicine", description: 'Kimsat Hospital operates a state-of-the-art emergency department staffed by highly skilled emergency...'  },
    { icon: faCut, title: "General & Laparoscopic Surgery", description: 'Kimsat Hospital operates a state-of-the-art emergency department staffed by highly skilled emergency...'  },
    { icon: faHeartbeat, title: "Cardiology", description: 'Kimsat Hospital operates a state-of-the-art emergency department staffed by highly skilled emergency...'  },
    { icon: faFemale, title: "Gynaecology", description: 'Kimsat Hospital operates a state-of-the-art emergency department staffed by highly skilled emergency...'  },
    { icon: faChild, title: "Pediatrics", description: 'Kimsat Hospital operates a state-of-the-art emergency department staffed by highly skilled emergency...' },
    // { icon: faBone, title: "Orthopedics", description: 'Kimsat Hospital operates a state-of-the-art emergency department staffed by highly skilled emergency...'  },
];

function Specialities() {
  return (
    <div className="min-h-screen bg-gray-50   flex  flex-col items-center p-5  sm:p-16">
      <h1 className="text-4xl text-headingColor font-semibold mb-8">Our Specialities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialities.map((speciality, index) => (
          <motion.div
          initial={{ opacity: 0, y: 100 }}
         whileInView={{opacity:1,y:0}}
         exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          key={index} className="bg-white card hover:bg-[#8871A9] p-6 rounded-lg shadow-md text-center">
            {/* Use FontAwesomeIcon component */}
            <FontAwesomeIcon icon={speciality.icon} className="text-4xl text-secondaryColor card-child  mb-4" />
            <h2 className="text-xl font-semibold mb-2">{speciality.title}</h2>
            <p className="para card-child">{speciality.description}</p>
          </motion.div>
        ))}
      </div>
      <button className="mt-8 btn">
        VIEW MORE <FontAwesomeIcon icon="arrow-right" className="ml-2" />
      </button>
    </div>
  );
}

export default Specialities;
