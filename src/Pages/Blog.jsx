import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StoryImage from '../assets/images/Gallery6.png';
import KimsatImage from '../assets/images/blogg.jpg';
import KimsatImage2 from '../assets/images/phonesizeblog.jpg';
import StoryImage1 from '../assets/images/2023-05-17.jpg';
import apiInstance from '../Api';

function Blog() {
    const [stories, setStories] = useState([]);

    const apicall = async () => {
        try {
            const response = await apiInstance.get('/blog');

            if (response.data.success) {
                setStories(response.data.data);
            } else {
                console.error('API call successful but no data returned:', response);
            }
        } catch (err) {
            console.error('Error fetching blog data:', err);
        }
    };

    useEffect(() => {
        apicall();
    }, []);

    // Date formatting helper function
    const formatDate = (dateStr) => {
        try {
            const dateObj = new Date(dateStr);
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            };
            return new Intl.DateTimeFormat('en-US', options).format(dateObj);
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid date';
        }
    };

    return (
        <>
            <section className=''>
            <div className="relative flex justify-center">
  <picture>
    {/* Use responsive images for better performance */}
    <source media="(min-width: 640px)" srcSet={KimsatImage} />
    <img 
      src={KimsatImage2} 
      alt="Doctor banner" 
      className="w-full object-cover" 
    />
  </picture>
  {/* Overlay content */}
  <div className="absolute hidden sm:block top-1/2 left-20 transform -translate-y-1/2">
    <h1 className="text-4xl sm:text-8xl font-bold text-secondaryColor">
      Blogs
    </h1>
  </div>
</div>

            </section>
            <div className="p-8 sm:p-16">
                <h1 className="text-5xl font-bold text-secondaryColor my-8">Our Stories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <Link to={`/blog-detial/${story.id}`} key={index}>
                            <div className="mb-8">
                                <div className="relative group">
                                    {/* Image with overlay */}
                                    <img
                                        src={story.banner_image || StoryImage}
                                        alt="story-image"
                                        className="w-full h-48 object-fill mb-2"
                                    />
                                    {/* Black overlay that disappears on hover */}
                                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-xl font-bold">{story.heading}</h3>
                                <p className="text-gray-600 mb-2">{formatDate(story.date)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Blog;
