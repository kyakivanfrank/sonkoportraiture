import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/gallery/gallery";
import Navbar from "../Layouts/Navbar";
import { content } from "../services/Content";
import { createElement } from "react";


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
          <span className="text-xs inline ">
            Developed with love {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 inline text-red-500"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>{' '}
            by{' '}
          </span>
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
