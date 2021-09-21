import React from "react";

import { Wrapper } from "./Wrapper";

import Bottle from "./images/mobile/image-gallery-milkbottles.jpg";
import BottleDesktop from "./images/desktop/image-gallery-milkbottles.jpg";

import Orange from "./images/mobile/image-gallery-orange.jpg";
import OrangeDesktop from "./images/desktop/image-gallery-orange.jpg";

import Cone from "./images/mobile/image-gallery-cone.jpg";
import ConeDesktop from "./images/desktop/image-gallery-cone.jpg";

import Sugar from "./images/mobile/image-gallery-sugar-cubes.jpg";
import SugarDesktop from "./images/desktop/image-gallery-sugar-cubes.jpg";

export const Gallery = ({ isDesktop }) => {
  const BottleUrl = isDesktop ? BottleDesktop : Bottle;
  const OrangeUrl = isDesktop ? OrangeDesktop : Orange;
  const ConeUrl = isDesktop ? ConeDesktop : Cone;
  const SugarUrl = isDesktop ? SugarDesktop : Sugar;

  return (
    <section className="gallery ">
      <Wrapper className="flex flex-wrap">
        <img src={BottleUrl} alt="milk bottles" className="w-1/2 lg:w-1/4" />
        <img src={OrangeUrl} alt="orange" className="w-1/2 lg:w-1/4" />
        <img src={ConeUrl} alt="cone" className="w-1/2 lg:w-1/4" />
        <img src={SugarUrl} alt="sugar cubes" className="w-1/2 lg:w-1/4" />
      </Wrapper>
    </section>
  );
};
