import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  const [colorChangeIndex, setColorChangeIndex] = React.useState();

  const linksData = [
    { icon: faFacebookF, link: "" },
    { icon: faInstagram, link: "" },
    { icon: faTwitter, link: "" },
    { icon: faLinkedin, link: "" },
  ];

  return (
    <div className="flex-1 flex justify-end">
      <ul>
        {linksData.map((linkData, i) => {
          return (
            <a href={linkData.link} key={i}>
              <li
                onMouseOver={() => setColorChangeIndex(i)}
                onMouseOut={() => setColorChangeIndex(null)}
                className="mb-[1rem] border border-[#6a6d8d] rounded hover:rounded-[50%] hover:border-[#4FBDBA] px-[11px] py-[7px] text-center transition-all ease delay-10"
              >
                <FontAwesomeIcon
                  className={`${
                    colorChangeIndex === i ? "text-[#4FBDBA]" : "text-[#6a6d8d]"
                  } transition-all ease delay-10`}
                  icon={linkData.icon}
                  size="1x"
                />
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
