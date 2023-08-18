import { useState, useEffect } from "react";
import { content } from "../services/Content";
import { BsWhatsapp } from "react-icons/bs";
import cameraImg from "../assets/images/camera_placeholder.jpg"

const placeholder = {
  imageUrl: cameraImg,
  imageDesc:"Great technique with high-end gear"
}

import { createElement } from "react";

const About = () => {
  const { about } = content;


  const [shuffledProContent, setShuffledProContent] = useState([]);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const shuffledImages = about.about_images
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      setShuffledProContent(shuffledImages);
    }, 5000);

    return () => {
      clearInterval(shuffleInterval);
    };
  }, [about.about_images]);



  return (

    <section className="bg-[#5452520c] dark:bg-gray-900" id="about">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">


    <div className="justify-center xl:w-1/2 py-0 md:py-10 ">
      <div className="relative h-80 w-80 sm:w-[28rem] left-0 mx-auto sm:h-[28rem] overflow-x-clip flex ">
        {shuffledProContent.length === 0 ? 
        <>
          <span className="absolute w-48 px-4 py-2 rounded-lg  bg-[white]/30 backdrop-blur bottom-[1rem] shadow-md right-[23px]">{placeholder.imageDesc}</span>
         <img
         className="flex-shrink-0 object-cover w-full rounded-full"
         src={placeholder.imageUrl}
         alt={`Image`}
       />
        </>
        :
        shuffledProContent.map(({imageUrl, imageDesc}, index) => (
          <>
          <span className="absolute w-48 px-4 py-2 rounded-lg  bg-[white]/30 backdrop-blur bottom-[1rem] shadow-md  right-[23px]">{imageDesc}</span>
          <img
            className="flex-shrink-0 object-cover mr-10 w-full rounded-full"
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
          </>
        ))
       }
      </div>
    </div>

        <div className="flex flex-col items-center md:text-left mt-6 xl:items-start text-center xl:w-1/2 xl:mt-0">
           
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                {about.about_title} <span className="text-blue-500">{about.about_name}</span>
            </h2>
            <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">{about.about_description} </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
            <a href="https://wa.me/971507314559?text=_This%20is%20an%20automatic%20message%20from%20sonkoportraiture.com_" 
            className="inline-flex justify-center w-full px-6 py-2 text-white duration-300 bg-black items-center rounded-lg hover:bg-[green] focus:ring focus:ring-[green] focus:ring-opacity-80">
            <h4 className="text-white mr-2">{createElement(BsWhatsapp)}</h4>  contact me
            </a>
        </div>
        </div>
    </div>


</section>


  );
};

export default About;
