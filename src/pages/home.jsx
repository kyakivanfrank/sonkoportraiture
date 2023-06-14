import React from 'react'
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import Gallery from "../components/gallery/gallery"
import Navbar from '../Layouts/Navbar'
import { content } from "../services/Content";

import { createElement } from 'react'

const Home = () => {
  const { icon, link } = content.Contact.social_media[2];

    return (
        <div className='relative'>
            <a href={link} target="_blank" rel="noopener noreferrer" className="bottom-5 fixed right-5">
                <h3 className="bg-[green] z-[100] p-6 round text-white text-[3rem] mr-4">
                    {createElement(icon)}
                </h3>
            </a>
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Contact />
            <footer>
          <div className="p-4 container text-center md:text-left">
            <h6 className="mb-3 text-3xl">
              <span className="text-[orange]">SONKO</span>PORTRAITURE
            </h6>
            <p>codeaprogram © All CopyRights Reserved 2022</p>
          </div>
          <div className="text-center p-2 ">
            <span className="text-sm">Developed by </span>
            <a href="https://frankkyakusse.com" className=" text-[orange] hover:underline">
              studioFrank
            </a>
          </div>
        </footer>
        </div>
    )
}

export default Home