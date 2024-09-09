import React from 'react'

function DoctorsList() {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8">
    <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-4 md:mb-0">
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <a href="#" className="text-purple-600">Clear All</a>
            </div>
            <div className="mb-6">
                <h3 className="text-md font-medium mb-2">Centers Of Excellence</h3>
                <ul className="space-y-2">
                    <li><input type="checkbox" id="center1" className="mr-2"/><label htmlFor="center1">Centre Of Orthopaedics</label></li>
                    <li><input type="checkbox" id="center2" className="mr-2"/><label htmlFor="center2">Cancer Care</label></li>
                    <li><input type="checkbox" id="center3" className="mr-2"/><label htmlFor="center3">Heart Care</label></li>
                    <li><input type="checkbox" id="center4" className="mr-2"/><label htmlFor="center4">Neurosciences</label></li>
                    <li><input type="checkbox" id="center5" className="mr-2"/><label htmlFor="center5">Gastroenterology</label></li>
                    <li><input type="checkbox" id="center6" className="mr-2"/><label htmlFor="center6">Urology</label></li>
                    <li><input type="checkbox" id="center7" className="mr-2"/><label htmlFor="center7">Mother & Child Care</label></li>
                    <li><input type="checkbox" id="center8" className="mr-2"/><label htmlFor="center8">Critical Care & Pulmonology</label></li>
                    <li><input type="checkbox" id="center9" className="mr-2"/><label htmlFor="center9">Plastic Surgery</label></li>
                    <li><input type="checkbox" id="center10" className="mr-2"/><label htmlFor="center10">General Surgery</label></li>
                </ul>
            </div>
            <div>
                <h3 className="text-md font-medium mb-2">Specialities</h3>
                <ul className="space-y-2">
                    <li><input type="checkbox" id="speciality1" className="mr-2"/><label htmlFor="speciality1">Orthopaedics</label></li>
                    <li><input type="checkbox" id="speciality2" className="mr-2"/><label htmlFor="speciality2">Cardiology</label></li>
                    <li><input type="checkbox" id="speciality3" className="mr-2"/><label htmlFor="speciality3">Neurology & Brain/Spine Surgery</label></li>
                    <li><input type="checkbox" id="speciality4" className="mr-2"/><label htmlFor="speciality4">Gastroenterology</label></li>
                    <li><input type="checkbox" id="speciality5" className="mr-2"/><label htmlFor="speciality5">Urology</label></li>
                    <li><input type="checkbox" id="speciality6" className="mr-2"/><label htmlFor="speciality6">Nephrology</label></li>
                    <li><input type="checkbox" id="speciality7" className="mr-2"/><label htmlFor="speciality7">Pulmonology</label></li>
                    <li><input type="checkbox" id="speciality8" className="mr-2"/><label htmlFor="speciality8">Plastic Surgery</label></li>
                    <li><input type="checkbox" id="speciality9" className="mr-2"/><label htmlFor="speciality9">General Surgery</label></li>
                    <li><input type="checkbox" id="speciality10" className="mr-2"/><label htmlFor="speciality10">Internal Medicine</label></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="w-full md:w-3/4 h-screen overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-6">All Doctors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/100x100" alt="Doctor's portrait" className="mx-auto mb-4 rounded-full"/>
                <h2 className="text-lg font-medium">Dr. Mohammed Hussain</h2>
                <p className="text-sm text-gray-600">Superintendent & General Surgeon</p>
                <p className="text-sm text-gray-600">MBBS, MS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/100x100" alt="Doctor's portrait" className="mx-auto mb-4 rounded-full"/>
                <h2 className="text-lg font-medium">Dr. Haris S</h2>
                <p className="text-sm text-gray-600">Physician</p>
                <p className="text-sm text-gray-600">MBBS, DNB (General Medicine)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/100x100" alt="Doctor's portrait" className="mx-auto mb-4 rounded-full"/>
                <h2 className="text-lg font-medium">Dr. Azees Khan S</h2>
                <p className="text-sm text-gray-600">Orthopaedic Surgeon</p>
                <p className="text-sm text-gray-600">MBBS, MS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/100x100" alt="Doctor's portrait" className="mx-auto mb-4 rounded-full"/>
                <h2 className="text-lg font-medium">Dr. Shanth Mohan</h2>
                <p className="text-sm text-gray-600">Orthopaedics</p>
                <p className="text-sm text-gray-600">MBBS, MS (Orthopaedics)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/100x100" alt="Doctor's portrait" className="mx-auto mb-4 rounded-full"/>
                <h2 className="text-lg font-medium">Dr. Sreejith M D</h2>
                <p className="text-sm text-red-600 font-semibold">Consultant Neuro Surgeon</p>
                <p className="text-sm text-gray-600">MBBS, MS, MCh (Neuro Surgery)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/100x100" alt="Doctor's portrait" className="mx-auto mb-4 rounded-full"/>
                <h2 className="text-lg font-medium">Dr. Sreejith M D</h2>
                <p className="text-sm text-red-600 font-semibold">Consultant Neuro Surgeon</p>
                <p className="text-sm text-gray-600">MBBS, MS, MCh (Neuro Surgery)</p>
            </div>
            {/* Add more doctor cards as needed */}
        </div>
    </div>
</div>
  )
}

export default DoctorsList