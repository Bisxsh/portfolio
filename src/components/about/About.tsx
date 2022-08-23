import React, { useEffect, useState } from "react";
import { TagSphere } from "react-tag-sphere";
import styled from "styled-components";
import { getSkillsObjects } from "./components/SphereItem";

const About = () => {
  const skillsObjects = getSkillsObjects();
  //   const [imageIndexes, setImageIndexes] = useState(getThreeRandomIndexes());
  //   const [firstNum, setFirstNum] = useState(imageIndexes[0]);
  //   const [tags, setTags] = useState(getTags());

  function getTags() {
    return skillsObjects.map(s => s.imageComponent);
    // TODO make animate change between text and image without resetting sphere position
    // return skillsObjects.map(s => {
    //   if (imageIndexes.indexOf(skillsObjects.indexOf(s)) === -1)
    //     return s.textComponent;
    //   return s.imageComponent;
    // });
  }

  //   function getThreeRandomIndexes(): number[] {
  //     let indexes: number[] = [];
  //     do {
  //       let num = Math.floor(Math.random() * (skillsObjects.length - 1));
  //       if (indexes.indexOf(num) === -1) indexes.push(num);
  //     } while (indexes.length < 3);
  //     return indexes;
  //   }

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       let indexes: number[] = imageIndexes;
  //       let num: number;

  //       do {
  //         num = Math.floor(Math.random() * (skillsObjects.length - 1));
  //       } while (indexes.indexOf(num) !== -1);

  //       indexes.shift();
  //       indexes.push(num);
  //       setImageIndexes(indexes);
  //       setFirstNum(indexes[0]);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  //   useEffect(() => {
  //     setTags(getTags);
  //     console.log("Here");
  //     console.log(imageIndexes);
  //   }, [firstNum]);

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
          tags={getTags()}
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
