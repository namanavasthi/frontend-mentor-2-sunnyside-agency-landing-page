import React from "react";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="absolute p-6 flex max-w-7xl w-full justify-between mx-auto items-center">
      <h1 className="text-4xl font-barlow text-neutral-white">sunnyside</h1>
      <Nav />
    </header>
  );
};
