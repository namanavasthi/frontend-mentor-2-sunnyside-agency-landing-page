import React, { useState } from "react";

import { NavLink } from "./NavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-barlow text-xl">
      <button
        className="text-neutral-white focus:text-neutral-icon-focus"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`flex flex-col justify-center w-full p-5 pt-3 absolute right-0 ${!isOpen ? "hidden" : ""}`}>
        <div className="w-5 h-5 self-end overflow-hidden">
          <div className="h-9 w-9 bg-neutral-white rotate-45 transform origin-bottom-left -translate-y-4"></div>
        </div>

        <div className="flex flex-col bg-neutral-white w-full text-center p-5 text-neutral-dark-grayish-blue">
          <NavLink linkTo="about">About</NavLink>
          <NavLink linkTo="services">Services</NavLink>
          <NavLink linkTo="projects">Projects</NavLink>
          <NavLink linkTo="contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};
