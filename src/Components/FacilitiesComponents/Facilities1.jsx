import React from 'react'
import FacilitiesCard from './FacilitiesCard'
import {Link} from 'react-router-dom'


// const facilities = [
//     {
//         icon: "fas fa-medkit",
//         title: "Medical Service",
//         no:1,
//         description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
//     },
//     {
//         icon: "fas fa-ambulance",
//         title: "24x7 Emergency Medicine",
//         no:1,
//         description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
//     },
//     {
//         icon: "fas fa-procedures",
//         title: "24x7 ICU",
//         no:1,
//         description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
//     },
//     {
//         icon: "fas fa-ambulance",
//         title: "24x7 Ambulance With ICU",
//         no:1,
//         description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
//     },
//     {
//         icon: "fas fa-vials",
//         no:1,
//         title: "24x7 Laboratory Service",
//         description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
//     },
//     {
//         icon: "fas fa-tint",
//         title: "24x7 Dialysis",
//         no:1,
//         description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
//     }
// ];

function Facilities1({facilities}) {
    console.log(facilities,'facilitis')
  return (

        <div className="container bg-purple-50 mx-auto py-12">
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((dept, index) => (
                    
                    <Link to={`/facility-detial/${dept.heading}`} > 
                    <FacilitiesCard key={index} {...dept} />
                    
                    </Link>
                ))}
            </div>
        </div>
)
  
}

export default Facilities1