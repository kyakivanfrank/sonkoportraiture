import { useEffect, useState, createElement } from "react";
import { content } from "../services/Content";

const Hero = () => {
  const { hero, Contact } = content;

  const [textList] = useState(['Dubai', 'Abu Dhabi', 'Sharjah', 'the Emirates Gulf']);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [textList.length]);

  const handleBookMeClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(`https://wa.me/971588228043?text=_This%20is%20a%20client%20contact%20from%20sonkoportraiture.com_`);
    } else {
      window.location.href = '#contact';
    }
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="w-full h-[18rem] absolute bottom-0 overflow-hidden silhouetteBg "></div>

        <div className="absolute left-[12%] w-[30%] top-[28%]">
          <span className="flex flex-row mb-4">
            {Contact.social_media.map((content, i) => (
              <div key={i} data-aos="fade-down" data-aos-delay={i * 430}>
                <a className="w-fit" href={content.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-[orange] text-2xl mr-3">{createElement(content.icon)}</h3>
                </a>
              </div>
            ))}
          </span>

          <h2 className="text-4xl">{hero.title}</h2>
          <br />
          <h4 className="text-lg -mt-4">
            {hero.sub_title}&nbsp;
            {textList.map((text, index) => (
              <span
                key={index}
                className={`absolute transform text-orange-400 font-semibold whitespace-nowrap ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  } transition-all duration-500`}
              >
                {text}.
              </span>
            ))}
          </h4>
          <br />
          <div className="flex justify-start">
            <button id="book-me" className="btn hover:bg-dark_primary hover:text-white" onClick={handleBookMeClick}>
              {hero.btnText}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10"></div>
        </div>

        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10 flex -pr-[25%]  items-center justify-end"
        >
          <h1 className="inline rotate-90 text-4xl -mr-[30%] text-[#EAF2FA]">
            {hero.firstName}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>


        <div className="md:h-[32rem] absolute right-[30%] z-[20]">
          <img src={hero.image} data-aos="slide-up" alt="..." className="h-full object-cover" />
          <img src={hero.imageObject} className="absolute right-[-50%] bottom-0 z-[100] slide-in-left" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
