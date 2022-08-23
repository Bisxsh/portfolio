import React, { useEffect, useState } from "react";
import { TagSphere } from "react-tag-sphere";
import styled from "styled-components";
import { getSkillsObjects, TagSphereComponent } from "./components/SphereItem";

const About = () => {
  return (
    <AboutWrapper>
      <AboutText>
        <p>
          Hey! My name is Bisesh and I am currently a student at the University
          of Bath.
        </p>
        <p>
          Outside of coding (and learning to code), you’ll find me playing
          basketball, playing guitar or powering through my ever-growing Netflix
          list.
        </p>
      </AboutText>
      <SphereWrapper>
        <TagSphereComponent />
      </SphereWrapper>
    </AboutWrapper>
  );
};

const SphereWrapper = styled.div`
  aspect-ratio: 1;
  width: 600px;
`;

const AboutText = styled.div`
  font-size: var(--font-xl);
  color: var(--color-secondary);
  max-width: 40vw;
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
