import React from "react";

import Bottle from "./images/mobile/image-gallery-milkbottles.jpg";
import Orange from "./images/mobile/image-gallery-orange.jpg";
import Cone from "./images/mobile/image-gallery-cone.jpg";
import Sugar from "./images/mobile/image-gallery-sugar-cubes.jpg";

export const Gallery = () => {
  return (
    <section className="gallery flex flex-wrap">
      <img src={Bottle} alt="milk bottles" className="w-1/2" />
      <img src={Orange} alt="orange" className="w-1/2" />
      <img src={Cone} alt="cone" className="w-1/2" />
      <img src={Sugar} alt="sugar cubes" className="w-1/2" />
    </section>
  );
};
