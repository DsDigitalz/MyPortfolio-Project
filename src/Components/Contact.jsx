import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion"; // Import motion

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dohjj5e",
        "template_c8dgvxa",
        form.current,
        "mh5xhlhYMsRLqLOYR"
      )
      .then(() => {
        alert("Messsage sent successfully");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message, please try again", error.text);
      });
  };

  // Variants for a staggered fade-in for the main content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for individual items within the contact info section
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="w-100% pt-10  flex flex-col justify-center bg-white relative lg:flex lg:flex-1"
      id="con"
    >
      <div className="mt-10">
        <div className="">
          {/* Animated heading */}
          <motion.h1
            className="text-[35px] font-semibold sm:text-[40px] md:text-[45px] text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Contact <span className="text-sky-300">Me</span>
          </motion.h1>

          {/* Animate the main content container */}
          <motion.div
            className=" bg-white shadow-2xl p-10 lg:px-30 shadow-sky-200 lg:flex lg:justify-center gap-[100px] lg:mt-10"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Animate the left side (contact info) */}
            <motion.div
              className="lg:w-[50%] xl:w-[50%] 2xl:w-[40%] "
              variants={itemVariants}
            >
              <div className="lg:w-[70%]">
                <h1 className="font-semibold text-2xl mt-5 mb-5 lg:mt-0">
                  Lets's Connect
                </h1>
                <p>
                  Have a project in mind or want to discuss potential
                  opportunities? I'd love to hear from you!
                </p>
              </div>
              <div className="flex flex-col mt-10 gap-5">
                <motion.div className="flex gap-3" variants={itemVariants}>
                  <MdEmail className="mt-[2px] text-xl" />
                  <div>
                    <h1 className="text-zinc-500 text-[14px]">Email: </h1>
                    <p className="font-semibold">sanudaniel46@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-3" variants={itemVariants}>
                  <FaPhoneAlt className="mt-[2px]" />
                  <div>
                    <h1 className="text-zinc-500 text-[14px]">Phone No:</h1>
                    <p className="font-semibold">+2349137846680</p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-3" variants={itemVariants}>
                  <IoLocationSharp className="mt-[2px] text-xl" />
                  <div>
                    <h1 className="text-zinc-500 text-[14px]">Location:</h1>
                    <p className="font-semibold">Lagos, Nigeria</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="flex gap-7 pt-[40px] text-xl"
                variants={itemVariants}
              >
                <a href="https://www.facebook.com/daniel.sanu.16/">
                  <FaFacebook className="cursor-pointer active:text-[#02BDEA]" />
                </a>
                <a href="https://x.com/daniel_san4975">
                  <BsTwitterX className="cursor-pointer active:text-[#02BDEA]" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-sanu-b89298374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <ImLinkedin className="cursor-pointer active:text-[#02BDEA]" />
                </a>
                <a href="https://www.instagram.com/danielsanu35/?hl=en">
                  <FaInstagram className="cursor-pointer active:text-[#02BDEA]" />
                </a>
                <a href="https://github.com/DsDigitalz">
                  <FaGithub className="cursor-pointer active:text-[#02BDEA]" />
                </a>
              </motion.div>
            </motion.div>

            {/* Animate the form on the right side */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="mt-15 flex flex-col border-zinc-400 gap-3 sm:w-[50%] md:w-[70%] lg:w-[50%] lg:mt-0 xl:w-[30%] 2xl:w-[20%] "
              variants={itemVariants}
            >
              <label htmlFor="">
                Name <span className="text-sky-300">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
                required
              />
              <label htmlFor="">
                Email <span className="text-sky-300">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
                required
              />
              <label htmlFor="">Subject </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1"
                required
              />
              <label htmlFor="">Message </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                className="border-b rounded border-zinc-300 outline-sky-200 px-3 py-1 resize-none"
                required
              ></textarea>
              <motion.button
                className="bg-[#02BDEA] p-3 text-white font-semibold gap-3 flex justify-center rounded-full w-[50%] mt-10 cursor-pointer active:bg-[#50cbea]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                Submit
                <BsSend className="text-[24px] bg-sky-300 rounded-full p-1" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
