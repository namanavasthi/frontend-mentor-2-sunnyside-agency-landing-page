import React, { useEffect, useState } from "react";

import { NavLink } from "./NavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Nav = ({ windowWidth }) => {
  const isDesktop = windowWidth >= 1024;

  const [isOpen, setIsOpen] = useState(isDesktop ? true : false);

  useEffect(() => {
    isDesktop ? setIsOpen(true) : setIsOpen(false);
  }, [isDesktop]);

  return (
    <nav className="font-barlow text-xl">
      <button
        className={`text-neutral-white focus:text-neutral-icon-focus ${isDesktop ? "hidden" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`flex flex-col justify-center w-full p-5 pt-3 absolute lg:relative right-0 ${
          !isOpen ? "hidden" : ""
        }`}
      >
        <div className={`w-5 h-5 self-end overflow-hidden ${isDesktop ? "hidden" : ""}`}>
          <div className="h-9 w-9 bg-neutral-white rotate-45 transform origin-bottom-left -translate-y-4"></div>
        </div>

        <div className="flex flex-col bg-neutral-white w-full text-center p-5 text-neutral-dark-grayish-blue lg:bg-transparent lg:flex-row lg:p-0 lg:text-neutral-white">
          <NavLink linkTo="about">About</NavLink>
          <NavLink linkTo="services">Services</NavLink>
          <NavLink linkTo="projects">Projects</NavLink>
          <NavLink
            linkTo="contact"
            className="bg-primary-yellow lg:bg-neutral-white text-neutral-very-dark-desaturated-blue"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
