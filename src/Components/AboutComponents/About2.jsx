import React from 'react'

function About2() {
  return (
    <div className="p-5 bg-purple-50  sm:p-16">
                    <section className="mb-12">
                        <h1 className="text-4xl font-bold text-headingColor mb-4">About Our Hospital</h1>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-bold text-secondaryColor mb-4">Welcome To Our Hospital</h2>
                                <p className="mb-4 text-lg para font-semibold text-textColor">
                                    Kadakkal Institute of Medical Science and Technology (KIMSAT) is a super-specialty hospital in Govindamangalam, Kadakkal, Kollam district, Kerala, India. It is a subsidiary of the Kadakkal Service Co-operative Bank (KSCB). The hospital aims to offer advanced medical care at an affordable cost to people of all walks of life. It has a wheelchair accessible entrance and parking. It is one of the best hospitals in the eastern part of Kollam district.
                                </p>
                                <p className="mb-4 para font-semibold text-lg text-textColor">
                                    The hospital structured in January 2023. The required number of shares are issued to individuals and institutions.
                                </p>
                            </div>
                            <div className="md:w-1/2 md:pl-8">
                                <img src="https://placehold.co/600x400" alt="Image of Kadakkal Institute of Medical Science and Technology (KIMSAT) building" className="w-full h-auto rounded-lg shadow-lg mb-4"/>
                            </div>

                        </div>
                    </section>
<hr className="border-t-2 border-secondaryColor  my-6" />

                    <section className='my-16'>
                        <h2 className="text-4xl font-bold text-headingColor mb-4">Kimsat Hospital</h2>
                        <h3 className="text-xl font-bold text-secondaryColor mb-4">Transforming Healthcare In Kadakkal</h3>
                        <p className="mb-8 text-lg para font-semibold">
                            At KIMSAT Cooperative Hospital, we believe in providing not just medical care but compassionate healing to our community. Established in January 2020, our journey began with a vision to revolutionize healthcare accessibility in Kadakkal and its surrounding areas.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-medal text-2xl text-secondaryColor mr-4"></i>
                                    <h4 className="text-xl font-bold text-headingColor">Commitment To Excellence:</h4>
                                </div>
                                <p className='para leading-7'>
                                    With Phase 1 of construction underway, we are investing Rs. 35 crores to ensure that state-of-the-art facilities and cutting-edge technology are at the heart of our hospital. From advanced diagnostics to specialized treatment centers, every aspect of KIMSAT is designed to deliver world-class healthcare services.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-users text-2xl text-secondaryColor mr-4"></i>
                                    <h4 className="text-xl font-bold text-headingColor">Community-Centric Approach:</h4>
                                </div>
                                <p className='para leading-7'>
                                    Recognizing the need for inclusive healthcare, we have issued shares to both individuals and institutions, ensuring that the community has a stake in their own well-being. This collaborative effort empowers everyone to contribute to and benefit from the growth of KIMSAT.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-heart text-2xl text-secondaryColor mr-4"></i>
                                    <h4 className="text-xl font-bold text-headingColor">A Beacon Of Hope:</h4>
                                </div>
                                <p className='para leading-7'>
                                    For too long, residents of Kadakkal have had to travel to Trivandrum Medical College for advanced medical care. With KIMSAT Cooperative Hospital, we aim to change that narrative. Our modern facilities, combined with a team of dedicated healthcare professionals, will bring relief and comfort to those in need, right in their own neighborhood.
                                </p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-hands-helping text-2xl text-secondaryColor mr-4"></i>
                                    <h4 className="text-xl font-bold text-headingColor">Get Involved:</h4>
                                </div>
                                <p className='para  leading-7 '>
                                    Whether you're seeking healthcare services, interested in becoming a shareholder, or simply want to learn more about KIMSAT, our Administrative Office located at Bank HQ is open to assist you. Join us in our journey to redefine healthcare in Kadakkal and make a meaningful difference in the lives of our community members.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
  )
}

export default About2