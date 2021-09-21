import React from "react";

import { Wrapper } from "./Wrapper";

import Emily from "./images/image-emily.jpg";
import Jennie from "./images/image-jennie.jpg";
import Thomas from "./images/image-thomas.jpg";

const data = {
  title: "client testimonials",
  clients: [
    {
      image: {
        src: Emily,
        alt: "Emily R.",
      },
      message:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      title: "Marketing Director",
    },
    {
      image: {
        src: Thomas,
        alt: "Thomas S.",
      },
      message:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      title: "Chief Operating Officer",
    },
    {
      image: {
        src: Jennie,
        alt: "Jennie F.",
      },
      message:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F",
      title: "Business Owner",
    },
  ],
};

const Client = ({ data }) => {
  return (
    <>
      <img src={data.image.src} alt={data.image.alt} className="w-16 rounded-full" />
      <p className="font-barlow text-lg tracking-tight leading-8 text-neutral-very-dark-grayish-blue py-7 px-3">
        {data.message}
      </p>
      <div>
        <h3 className="text-lg tracking-tight leading-6 text-neutral-very-dark-desaturated-blue">{data.name}</h3>
        <h4 className="font-barlow text-sm leading-6 tracking-tighter text-neutral-grayish-blue pt-1">{data.title}</h4>
      </div>
    </>
  );
};

export const ClientTestimonials = () => {
  return (
    <section className="section-testimonials py-10 text-center lg:py-20">
      <Wrapper className="flex flex-col items-center">
        <h2 className="text-base tracking-widest uppercase text-neutral-grayish-blue pb-5">{data.title}</h2>
        <ul className="flex flex-col lg:flex-row">
          {data.clients.map((client, i) => (
            <li key={i} className="flex flex-col items-center px-5 py-6">
              <Client data={client} />
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};
