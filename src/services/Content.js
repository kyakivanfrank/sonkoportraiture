// import images
const cleanPhoneNumber = phoneNumber => phoneNumber.replace("+", "").replace(/\s/g, "");
import Hero_person from "../assets/images/Hero/sonko_cut_out.webp";


import about_smiling from "../assets/images/Hero/aboutPics/smiling_lady.webp"
import about_wedding from "../assets/images/Hero/aboutPics/wedding.webp"
import about_beauty from "../assets/images/Hero/aboutPics/african_beauty.webp"


import threads from "../assets/images/threads.svg"

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsInstagram, BsFacebook, BsWhatsapp} from "react-icons/bs";
import { TbLayoutDashboard, TbHome2 } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

import { MdOutlinePermContactCalendar } from "react-icons/md";



const Major_Phone_Number2="+971 50 731 4559"
const Major_Phone_Number="+971 52 273 9772"

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
    btnText: "Book Us",
    image: Hero_person,
    // imageObject: Hero_object,
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

  about: {
    about_name:"sonko portraiture",
    about_title:"Dubai Unveiled: Through the Lens of ",
    about_description: "Sonko portraiture, a Ugandan photographer in Dubai, masterfully captures the city's vibrancy, blending his African roots with Dubai's dynamic energy. Through his lens, cultural narratives unfold, from serene desert landscapes to bustling streets. Sonko portraiture's photos vividly tell stories, bridging continents and connecting people through his artistry.",
    about_images:[
      {
        "imageUrl": about_beauty,
        "imageDesc": "Capturing those happy moments."
      },
      {
        "imageUrl": about_wedding,
        "imageDesc": "The Love of your life"
      },
       {
        "imageUrl": about_smiling,
        "imageDesc": "Nothing shouts louder than a great smile."
      }
    ]
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
        text: Major_Phone_Number2,
        icon: MdCall,
        link: `https://wa.me/${cleanPhoneNumber(Major_Phone_Number2)}?text=_This%20is%20an%20automatic%20message%20from%20sonkoportraiture.com_`,
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
