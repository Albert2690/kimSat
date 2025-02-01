import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function CommonGallery({ page, Images }) {
  const [selectedImage, setSelectedImage] = useState(null);

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
    dotsClass: "slick-dots",
  };

  // Close modal when clicking outside the image
  const handleModalClose = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-16">
      {/* Title */}
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

      {/* Image Slider */}
      <div className="relative mt-14">
        <style>
          {`
            .slick-dots {
              bottom: -40px;
            }
            .slick-dots li {
              margin: 0 4px;
            }
            .slick-dots li button {
              width: 8px;
              height: 8px;
            }
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
              background: #F59E0B;
              transform: scale(1.2);
            }
            .slick-track {
              margin-left: 0;
            }
            .slick-slide {
              padding: 0 12px;
            }
          `}
        </style>
        <Slider {...settings} className="custom-slider">
          {Images?.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer w-full max-w-sm bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] modal-backdrop px-4"
          onClick={handleModalClose}
          onTouchEnd={handleModalClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative  flex justify-center items-center p-2"
          >
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[80vh] sm:max-h-[70vh] sm:max-w-[80vw] object-contain rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default CommonGallery;
