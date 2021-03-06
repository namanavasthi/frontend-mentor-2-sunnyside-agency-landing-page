import React from "react";

import { Wrapper } from "./Wrapper";

export const ImageSection = ({ image, title, subTitle }) => {
  return (
    <section className="section-image relative">
      <Wrapper>
        <img src={image.src} alt={image.alt} className="w-full" />
        <div className="absolute bottom-0 left-0 flex flex-col w-full p-5">
          <h2 className="capitalize text-3xl tracking-tight leading-9 text-center text-primary-cyan-desaturated">
            {title}
          </h2>
          <p className="text-base font-barlow tracking-tighter leading-7 text-center text-primary-cyan-desaturated py-7 lg:px-36">
            {subTitle}
          </p>
        </div>
      </Wrapper>
    </section>
  );
};
