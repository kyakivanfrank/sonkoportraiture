// import images
import Hero_person from "../assets/images/Hero/hero-sonko.png";
import Hero_object from "../assets/images/Hero/SonyA7sII1.png";

import pic2 from "../assets/images/Hero/aboutPics/pic1.jpeg"
import pic1 from "../assets/images/Hero/aboutPics/pic1.jfif"
import pic3 from "../assets/images/Hero/aboutPics/baby_showers.webp"
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
        title: "Photography Journey",
        sub_title: "Capture the essence of life through the lens. Explore the world of photography and unleash your creativity. From landscapes to portraits, every click tells a unique story.",
        image: pic1
      },
      {
        title: "The Art of Visual Storytelling",
        sub_title: "Photography is a language that speaks directly to the heart. With each frame, you have the power to evoke emotions, freeze moments, and preserve memories for a lifetime.",
        image: pic2
      },
      {
        title: "Through the Lens of Imagination",
        sub_title: "Step into a world of infinite possibilities. Photography is not just about capturing what's in front of you; it's about seeing beyond the ordinary and embracing the extraordinary.",
        image: pic3
      }
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
