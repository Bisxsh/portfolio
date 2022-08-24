import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { LargeButton } from "../Button";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { EnterFromLeft, EnterFromRight } from "../MotionProp";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Hero = () => {
  if (typeof window === `undefined`) {
    return <></>;
  }
  const { height, width } = useWindowDimensions();

  let delaybase: number = (width || 0) < 600 ? 0.5 : 1;

  return (
    <HeroContainer>
      <motion.div
        className="hero--left"
        {...EnterFromLeft({ delay: delaybase })}
      >
        <Greeting>Hi there 👋. My name is</Greeting>
        <Name>Bisesh Sitaula.</Name>
        <SubText>
          I'm a student who likes to design and build things for the web.
        </SubText>
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: delaybase + 1,
            default: {
              duration: 0.7,
            },
          }}
        >
          <LargeButton text="Download CV" setClassName="hero--button" />
        </motion.div>
      </motion.div>

      <motion.div {...EnterFromRight({ delay: delaybase })}>
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <StaticImage
            src="../../images/hero_image.svg"
            alt="person coding"
            className="hero--image"
          />
        </Tilt>
      </motion.div>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    margin-top: 10vh;
  }

  .hero--left {
    margin-left: 1vw;
  }

  .hero--image {
    max-width: 750px;
    min-width: 400px;
    aspect-ratio: initial;
    width: 40vw;
  }

  @media screen and (min-width: 2600px) {
    .hero--button {
      width: 800px;
      padding: 50px;
      border-radius: 40px;
      font-size: 40px;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;

    .hero--image {
      margin-top: 5vh;
    }
  }
`;

const Greeting = styled.p`
  font-size: var(--font-xl);
  color: #000000;
  margin: 0;
`;

const Name = styled.p`
  font-size: var(--font-section-heading);
  color: var(--color-primary);
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
  @media screen and (min-width: 2600px) {
    font-size: 50px;
    max-width: 1000px;
  }
`;
