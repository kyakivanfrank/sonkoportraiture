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
      <div className="container px-0 w-[90%] md:w-[80%] py-[5rem] flex flex-col justify-between">
        <div>
         <h4 className=" font-bold text-2xl" data-aos="fade-down">
            {Projects.title}
          </h4>
          <br />
        </div>
        <img
          src={Projects.image}
          alt="..."
          data-aos="fade-right"
          className="absolute bottom-0 h-[100%] -mb-[10rem] z-[20] "
        />

        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
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
                className="bg-white rounded-[0.5rem] p-4 border-b-2 object-contain border-[#FAF9FD] h-fit"
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
                  className="w-full rounded-[0.5rem] object-cover h-[400px]"
                  alt="..."
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins text-2xl text-right">
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
