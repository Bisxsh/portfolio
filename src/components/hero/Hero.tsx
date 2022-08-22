import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { LargeButton } from "../Button";

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <Greeting>Hi there 👋. My name is</Greeting>
        <Name>Bisesh Sitaula.</Name>
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
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hero--image {
    max-width: 750px;
    min-width: 400px;
    aspect-ratio: initial;
    width: 40vw;

    @media screen and (max-width: 1024px) {
      margin-top: 10vh;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Greeting = styled.p`
  font-size: var(--font-xl);
  color: #000000;
  margin: 0;
`;

const Name = styled.p`
  font-size: 50px;
  color: var(--color-primary);

  @media screen and (min-width: 1600px) {
    font-size: 60px;
  }
  @media screen and (min-width: 2000px) {
    font-size: 70px;
  }
`;

const SubText = styled.p`
  font-size: 24px;
  max-width: 400px;
  color: #000000;

  @media screen and (min-width: 1600px) {
    font-size: 36px;
    max-width: 600px;
  }
  @media screen and (min-width: 2000px) {
    font-size: 40px;
    max-width: 700px;
  }
`;
