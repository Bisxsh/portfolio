import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { LargeButton } from "../Button";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero--left">
        <Greeting>Hi there 👋. My name is</Greeting>
        <Name>Bisesh Sitaula</Name>
        <SubText>
          I'm a student who likes to design and build things for the web
        </SubText>
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
  /* margin-top: 160px; */
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hero--image {
    max-width: 750px;
    aspect-ratio: initial;
    width: 40vw;
  }
`;

const Greeting = styled.p`
  font-size: 20px;
  color: #000000;
  margin: 0;
`;

const Name = styled.p`
  font-size: 50px;
  color: var(--color-secondary);
`;

const SubText = styled.p`
  font-weight: 400;
  font-size: 24px;
  max-width: 400px;
  color: #000000;
`;
