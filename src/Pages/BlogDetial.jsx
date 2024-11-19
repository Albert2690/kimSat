import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import KimsatImage from '../assets/images/2023-08-07.jpg';
import apiInstance from '../Api';

function BlogDetail() {
    const [blogDetails, setBlogDetails] = useState({});
    const { id } = useParams();

    const handleApi = async () => {
        try {
            const response = await apiInstance.get(`/blog/${id}/`);
            if (response.data.success) {
                setBlogDetails(response.data.data);
            } else {
                console.error('Error: Failed to fetch blog details');
            }
        } catch (err) {
            console.error('Error fetching blog details:', err);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        handleApi();
    }, [id]); // Added `id` as a dependency to refetch if `id` changes

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
            <div className="p-5 sm:p-16 mx-auto">
                <h1 className="text-2xl text-headingColor font-bold mb-2">{blogDetails.heading}</h1>
                <p className="text-headingColor mb-4">Posted on {formatDate(blogDetails.date)} by KimsatAdmin</p>
                {blogDetails.cover_image && (
                    <img src={blogDetails.cover_image} alt={blogDetails.heading} className="w-full sm:h-[500px] object-cover mb-4" />
                )}
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold mb-2">Introduction:</h2>
                    <p className="mb-4">{blogDetails.paragraph1}</p>

                    {blogDetails.subheading && (
                        <h2 className="text-xl font-bold mb-2">{blogDetails.subheading}:</h2>
                    )}
                    {Array.isArray(blogDetails.bullet_points) && blogDetails.bullet_points.length > 0 && (
                        <ul className="list-disc list-inside mb-4">
                            {blogDetails.bullet_points.map((symptom, index) => (
                                <li key={index}>{symptom}</li>
                            ))}
                        </ul>
                    )}
                    <p className="mb-4">{blogDetails.paragraph2}</p>
                </div>
            </div>
        </>
    );
}

export default BlogDetail;
