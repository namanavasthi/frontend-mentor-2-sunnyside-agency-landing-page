import React from "react";

import { Section } from "./Section";
import { Article } from "./Article";
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { Link } from "./Link";
import { ImageSection } from "./ImageSection";
import { ClientTestimonials } from "./ClientTestimonials";
import { Gallery } from "./Gallery";

import Hero from "./images/mobile/image-header.jpg";
import ArrowDown from "./images/icon-arrow-down.svg";

import Egg from "./images/mobile/image-transform.jpg";
import Glass from "./images/mobile/image-stand-out.jpg";
import GraphicDesign from "./images/mobile/image-graphic-design.jpg";
import Photography from "./images/mobile/image-photography.jpg";

export const Main = () => {
  return (
    <main>
      <section className="hero-section relative">
        <img src={Hero} alt="hero" />
        <h1 className="text-center tracking-widest leading-10 w-4/6 uppercase text-4xl text-neutral-white absolute transform -translate-y-2/4 -translate-x-2/4 z-10 left-2/4 top-1/3">
          we are creatives
        </h1>
        <img
          src={ArrowDown}
          alt="arrow down"
          className="absolute transform -translate-y-2/4 -translate-x-2/4 z-10 left-2/4 top-2/3"
        />
      </section>
      <Section>
        <Article>
          <Title>Transform your brand</Title>
          <SubTitle>
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </SubTitle>
          <Link to="/learn-more" highlight="yellow">
            learn more
          </Link>
        </Article>
        <img src={Egg} alt="transform your brand" />
      </Section>
      <Section>
        <Article>
          <Title>Stand out to the right audience</Title>
          <SubTitle>
            Using a collaborative formula of designers, researchers, photgraphers, videographers, and copywriters, we'll
            build and extend your brand in digital places.
          </SubTitle>
          <Link to="/learn-more" highlight="red">
            learn more
          </Link>
        </Article>
        <img src={Glass} alt="transform your brand" />
      </Section>
      <ImageSection
        image={{ mobile: GraphicDesign, alt: "graphic design" }}
        title="graphic design"
        subTitle="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <ImageSection
        image={{ mobile: Photography, alt: "photography" }}
        title="photography"
        subTitle="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
      <ClientTestimonials />
      <Gallery />
    </main>
  );
};
