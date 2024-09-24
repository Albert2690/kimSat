import { useState, useEffect } from 'react';
import StoryImage from '../assets/images/Gallery6.png';
import StoryImage1 from '../assets/images/2023-05-17.jpg';
import './Stories.css';

function Stories() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
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
      },{
        img: StoryImage,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
      },{
        img: StoryImage,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
      },{
        img: StoryImage1,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
      },{
        img: StoryImage,
        title: 'കഥകള്‍ KIMSAT',
        description: 'ആശ Hospitals and patient stories',
        date: 'ജൂണ്‍ 10 ന്',
        video: false,
      },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextStory();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentStartIndex]);

  const nextStory = () => {
    setCurrentStartIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= stories.length ? 0 : nextIndex; 
    });
  };

  const previousStory = () => {
    setCurrentStartIndex((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 1;
      return prevIndexAdjusted < 0 ? stories.length - 1 : prevIndexAdjusted; 
    });
  };

  let displayedStories = stories.slice(currentStartIndex, currentStartIndex + 3);
  if (currentStartIndex + 3 > stories.length) {
    displayedStories = [
      ...displayedStories,
      stories[0],
      stories[1],
    ];
  }

  const progressPercentage = (currentStartIndex / (stories.length - 1)) * 100;
  const progressWidth = '6%'; 


  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left; 
    const progressWidth = progressBar.clientWidth;
    const clickedIndex = Math.floor((clickX / progressWidth) * stories.length); 
    setCurrentStartIndex(clickedIndex >= stories.length ? stories.length - 1 : clickedIndex); 
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-4xl text-headingColor font-bold">Stories</h1>
          <p className="text-secondaryColor font-semibold">Patient Stories</p>
        </div>
        <button className='btn group'>
        VIEW ALL
        <i className="fas fa-arrow-right transition-transform duration-1000 group-hover:translate-x-2 ml-1">
        </i>
        </button>
      </div>
      <div className="relative overflow-hidden scrollbar-custom">
        <div className="flex gap-5 transition-transform duration-500">
          {displayedStories.map((story, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0">
              <img src={story.img} alt={story.title} className="w-full h-48 object-cover mb-2" />
              <h2 className="font-bold text-lg md:text-xl">{story.title}</h2>
              <p className="text-gray-600">{story.description}</p>
              {story.video && <p className="text-red-600">Watch Video</p>}
              <p className="text-gray-600">{story.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-10">
        <div className="h-1 bg-gray-300 w-full cursor-pointer" onClick={handleProgressClick}>
        <div
            className="h-full bg-thirdColor"
            style={{ 
              width: progressWidth, 
              position: 'absolute', 
              left: `${progressPercentage}%`, 
              transition: 'left 0.5s ease' 
            }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="text-2xl text-secondaryColor" onClick={previousStory}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="text-2xl text-secondaryColor" onClick={nextStory}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Stories;
