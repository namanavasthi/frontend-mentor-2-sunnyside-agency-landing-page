import React from "react";

import { Wrapper } from "./Wrapper";

import ArrowDown from "./images/icon-arrow-down.svg";

export const HeroComponent = ({ HeroUrl }) => {
  return (
    <section className="hero-section relative bg-primary-light-blue">
      <Wrapper className="flex justify-between items-center">
        <img src={HeroUrl} alt="hero" className="w-full" />
        <h1 className="text-center tracking-widest leading-10 w-4/6 uppercase text-4xl text-neutral-white absolute transform -translate-y-2/4 -translate-x-2/4 z-0 left-2/4 top-1/3 lg:text-6xl lg:leading-normal lg:top-1/4">
          we are creatives
        </h1>
        <img
          src={ArrowDown}
          alt="arrow down"
          className="absolute transform -translate-y-2/4 -translate-x-2/4 z-10 left-2/4 top-2/3 lg:top-2/4"
        />
      </Wrapper>
    </section>
  );
};
