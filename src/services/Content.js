// import images
import Hero_person from "../assets/images/Hero/hero-sonko.png";
import Hero_object from "../assets/images/Hero/Sony_A7sII1.png";

import figma from "../assets/images/Skills/figma.png";
import sketch from "../assets/images/Skills/sketch.png";
import ps from "../assets/images/Skills/ps.png";
import reactjs from "../assets/images/Skills/react.png";
import nodejs from "../assets/images/Skills/node.png";
import python from "../assets/images/Skills/python.png";

import services_logo1 from "../assets/images/Services/logo1.png";
import services_logo2 from "../assets/images/Services/logo2.png";
import services_logo3 from "../assets/images/Services/logo3.png";

import project1 from "../assets/images/projects/img1.png";
import pic1 from "../assets/images/Hero/aboutPics/pic1.jpeg"
import pic2 from "../assets/images/Hero/aboutPics/pic2.jpeg"
import pic3 from "../assets/images/Hero/aboutPics/pic3.jpeg"

import person_project from "../assets/images/projects/person.png";

import avatar1 from "../assets/images/Testimonials/avatar1.png";
import avatar2 from "../assets/images/Testimonials/avatar2.png";
import avatar3 from "../assets/images/Testimonials/avatar3.png";
import avatar4 from "../assets/images/Testimonials/avatar4.png";

import Hireme_person from "../assets/images/Hireme/person.png";
import Hireme_person2 from "../assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { TbLayoutDashboard, TbHome2 } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbHome2,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#gallery",
      icon: TbLayoutDashboard,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "PROFESSIONAL PHOTOGRAPHER",
    sub_title: "Let's savor those unforgettable moments of fun, excitement, and adventure, capturing the highs and depths of",
    firstName: "SONKO",
    LastName: "PORTRAITURE",
    btnText: "Book Me",
    image: Hero_person,
    imageObject: Hero_object,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "MY WORK PROCESS",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        Sub_title: "Mindful walking is an ancient practice that has gained popularity in recent years as a powerful tool for promoting mental and physical well-being. In our fast-paced and technology-driven world, where distractions are plentiful, the act of walking mindfully allows us to reconnect with ourselves and the present moment.",
        image: pic1,
      },
      {
        title: "kbdkjblkjb",
        Sub_title: "Mindful walking is an ancient practice that has gained popularity in receiven world, where distractions are plentiful, the act of walking mindfully allows us to reconnect with ourselves and the present moment.",
        image: pic1,
      },
      {
        title: "Gy;llndkhckjn;skjm Website",
        Sub_title: "Mindful walking is an ancient practice that has gained popularity in recent years as a powerful tool for promoting mental and physical well-being. In our fast-paced and technology-driven world, where distractions are plentiful, the act of walking mindfully allows us to reconnect with ourselves and the present moment.",
        image: pic1,
      }
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    subtitle: "LET'S GET IN TOUCH",
    contacts: [{
      text: "codeaprogram@gmail.com",
      icon: GrMail,
      link: "mailto:codeaprogram@gmail.com",
    },
    {
      text: "+91 1234 56778",
      icon: MdCall,
      link: "https://wa.me/1234567890",
    }],
    social_media: [
      {
        text: "facesono",
        icon: BsFacebook,
        link: "https://www.instagram.com/codeaprogram/",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },

      {
        text: "codeapwhatsa",
        icon: BsWhatsapp,
        link: "https://www.whatsapp.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
