import './DepartmentCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


function DepartmentCard({ title, description, icon,no }) {


    return (
        <div className="bg-white relative p-6 space-y-9 rounded-lg shadow-md">
            <div className="text-center mb-4">
                <i className={`${icon} text-4xl text-secondaryColor`}></i>
            </div>
            <h3 className="text-xl text-headingColor font-semibold text-center mb-2">{title}</h3>
            <p className="para text-justify mb-4">{description}</p>
            <div className="text-center">
            <Link to={`/department-detial/${no}`}>

            <button className=" absolute bottom-2 mt-4 right-6 hover:bg-secondaryColor  text-headingColor hover:text-white  px-4 py-2 rounded-full flex space-x-2 items-center mb-2 md:mb-0 group transition-all duration-300 ease-in-out">
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
