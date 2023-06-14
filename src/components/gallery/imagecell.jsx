import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

const Imagecell = ({ img, caption, number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    if (window.innerWidth <= 768) {
      document.getElementById('image_cell').style.transform = 'scale(1.2)';
      document.getElementById('image_cell').style.zIndex = 50;
    }
  };

  const handleTouchEnd = () => {
    if (window.innerWidth <= 768) {
      document.getElementById('image_cell').style.transform = 'scale(1)';
      document.getElementById('image_cell').style.zIndex = 'auto';
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsHovered(false);
    }
  };

  const imageCellStyles = {
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    zIndex: isHovered ? 50 : 'auto',
    padding: isHovered ? '4px' : 'none',
  };

  return (
    <div
      id="image_cell"
      data-aos="fade-up"
      data-aos-delay={number * 5} // Adjusted to faster transition (decreased delay)
      className="relative h-fit mx-[4px] mb-[8px] break-inside-avoid"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={imageCellStyles}
    >
      <img
        className="rounded-md grayscale-[75%] w-full hover:grayscale-0 transition-transform duration-300" // Adjusted transition duration
        loading="lazy"
        src={img}
        alt={caption}
      />
      <button
        id="likes"
        className="bottom-2 left-2 rounded-md items-center space-x-1 py-2 px-[10px] faintBlackBG absolute flex flex-row"
      >
        <HeartIcon className="w-3 md:w-4 lg:w-5 text-white" />
        <span className="text-white text-xs md:text-md lg:text-lg font-semibold">
          {Math.floor(Math.random() * (68 - 10 + 1)) + 10}
        </span>
      </button>
    </div>
  );
};

export default Imagecell;
