import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { LargeButton } from "../Button";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero--left">
        <small className="">Hi my name is</small>
        <h2>Bisesh Sitaula</h2>
        <p>I'm a student who likes to design and build things for the web</p>
        <LargeButton text="Download CV" />
      </div>
      <StaticImage
        src="../../images/hero_image.svg"
        alt="person coding"
        className="hero--image"
      />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hero--image {
    max-width: 750px;
    aspect-ratio: initial;
    width: 40vw;
  }
`;
