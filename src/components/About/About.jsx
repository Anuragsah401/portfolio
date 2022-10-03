import React from "react";

import HeadTitle from "../UI-Elements/HeadTitle/HeadTitle";
import img from "../../assets/images/pic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faUserTie,
  faEnvelope,
  faBirthdayCake,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import Contribution from "./Contribution/Contribution";

const About = () => {
  const detail = [
    {
      logo: faUserTie,
      detail: "Anurag Sah",
    },
    {
      logo: faSkype,
      detail: "chat@anurag",
    },
    {
      logo: faEnvelope,
      detail: "chat@example.com",
    },
    {
      logo: faLocationArrow,
      detail: "Kathmandu, Nepal",
    },
    {
      logo: faBirthdayCake,
      detail: "07 Nov, 1998",
    },
    {
      logo: faWhatsapp,
      detail: "+977-9813950227",
    },
  ];

  return (
    <div id="about" className="bg-[rgb(255,255,255)] py-[8rem]">
      <div className="max-w-[1200px] m-auto">
        <div className="flex">
          <div className="flex-1 max-w-md max-h-[110vh] py-[20px] px-[25px]">
            <img
              className="w-[100%] h-[100%] object-contain"
              src={img}
              alt=""
              data-aos="fade-left"
            />
          </div>
          <div className="flex-1 px-[1.5rem]">
            <div className="mb-[2rem]" data-aos="fade-right">
              <HeadTitle title="About Me" subTitle="Creative Designer" />
            </div>
            <div>
              <p className="leading-[1.8rem] text-[1.1rem]" data-aos="fade-up-left">
                I am dedicated his life to learning what makes humans tick. He studies, researches
                and reads everything hecan, and shares his findings with his clients. His philosophy
                is to learn, test, analyse, improve and re-test. His motto is stay agile. I'm a
                Freelancer Front-end Developer with over 3 years of experience. I'm from San
                Francisco.
                <br />I code and create web elements for amazing people around the world. I like
                work with new people. New people new Experiences.
              </p>
            </div>
            <div className="flex mt-[1rem]">
              <div className="flex-1">
                <ul className="">
                  {detail.slice(0, 3).map((item, index) => {
                    return (
                      <li key={index} className="flex items-center text-center">
                        <FontAwesomeIcon icon={item.logo} size="1x" color="#072227" />
                        <div className="text-center">
                          <p className="text-lg ml-[20px]">{item.detail}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex-1">
                <ul>
                  {detail.slice(3, 6).map((item, index) => {
                    return (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon icon={item.logo} size="1x" color="#072227" />
                        <p className="text-lg ml-[20px]">{item.detail}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4rem]">
          <Contribution />
        </div>
      </div>
    </div>
  );
};

export default About;
