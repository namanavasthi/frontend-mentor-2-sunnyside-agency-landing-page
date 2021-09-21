import React from "react";
import { Nav } from "./Nav";

import { ReactComponent as Logo } from "./images/logo.svg";

export const Header = () => {
  return (
    <header className="absolute p-6 flex max-w-7xl w-full justify-between mx-auto items-center z-10">
      <Logo className="text-neutral-white fill-current" alt="logo" />
      <Nav />
    </header>
  );
};
