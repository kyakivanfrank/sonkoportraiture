import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

const Imagecell = ({ img, caption, number }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={number * 400} className='relative h-fit mx-1 my-2 break-inside-avoid'>
      <img className='rounded-md grayscale-[75%] w-full hover:grayscale-0' loading='lazy' src={img} alt={caption} />

      <button id="likes" className='bottom-2 left-2 rounded-md items-center space-x-1 py-2 px-[10px] faintBlackBG absolute flex flex-row'>
        <HeartIcon className='w-3 md:w-4 lg:w-5 text-white' />
        <span className='text-white text-sm md:text-md lg:text-lg font-semibold'>{Math.floor(Math.random() * (68 - 10 + 1)) + 10}</span>
      </button>
    </div>
  );
};

export default Imagecell;
