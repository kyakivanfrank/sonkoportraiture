import { content } from "../services/Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import aboutImage from "../assets/images/Hero/aboutImage.webp"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const About = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary -z-20 overflow-y-hidden relative" id="about">
      <div className="md:container px-5 pt-12  flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down text-4xl">{Projects.title}</h2>

          <br />
        </div>
        <img src={aboutImage} alt="..." data-aos="fade-right" className="max-w-[23vw] absolute bottom-0 -mb-32 z-[20] min-w-[8rem]" />

        <div className="flex items-center lg:flex-row flex-col-reverse my-20 gap-5">

          <Swiper pagination={{ clickable: true, }} data-aos="fade-left" spaceBetween={20} modules={[Pagination]} className="rounded-3xl pb-16 max-w-full drop-shadow-primary self-start">
            {Projects.project_content.map((content, i) => (
              <SwiperSlide key={i} className="bg-white rounded-[0.5rem] p-6 border-b-8 object-contain border-[#FAF9FD] h-fit" >
                <span style={{ backdropFilter: "blur(20px)" }} className="absolute rounded-md right-[4rem] text-white w-[50%] top-[4rem] text-2xl p-[20px] " >{content.Sub_title}</span>

                <img src={content.image} className="" alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins text-3xl text-right">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
