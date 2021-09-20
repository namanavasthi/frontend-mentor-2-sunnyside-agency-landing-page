import React from "react";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="absolute p-6 flex max-w-7xl w-full justify-between mx-auto">
      <h1 className="text-4xl font-barlow">sunnyside</h1>
      <Nav />
    </header>
  );
};
