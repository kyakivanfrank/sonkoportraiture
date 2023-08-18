import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/gallery/gallery";
import Navbar from '../Layouts/Navbar';
import { content } from "../services/Content";
import { createElement } from 'react';

const Home = () => {
  const { icon, link } = content.Contact.social_media[2];

  const year = new Date().getFullYear();


  return (
    <>
      <div className="relative">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-5 fixed right-5"
          aria-label="Social Media Link"
        >
          <h3 className="bg-[green] z-100 p-[1rem] md:p-[1.2rem] round text-white text-[1.5rem] md:text-[2rem]">
            {createElement(icon)}
          </h3>
        </a>
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </div>
      <footer className="py-2 md:py-4">
        <div className="container px-0 w-[90%] md:w-[80%] text-center md:text-left">
          <h6 className="text-lg md:text-xl lg:text-2xl">
            <span className="text-[orange]">SONKO</span>PORTRAITURE
          </h6>
          <p>sonkoportraiture © All CopyRights Reserved {year}</p>
        </div>
        <div className="text-center container px-0 w-[90%] md:w-[80%] lg:text-right">
          <span className="text-xs">Developed by </span>
          <a
            href="https://frankkyakusse.com"
            className="text-[orange] hover:underline"
            aria-label="Developer Website Link"
          >
            studioFrank
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
