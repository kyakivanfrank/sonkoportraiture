import React, { createElement, useRef, useState } from "react";
import { content } from "../services/Content";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import paper from "../assets/images/Hero/paper.svg";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(function (response) {
        console.log('Email sent successfully!', response.status, response.text);
        setIsEmailSent(true);
        event.target.reset();
      })
      .catch(function (error) {
        console.error('Email sending failed:', error);
        toast.error('Failed to send email. Please try again.');
      });
  }

  return (
    <div id="contact">
      <img src={paper} className="md:w-[150vw] -mb-1" alt="" />
      <section className="bg-dark_primary lg:py-[7.5rem] md:py-[5rem] py-[3rem] text-white">
        <div className="container px-0 w-[90%] md:w-[80%] h-fit">
          <h4 className="subtitle font-bold text-2xl" data-aos="fade-down">
            {Contact.subtitle}
          </h4>
          <br />
          <div className="flex gap-8 md:flex-row flex-col">
            {isEmailSent && <p className="text-green-500 mb-2">Email sent successfully!</p>}
            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-up"
              className="flex-1 flex flex-col gap-3"
              aria-label="Contact Form"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="border border-slate-600 p-2 rounded"
                aria-label="Name"
              />
              <input
                type="email"
                name="user_email"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                placeholder="Email Id"
                required
                className="border border-slate-600 p-2 rounded"
                aria-label="Email"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border border-slate-600 p-2 rounded h-32"
                required
                aria-label="Message"
              ></textarea>
              <button className="px-4 py-[0.70rem] rounded-lg self-start bg-white text-dark_primary font-bold">
                Submit
              </button>
            </form>
            <div className="flex-1 flex flex-col gap-5" aria-label="Contact Information">
              {Contact.contacts.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 430}
                  className="flex items-center gap-2"
                >
                  <h4 className="text-white ">{createElement(content.icon)}</h4>
                  <a
                    className="font-Poppins"
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.text}
                  </a>
                </div>
              ))}

              {Contact.social_media.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 430}
                  className="flex items-center gap-3"
                >
                  <h4 className="text-white ">{createElement(content.icon)}</h4>
                  <a
                    className="font-Poppins"
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
