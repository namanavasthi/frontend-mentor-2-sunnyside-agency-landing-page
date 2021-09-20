import React, { useState } from "react";

import { NavLink } from "./NavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-barlow text-xl ">
      <button className="focus:text-neutral-icon-focus" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`flex flex-col justify-center w-full p-5 pt-3 absolute right-0 ${!isOpen ? "hidden" : ""}`}>
        <div className="w-5 h-5 overflow-hidden inline-block self-end">
          <div className="h-9 w-9 bg-blue-500 rotate-45 transform origin-bottom-left -translate-y-4"></div>
        </div>

        <div className="flex flex-col bg-blue-500 w-full text-center p-5 text-neutral-dark-grayish-blue">
          <NavLink linkTo="about">About</NavLink>
          <NavLink linkTo="services">Services</NavLink>
          <NavLink linkTo="projects">Projects</NavLink>
          <NavLink linkTo="contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};
