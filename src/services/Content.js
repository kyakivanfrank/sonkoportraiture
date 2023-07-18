// import images
const cleanPhoneNumber = phoneNumber => phoneNumber.replace("+", "").replace(/\s/g, "");
import Hero_person from "../assets/images/Hero/hero-sonko.png";
import Hero_object from "../assets/images/Hero/SonyA7sII1.png";

import pic2 from "../assets/images/Hero/aboutPics/pic1.jpeg"
import pic1 from "../assets/images/Hero/aboutPics/pic1.jfif"
import pic3 from "../assets/images/Hero/aboutPics/baby_showers.webp"
import person_project from "../assets/images/Hero/aboutImage.webp";
import threads from "../assets/images/threads.svg"

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { TbLayoutDashboard, TbHome2 } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

import { MdOutlinePermContactCalendar } from "react-icons/md";



const Major_Phone_Number="+971 50 731 4559"

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
    title: "SONKO PORTRAITURE",
    sub_title:
      "Let's savor those unforgettable moments of fun, excitement, and adventure, capturing the highs and depths of",
    firstName: "PROFESSIONAL",
    LastName: "PHOTOGRAPHER",
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
        text: "sonkohenry94@gmail.com",
        icon: GrMail,
        link: "mailto:sonkohenry94@gmail.com",
        // link: "mailto:info@sonkoportraiture.com",
      },
      {
        text: Major_Phone_Number,
        icon: MdCall,
        link: `https://wa.me/${cleanPhoneNumber(Major_Phone_Number)}?text=_This%20is%20an%20automatic%20message%20from%20sonkoportraiture.com_`,
      },
    ],
    social_media: [
      {
        text: "sonko portraiture",
        icon: BsFacebook,
        link: "https://www.facebook.com/Microsonko/",
      },
      {
        text: "sonko_portraiture",
        icon: BsInstagram,
        link: "https://www.instagram.com/sonko_portraiture/",
      },
      // {
      //   text: "codeaprogram",
      //   icon: threads,
      //   link: "https://www.instagram.com/codeaprogram/",
      // },
      {
        text: Major_Phone_Number,
        icon: BsWhatsapp,
        link: `https://wa.me/${cleanPhoneNumber(Major_Phone_Number)}?text=_This%20is%20an%20automatic%20message%20from%20sonkoportraiture.com_`,
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
