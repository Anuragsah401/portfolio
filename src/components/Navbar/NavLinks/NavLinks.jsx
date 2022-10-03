import React from "react";
import ReactTooltip from "react-tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const NavLinks = (props) => {
  return (
    <>
      <li className="p-[20px]">
        <Link
          data-tip
          data-for={props.item.name}
          to={props.item.to}
          spy={true}
          smooth={true}
          duration={1500}
        >
          {" "}
          <FontAwesomeIcon
            className={`hover:text-[#4FBDBA] text-[#eee] cursor-pointer active-icon-color`}
            icon={props.item.icon}
            size="lg"
          />
        </Link>
      </li>

      <ReactTooltip id={props.item.name} place="bottom" type="light" effect="float">
        {props.item.name}
      </ReactTooltip>
    </>
  );
};

export default NavLinks;
