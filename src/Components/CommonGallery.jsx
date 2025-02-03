/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";

function CommonGallery({ page, Images=[] }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute hidden right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md sm:flex items-center justify-center z-10 hover:bg-gray-100 transition-all duration-200"
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-50px] hidden top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md sm:flex items-center justify-center z-10 hover:bg-gray-100 transition-all duration-200"
      aria-label="Previous"
    >
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: Images?.length > 4,
    speed: 500,
    slidesToShow: Math.min(Images.length, 3),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: Math.min(Images?.length, 3) } },
      { breakpoint: 1024, settings: { slidesToShow: Math.min(Images?.length, 2) } },
      { breakpoint: 768, settings: { dots: false, slidesToShow: Math.min(Images?.length, 1) } },
    ],
  };

  const handleMouseDown = (e) => {
    if (e.target === e.currentTarget) return;
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.target === e.currentTarget) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setStartPos({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - startPos.x,
      y: touch.clientY - startPos.y
    });
  };

  const handleImageClick = (image, e) => {
    e.stopPropagation();
    setSelectedImage(image);
    setPosition({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  return (
    <div className="bg-white p-6 sm:p-16">
      <div className="text-center mb-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-wide text-secondaryColor font-serif"
        >
          {page}
        </motion.h2>
      </div>

      <div className="relative mt-14">
        <style>
          {`
            .slick-dots { bottom: -40px; }
            .slick-dots li { margin: 0 4px; }
            .slick-dots li button { width: 8px; height: 8px; }
            .slick-dots li button:before {
              content: '';
              width: 8px;
              height: 8px;
              background: #D1D5DB;
              border-radius: 50%;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .slick-dots li.slick-active button:before {
              background: #7A5299;
              transform: scale(1.2);
            }
            .lightbox-image {
              cursor: move;
              max-width: none;
              max-height: none;
              user-select: none;
            }
            .lightbox-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.9);
              z-index: 50;
            }
          `}
        </style>

        <Slider {...settings} className="custom-slider">
          {Images?.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer w-full max-w-sm bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ scale: 1.03 }}
              onClick={(e) => handleImageClick(image.url, e)}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-cover object-center rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </Slider>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div 
              className="absolute inset-0 overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Lightbox view"
                  className="max-h-full max-w-full object-contain"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    cursor: isDragging ? 'grabbing' : 'grab'
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommonGallery;