// import images
import Hero_person from "../assets/images/Hero/hero-sonko.png";
import Hero_object from "../assets/images/Hero/SonyA7sII1.png";

import pic1 from "../assets/images/Hero/aboutPics/pic1.jpeg";
import person_project from "../assets/images/Hero/aboutImage.webp";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
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
    sub_title:
      "Let's savor those unforgettable moments of fun, excitement, and adventure, capturing the highs and depths of",
    firstName: "SONKO",
    LastName: "PORTRAITURE",
    btnText: "Book Me",
    image: Hero_person,
    imageObject: Hero_object,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experience in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked on in my career",
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
        Sub_title:
          "Mindful walking is an ancient practice that has gained popularity in recent years as a powerful tool for promoting mental and physical well-being. In our fast-paced and technology-driven world, where distractions are plentiful, the act of walking mindfully allows us to reconnect with ourselves and the present moment.",
        image: pic1,
      },
      {
        title: "kbdkjblkjb",
        Sub_title:
          "Mindful walking is an ancient practice that has gained popularity in recent years. In our fast-paced and technology-driven world, where distractions are plentiful, the act of walking mindfully allows us to reconnect with ourselves and the present moment.",
        image: pic1,
      },
      {
        title: "Gy;llndkhckjn;skjm Website",
        Sub_title:
          "Mindful walking is an ancient practice that has gained popularity in recent years as a powerful tool for promoting mental and physical well-being. In our fast-paced and technology-driven world, where distractions are plentiful, the act of walking mindfully allows us to reconnect with ourselves and the present moment.",
        image: pic1,
      },
    ],
  },
  Contact: {
    subtitle: "LET'S GET IN TOUCH",
    contacts: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
    ],
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
