import React from "react";
import { Link } from "react-scroll";

const HireMe = () => {
  return (
    <div className="py-[5rem] text-center backdrop-filter-[50px] backdrop-blur-[3px] backdrop-brightness-90 ">
      <h1 className="mb-[2rem] text-[36px] font-[700] text-[white]">
        Interested in working with me?
      </h1>
      <Link to="footer" spy={true} smooth={true} duration={1500}>
        <div className="py-[0.8rem] px-[2rem] cursor-pointer text-[#eee] border-2 border-[#AEFEFF] inline-block rounded-[5px] text-[17px] hover:text-[#AEFEFF]">
          Hire Me
        </div>
      </Link>
    </div>
  );
};

export default HireMe;
