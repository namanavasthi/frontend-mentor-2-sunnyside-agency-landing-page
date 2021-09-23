import React from "react";

export const NavLink = ({ linkTo, children, className }) => {
  return (
    <a
      href={`/${linkTo}`}
      className={`focus:uppercase p-4 focus:bg-primary-yellow rounded-full focus:text-neutral-very-dark-desaturated-blue lg:border-transparent lg:focus:bg-opacity-25 lg:focus:bg-neutral-white lg:focus:text-neutral-white hover:uppercase hover:bg-primary-yellow hover:text-neutral-very-dark-desaturated-blue lg:hover:bg-opacity-25 lg:hover:bg-neutral-white lg:hover:text-neutral-white lg:px-10 ${className}`}
    >
      {children}
    </a>
  );
};
