import React from "react";

export const ImageSection = ({ image, title, subTitle }) => {
  return (
    <section className="section-image relative">
      <img src={image.mobile} alt={image.alt} />
      <div className="absolute bottom-0 left-0 flex flex-col w-full p-5">
        <h2 className="capitalize text-3xl tracking-tight leading-9 text-center text-primary-cyan-desaturated">
          {title}
        </h2>
        <p className="text-base font-barlow tracking-tighter leading-7 text-center text-primary-cyan-desaturated py-7">
          {subTitle}
        </p>
      </div>
    </section>
  );
};
