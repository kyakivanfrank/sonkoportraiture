import { useState, useEffect } from "react";
import { content } from "../services/Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const About = () => {
  const { Projects } = content;

  const [shuffledProContent, setShuffledProContent] = useState([]);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const shuffledContent = Projects.project_content
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      setShuffledProContent(shuffledContent);
    }, 10000);

    return () => {
      clearInterval(shuffleInterval);
    };
  }, [Projects.project_content]);

  return (
    <section className="bg-bg_light_primary overflow-y-hidden relative" id="about">
      <div className="md:container px-5 pt-12 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down text-4xl">
            {Projects.title}
          </h2>
          <br />
        </div>
        <img
          src={Projects.image}
          alt="..."
          data-aos="fade-right"
          className="max-w-[23vw] absolute bottom-0 -mb-32 z-[20] min-w-[8rem]"
        />

        <div className="flex items-center lg:flex-row flex-col-reverse my-20 gap-5">
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-full drop-shadow-primary self-start"
          >
            {shuffledProContent.map(({ sub_title, title, image }, index) => (
              <SwiperSlide
                key={index}
                className="bg-white rounded-[0.5rem] p-6 border-b-8 object-contain border-[#FAF9FD] h-fit"
              >
                <span
                  style={{ backdropFilter: "blur(20px)" }}
                  data-aos="fade-right"
                  className="absolute rounded-md right-[4rem] bg-[#05050591] text-white w-[50%] bottom-[8rem] text-2xl p-[20px]"
                >
                  {sub_title}
                </span>
                <img
                  src={image}
                  className="w-full h-[600px] object-cover"
                  alt="..."
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins text-3xl text-right">
                    {title}
                  </h5>
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
