import React from 'react'
import FacilitiesCard from './FacilitiesCard'


const facilities = [
    {
        icon: "fas fa-medkit",
        title: "Medical Service",
        description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
    },
    {
        icon: "fas fa-ambulance",
        title: "24x7 Emergency Medicine",
        description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
    },
    {
        icon: "fas fa-procedures",
        title: "24x7 ICU",
        description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
    },
    {
        icon: "fas fa-ambulance",
        title: "24x7 Ambulance With ICU",
        description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
    },
    {
        icon: "fas fa-vials",
        title: "24x7 Laboratory Service",
        description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
    },
    {
        icon: "fas fa-tint",
        title: "24x7 Dialysis",
        description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."
    }
];

function Facilities1() {
  return (

        <div className="container bg-purple-50 mx-auto py-12">
            <h1 className="text-4xl font-bold text-headingColor text-center mb-12">Our Facilities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((dept, index) => (
                    <FacilitiesCard key={index} {...dept} />
                ))}
            </div>
        </div>
)
  
}

export default Facilities1