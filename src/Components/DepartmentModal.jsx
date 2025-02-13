
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAppleAlt, faStethoscope, faPills, faHandSparkles, faSyringe, 
  faHeartbeat, faLungs, faBone, faXRay, faBrain, faVial, faVenus, 
  faFlask, faAmbulance, faDumbbell, faNotesMedical, faDna, faMale, faCut, faChild, faMicroscope, 
  faTooth,
  faBedPulse
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

// Updated departments with correct FontAwesome icons
const departments = [
  { name: "Accident & Emergency Medicine(Casualty)", icon: faAmbulance },
  { name: "General Medicine", icon: faNotesMedical },
  { name: "Laparoscopic and General Surgery", icon: faCut },
  { name: "Orthopaedics", icon: faBone },
  { name: "Pulmonology", icon: faLungs },
  { name: "ENT", icon: faStethoscope },
  { name: "Nephrology", icon: faBedPulse },
  { name: "Neurology", icon: faBrain },
  { name: "Neurosurgery", icon: faBrain },
  { name: "Pediatrics", icon: faChild },
  { name: "Cardiology", icon: faHeartbeat },
  { name: "Gynaecology", icon: faVenus },
  { name: "Endocrinology", icon: faDna },
  { name: "Gastroenterology", icon: faCut },
  { name: "Dermatology", icon: faHandSparkles },
  { name: "Urology and Andrology", icon: faMale },
  { name: "Pathology", icon: faMicroscope },
  { name: "Radiology", icon: faXRay },
  { name: "Psychiatry", icon: faBrain },
  { name: "Dentistry", icon: faTooth },

  


  


  { name: "Clinical Nutrition", icon: faAppleAlt },
  

  { name: "Anesthesiology", icon: faSyringe },
  
 
  
  
  { name: "Pharmacy", icon: faPills },
  { name: "Central Laboratory & Microbiology", icon: faFlask },
  { name: "Transfusion Medicine", icon: faVial },
 
  { name: "Physiotherapy", icon: faDumbbell },


  
  // Alternative icon for Gastroenterology

 
 
 
];

function DepartmentModal() {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 transition duration-500 top-[100%] opacity-90 bg-white rounded-lg shadow-lg p-[70px] z-50 w-[90%] sm:w-[900px] text-black">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {departments.map((dept, index) => (
                    <Link key={index} to={`/department-detial/${dept.name}`}>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={dept.icon} className="bg-secondaryColor text-white rounded-full p-3 text-sm" />
                            <span className="hover:text-redColor text-sm">{dept.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DepartmentModal;
