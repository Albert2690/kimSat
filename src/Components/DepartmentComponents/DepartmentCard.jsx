import './DepartmentCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


function DepartmentCard({ name, paragraph_1, icon, }) {


    return (
        <div className="bg-white group hover:bg-secondaryColor hover:scale-110 transition-transform duration-1000 relative p-6  rounded-lg shadow-md">
            <div className="text-center mt-2">
                <i className={`${icon} text-4xl text-secondaryColor group-hover:text-white`}></i>
            </div>
            <h3 className="text-xl text-headingColor group-hover:text-white font-semibold text-center mt-2">{name}</h3>
            <p className="para text-justify group-hover:text-white my-5">{paragraph_1}</p>
            <div className="text-center">
            <Link to={`/department-detial/${name}`}>

            <button className=" absolute bottom-2 mt-4 right-6   text-headingColor group-hover:text-white  px-4 py-2 rounded-full flex space-x-2 items-center mb-2 md:mb-0 group transition-all duration-300 ease-in-out">
              <span>Learn More</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="p-2 text-headingColor   rounded-full transform transition-transform duration-1000 group-hover:translate-x-2 group-hover:text-white"
              />
            </button>
            </Link>
            </div>
        </div>
    );
}


export default  DepartmentCard;
