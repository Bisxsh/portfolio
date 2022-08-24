import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../heading";
import Experience from "./components/Experience";
import { TagSphereComponent } from "./components/TagSphereComponent";
import { motion } from "framer-motion";
import { EnterWithFade } from "../MotionProp";
import ErrorBoundary from "./components/ErrorBoundary";

const About = () => {
  return (
    <>
      <Heading text="About Me" left={false} />
      <AboutWrapper>
        <AboutText>
          <motion.p {...EnterWithFade({})}>
            Hey! My name is Bisesh and I am currently a student at the
            University of Bath. I love designing and creating for the web, which
            is why I'm trying to learn as much about it as I can.
          </motion.p>
          <motion.p {...EnterWithFade({})}>
            Outside of coding (and learning to code), you’ll find me playing
            basketball, playing guitar or powering through my ever-growing
            Netflix list.
          </motion.p>
        </AboutText>

        <motion.div {...EnterWithFade({})}>
          <ErrorBoundary>
            <TagSphereComponent />
          </ErrorBoundary>
        </motion.div>
      </AboutWrapper>

      <Heading text="Experience" left={true} />
      <Experience
        heading="Junior Software Developer @ Shmeeb Inc."
        date="Dec 2021 - July 2022"
        technologies="Java, Git, Gradle, Maven"
        description={[
          "Created and maintained Java plugins for a network of Minecraft servers with over 500 concurrent players",
          "Managed a Discord server with over 85,000 users",
          "Internationally collaborated with other developers using Git",
          "Implemented plugins both individually and as part of a team to create unique selling points to distinguish the network from its competition",
          "Assisted in the creation of a centralised, private API to facilitate quicker and more standardised development",
        ]}
      />
    </>
  );
};

const AboutText = styled.div`
  font-size: var(--font-xl);
  color: var(--color-secondary);
  max-width: 40vw;

  @media screen and (max-width: 700px) {
    max-width: 80vw;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default About;
