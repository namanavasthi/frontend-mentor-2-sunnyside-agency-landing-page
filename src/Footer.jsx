import React from "react";

import { Wrapper } from "./Wrapper";

import { ReactComponent as Logo } from "./images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

const ListLink = ({ to, children }) => {
  return (
    <li>
      <a className="focus:text-neutral-white hover:text-neutral-white" href={to}>
        {children}
      </a>
    </li>
  );
};

const Socials = () => {
  return (
    <ul className="flex flex-row justify-center text-primary-cyan-dark">
      <li className="p-4">
        <a className="focus:text-neutral-white hover:text-neutral-white" href="/facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li className="p-4">
        <a className="focus:text-neutral-white hover:text-neutral-white" href="/instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li className="p-4">
        <a className="focus:text-neutral-white hover:text-neutral-white" href="/twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li className="p-4">
        <a className="focus:text-neutral-white hover:text-neutral-white" href="/pinster">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </li>
    </ul>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary-cyan-moderate py-20 px-5 w-full">
      <Wrapper className="flex flex-col items-center">
        <Logo className="text-primary-cyan-dark fill-current" />
        <ul className="flex flex-row justify-around lg:w-1/4 w-full text-md tracking-tighter leading-6 text-primary-cyan-less-dark font-barlow py-10">
          <ListLink to="/about">About</ListLink>
          <ListLink to="/services">Services</ListLink>
          <ListLink to="/projects">Projects</ListLink>
        </ul>
        <Socials />
      </Wrapper>
    </footer>
  );
};
