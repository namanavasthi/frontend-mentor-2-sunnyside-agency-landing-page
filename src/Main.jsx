import React from "react";

import { Section } from "./Section";
import { Article } from "./Article";
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { Link } from "./Link";
import { ImageSection } from "./ImageSection";
import { ClientTestimonials } from "./ClientTestimonials";
import { Gallery } from "./Gallery";
import { Wrapper } from "./Wrapper";
import { HeroComponent } from "./Hero";

import Hero from "./images/mobile/image-header.jpg";
import HeroDesktop from "./images/desktop/image-header.jpg";

import Egg from "./images/mobile/image-transform.jpg";
import EggDesktop from "./images/desktop/image-transform.jpg";

import Glass from "./images/mobile/image-stand-out.jpg";
import GlassDesktop from "./images/desktop/image-stand-out.jpg";

import GraphicDesign from "./images/mobile/image-graphic-design.jpg";
import GraphicDesignDesktop from "./images/desktop/image-graphic-design.jpg";

import Photography from "./images/mobile/image-photography.jpg";
import PhotographyDesktop from "./images/desktop/image-photography.jpg";

export const Main = ({ windowWidth }) => {
  const isDesktop = windowWidth >= 1024;

  const HeroUrl = isDesktop ? HeroDesktop : Hero;
  const EggUrl = isDesktop ? EggDesktop : Egg;
  const GlassUrl = isDesktop ? GlassDesktop : Glass;
  const GraphicDesignUrl = isDesktop ? GraphicDesignDesktop : GraphicDesign;
  const PhotographyUrl = isDesktop ? PhotographyDesktop : Photography;

  return (
    <main className="w-full">
      <HeroComponent HeroUrl={HeroUrl} />
      <Section index="1">
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
        <img src={EggUrl} alt="transform your brand" className="w-full lg:w-1/2" />
      </Section>
      <Section index="2">
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
        <img src={GlassUrl} alt="transform your brand" className="w-full lg:w-1/2" />
      </Section>
      <Wrapper className="flex flex-col md:flex-row">
        <ImageSection
          image={{ src: GraphicDesignUrl, alt: "graphic design" }}
          title="graphic design"
          subTitle="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
        <ImageSection
          image={{ src: PhotographyUrl, alt: "photography" }}
          title="photography"
          subTitle="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </Wrapper>
      <ClientTestimonials />
      <Gallery isDesktop={isDesktop} />
    </main>
  );
};
