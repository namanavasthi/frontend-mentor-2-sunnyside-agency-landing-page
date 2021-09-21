import React from "react";

import { Wrapper } from "./Wrapper";

import Bottle from "./images/mobile/image-gallery-milkbottles.jpg";
import Orange from "./images/mobile/image-gallery-orange.jpg";
import Cone from "./images/mobile/image-gallery-cone.jpg";
import Sugar from "./images/mobile/image-gallery-sugar-cubes.jpg";

export const Gallery = () => {
  return (
    <section className="gallery ">
      <Wrapper className="flex flex-wrap">
        <img src={Bottle} alt="milk bottles" className="w-1/2 lg:w-1/4" />
        <img src={Orange} alt="orange" className="w-1/2 lg:w-1/4" />
        <img src={Cone} alt="cone" className="w-1/2 lg:w-1/4" />
        <img src={Sugar} alt="sugar cubes" className="w-1/2 lg:w-1/4" />
      </Wrapper>
    </section>
  );
};
