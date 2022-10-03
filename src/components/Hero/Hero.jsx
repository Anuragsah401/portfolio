import React from "react";

import Typewriter from "typewriter-effect";

import { motion } from "framer-motion";

import CV from "../../assets/Files/AnuragCV.pdf";
import SocialLinks from "../UI-Elements/SocialLinks/SocialLinks";

const Hero = () => {
  return (
    <div id="hero" className="h-[100vh]">
      <motion.div
        className="max-w-[1200px] h-[100%] flex mx-auto justify-center items-center box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
          type: "spring",
        }}
      >
        <div className="flex-1">
          <h1 className="text-[4rem] text-[#ffffff] font-[600] ">Anurag Sah</h1>
          <div className="text-[20px] tracking-wider text-[#fff] leading-[1.778] mb-[1rem]">
            <Typewriter
              options={{
                strings: ["Web Developer", "Web Designer", "UI/UX Designer", "Freelancer"],
                loop: true,
                autoStart: true,
                delay: 30,
                deleteSpeed: 30,
              }}
            />
          </div>
          <p className="text-[#d9dae7] text-[18px] ">
            I have been working since 2012. I am proficient in ui design, digital marketing web
            development.
          </p>
          <a href={CV} download>
            <div className="rounded-md mt-[2rem] px-[25px] py-[15px] bg-[#4FBDBA] inline-block text-[#000000] font-medium text-[1] hover:bg-[#000000] hover:text-[#eee] transition-all ease-in-out delay-50">
              Download CV
            </div>
          </a>
        </div>
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default Hero;
