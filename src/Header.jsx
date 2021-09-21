import React from "react";
import { Nav } from "./Nav";
import { Wrapper } from "./Wrapper";

import { ReactComponent as Logo } from "./images/logo.svg";

export const Header = ({ windowWidth }) => {
  return (
    <header className="absolute p-6 w-full z-10 bg-primary-light-blue">
      <Wrapper className="flex justify-between items-center">
        <Logo className="text-neutral-white fill-current" alt="logo" />
        <Nav windowWidth={windowWidth} />
      </Wrapper>
    </header>
  );
};
