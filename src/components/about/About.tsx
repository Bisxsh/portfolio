import React from "react";
import { TagSphere } from "react-tag-sphere";
import styled from "styled-components";
import { getSkillsObjects } from "./components/SphereItem";

function getTags() {
  let skillsObjects = getSkillsObjects();
  let imageIndexes: number[] = [];
  do {
    let num = Math.floor(Math.random() * (skillsObjects.length - 1));
    if (imageIndexes.indexOf(num) === -1) imageIndexes.push(num);
  } while (imageIndexes.length < 3);

  return skillsObjects.map(s => {
    if (imageIndexes.indexOf(skillsObjects.indexOf(s)) != -1)
      return s.textComponent;
    return s.imageComponent;
  });
}

// const tags = [
//   <img
//     width={50}
//     src={"https://cdn.svgporn.com/logos/react.svg"}
//     alt={"Random image"}
//   />,
//   <img
//     width={50}
//     src={"https://cdn.svgporn.com/logos/javascript.svg"}
//     alt={"Random image"}
//   />,
// ];

const tags = getTags();
console.log(tags);

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
        <TagSphere
          style={{
            color: "#457b9d",
            fontWeight: "400",
            fontSize: "1.2rem",
            fontFamily: "Poppins",
          }}
          className="about--sphere"
          blur={true}
          blurMultiplier={0.2}
          keepRollingAfterMouseOut={false}
          userSelect={true}
          initialSpeed={2}
          maxSpeed={2}
          fullWidth={true}
          fullHeight={true}
          tags={tags}
        />
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
