import React from 'react';
import StoryImage from '../assets/images/Gallery6.png';
import KimsatImage from '../assets/images/2024-02-19.jpg'
import StoryImage1 from '../assets/images/2023-05-17.jpg';
import { Link } from 'react-router-dom';

const stories = [
    {
        img: StoryImage,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
    },
    {
        img: StoryImage1,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
    },
    {
        img: StoryImage1,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
    }, {
        img: StoryImage,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
    }, {
        img: StoryImage,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
    }, {
        img: StoryImage1,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
    }, {
        img: StoryImage,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
    },
];

const redirectVideo = ()=>{
    window.open ("https://youtu.be/8PfrraYgNF0?si=PWU7xIB77SQDlhlL");
}

function Blog() {
    return (
     <>

     <section className=''>
      <div className="flex justify-center">
        <img src={KimsatImage} alt="" className='sm:w-screen sm:h-[450px] w-full h-[300px] object-cover ' />
      </div>
    </section>
        <div className="p-8 sm:p-16">
            <h1 className="text-5xl font-bold text-headingColor my-8">Our Stories</h1>
            {/* <h2 className="text-xl text-redColor font-semibold my-8">Patient Stories</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                    <Link to={'/blog-detial'}>
                    
                    <div  key={index} className="mb-8">
                        <div className="relative group">
                            {/* Image with overlay */}
                            <img
                                src={story.img}
                                alt="story-image"
                                className="w-full h-48 object-cover mb-2"
                            />
                            {/* Black overlay that disappears on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                        </div>
                        <h3  className="text-xl font-bold">{story.title}</h3>
                        <p className="text-gray-600">{story.description}</p>
                        <p className="text-gray-600 mb-2">{story.date}</p>
                        {/* {index % 2 !== 0 && (
                            <p onClick={redirectVideo} className="text-redColor cursor-pointer">Watch Video</p>
                        )} */}
                    </div>
                    </Link>
                    
                ))}
            </div>
        </div>
     </>

    );
}

export default Blog;
