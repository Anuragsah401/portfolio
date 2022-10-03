import React from "react";

import {
  faHome,
  faAddressCard,
  faLaptopCode,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks/NavLinks";
import ToggleBtn from "../UI-Elements/ToggleBtn/ToggleBtn";

const Navbar = () => {
  const items = [
    {
      name: "Home",
      icon: faHome,
      to: "hero",
    },
    {
      name: "About",
      icon: faAddressCard,
      to: "about",
    },
    {
      name: "Resume",
      icon: faFile,
      to: "resume",
    },
    {
      name: "Work",
      icon: faLaptopCode,
      to: "work",
    },
    {
      name: "Contact",
      icon: faEnvelope,
      to: "footer",
    },
  ];
  return (
    <div className="max-w-[200px] backdrop-filter-[50px] backdrop-blur-[3px] backdrop-brightness-90 min-h-[100vh] text-center bg-[#15193100] fixed flex flex-col justify-center">
      <div className=" flex-1">
        <div className="bg-[#234042] px-7 py-3">
          <h1 className="font-semibold text-6xl text-[#AEFEFF]">A</h1>
        </div>
      </div>

      <div className="flex-1">
        <ul>
          {items.map((item, i) => (
            <NavLinks item={item} key={i} />
          ))}
          <ToggleBtn />
        </ul>
      </div>

      <div className="text-[#e2e1f1] text-center flex-1">
        <p className="-rotate-90">@Anurag</p>
      </div>
    </div>
  );
};

export default Navbar;
