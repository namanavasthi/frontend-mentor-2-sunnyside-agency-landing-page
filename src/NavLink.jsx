import React from "react";

export const NavLink = ({ linkTo, children }) => {
  return (
    <a
      href={`/${linkTo}`}
      className="focus:uppercase p-4 focus:bg-primary-yellow rounded-full focus:text-neutral-very-dark-desaturated-blue"
    >
      {children}
    </a>
  );
};
