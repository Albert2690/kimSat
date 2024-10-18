import React,{useEffect} from 'react'
import KimsatImage from '../assets/images/2023-08-07.jpg'

const blogData = {
    title: "Hernia symptoms, treatment, and various surgical procedures for correction",
    author: "KimsatAdmin",
    date: "July 19, 2024",
    image: "https://res.cloudinary.com/costamed/image/upload/f_auto,q_auto/r2tbfxbtk5fublcqrcft.jpg",
    altText: "A man in a yellow shirt holding his lower back in pain",
    introduction: `Hernia is a common medical condition that affects many people worldwide. It occurs when an organ or fatty tissue protrudes through a weak spot in the surrounding muscle or connective tissue. In this article, we will explore the symptoms, treatment options, and various surgical procedures available for correcting different types of hernias. We will also focus on Kimsat Hospital, known for providing the best treatment for hernia in Kerala, where minimally invasive procedures are performed with excellent surgical outcomes. Prof. Dr. K. P. Haridas, with over 50 years of experience, is the esteemed chief surgeon at Lords Hospital.`,
    bulletHeading:'Symptoms of Hemorrhoids',
    symptoms: [
        // "Visible Lump or Bulge",
        "IDigestive Issues",
        "Pain or Discomfor",
        "SWeakness or Pressure",
        "Burning or Aching Sensation",
    ],
    additionalInfo: `Hemorrhoids are a common condition that affects millions of people worldwide. They occur when the veins in the rectum or anus become swollen and inflamed, causing discomfort, pain, and sometimes bleeding. In this article, we will explore the symptoms, treatment options, and various surgical procedures available for the correction of hemorrhoids, including fissures, piles, and fistulas. We will also highlight the expertise of Prof. Dr. K. P. Haridas, the chief surgeon at Lords Hospital in Kerala, known for its best-in-class treatment and minimally invasive procedures.`,
};

function BlogDetail() {

    useEffect(()=>{
        window.scroll(0,{
            behaviour:'smooth'
          })
    },[])
    const { title, author, date, image, altText, introduction, symptoms, additionalInfo,bulletHeading } = blogData;

    return (
        <>
        {/* <section className='mt-0 sm:mt-[-40px]'>
        <div className="flex justify-center">
          <img src={KimsatImage} alt="" className='sm:w-screen sm:h-screen object-cover ' />
        </div>
      </section> */}
        <div className="p-5 sm:p-16 mx-auto">
            <h1 className="text-2xl text-headingColor font-bold mb-2">{title}</h1>
            <p className="text-headingColor mb-4">Posted on {date} by {author}</p>
            <img src={image} alt={altText} className="w-full object-cover mb-4" />
            <div className='flex flex-col gap-5'>

        
            <h2 className="text-xl font-bold mb-2">Introduction:</h2>
            <p className="mb-4">{introduction}</p>

            <h2 className="text-xl font-bold mb-2">{bulletHeading}:</h2>
            <ul className="list-disc list-inside mb-4">
                {symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                ))}
            </ul>

            <p className="mb-4">{additionalInfo}</p>
            </div>
        </div>

        </>

    );
}

export default BlogDetail;