import { useEffect, createElement } from "react";
import { content } from "../services/Content";
import { useState } from "react";

const Hero = () => {
  
  const { hero, Contact } =content;

  

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


         <h1 className="absolute rotate-90 hidden z-[99999] top-[45%] right-[-8%] lg:inline text-4xl text-[#EAF2FA]">
            {hero.firstName}
            <span className="text-dark_primary ">{hero.LastName}</span>
          </h1>


        <div className="w-[65%] md:h-[18rem] absolute left-0 bottom-0 overflow-hidden  silhouetteBg  "></div>

        <div className="absolute left-2 h-[100vh] md:h-fit md:left-[12%]  md:w-[30%] w-[95%] z-100 top-2 md:top-[28%]">
          <span className=" flex-row hidden md:flex mb-4">
            {Contact.social_media.map((content, i) => (
              <div key={i} data-aos="fade-down" data-aos-delay={i * 430}>
                <a className="w-fit" href={content.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-[orange] text-2xl mr-3">{createElement(content.icon)}</h3>
                </a>
              </div>
            ))}
          </span>

          <h2 className="text-4xl w-[80%] md:w-fit">{hero.title}</h2>
          <br />
          <h4 className="text-lg z-[99] -mt-4 drop-shadow-[0_35px_35px_rgba(255,255,255,0.8)]">
            {hero.sub_title} &nbsp;
            <br className="md:hidden"/>
            {textList.map((text, index) => (
              <span
                key={index}
                className={`absolute transform text-orange-400 font-semibold md:whitespace-nowrap ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  } transition-all duration-500`}
              >
                {text}.
              </span>
            ))}
          </h4>
          <br />
          <div className="flex w-[75vw] md:w-fit bottom-20  justify-start absolute md:static md:mt-0 ">
            <button id="book-me" className="btn w-full md:my-4  md:w-fit bg-dark_primary text-white md:bg-white md:text-dark_primary  md:hover:bg-dark_primary   md:hover:text-white" onClick={handleBookMeClick}>
              {hero.btnText}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10"></div>
        </div>



        <div data-aos="slide-left"
          className="absolute h-full w-3/12 md:w-3/12 lg:w-4/12   top-0 right-0 bg-primaryLinear bottom-0 -z-10 flex -pr-[25%] items-center justify-end">
          
        </div>


       

        <div className="h-screen absolute right-0 md:w-[30%] lg:w-[53%] z-[20]">
          <img src={hero.image} data-aos="slide-left" data-aos-delay="100" alt="sonko henry" className="h-[60vh] overflow-visible mt-[22vh] ml-[30%] md:ml-0 md:mt-0 md:h-full object-cover" />
          {/* <img src={hero.imageObject} className="absolute w-[80%] right-[-10%] bottom-0 z-[100] slide-in-left" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
