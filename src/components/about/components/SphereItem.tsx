import React, { useEffect, useState } from "react";
import { TagSphere } from "react-tag-sphere";
import {
  TypescriptIcon,
  JavascriptIcon,
  Html5Icon,
  CssIcon,
  ReactOriginalIcon,
  ReactNativeIcon,
  AngularIcon,
  JavaIcon,
  AndroidIcon,
  GitIcon,
  FigmaIcon,
  GradleIcon,
  MavenIcon,
  GatsbyIcon,
  StyledComponentsIcon,
} from "./SkillImages";

const skillsMap = new Map<string, JSX.Element>([
  ["Typescript", TypescriptIcon],
  ["Javascript", JavascriptIcon],
  ["HTML", Html5Icon],
  ["CSS", CssIcon],
  ["React", ReactOriginalIcon],
  ["React Native", ReactNativeIcon],
  ["Angular", AngularIcon],
  ["Java", JavaIcon],
  ["Android", AndroidIcon],
  ["Git", GitIcon],
  ["Figma", FigmaIcon],
  ["Gradle", GradleIcon],
  ["Maven", MavenIcon],
  ["Gatsby", GatsbyIcon],
  ["Styled Components", StyledComponentsIcon],
]);

export interface SphereItem {
  textComponent: JSX.Element;
  imageComponent: JSX.Element;
}

export function getSkillsObjects(): SphereItem[] {
  let list: SphereItem[] = [];
  for (let [key, value] of skillsMap) {
    let textComponent: JSX.Element = <p>{key}</p>;
    let imageComponent: JSX.Element = value;
    list.push({ textComponent, imageComponent });
  }
  return list;
}

export const TagSphereComponent = () => {
  //TODO fix dynamic swapping of text and image without resetting sphere position
  const skillsObjects = getSkillsObjects();
  // const [imageIndexes, setImageIndexes] = useState(getThreeRandomIndexes());
  // const [firstNum, setFirstNum] = useState(imageIndexes[0]);
  // const [tags, setTags] = useState(getTags());

  // function getThreeRandomIndexes(): number[] {
  //   let indexes: number[] = [];
  //   do {
  //     let num = Math.floor(Math.random() * (skillsObjects.length - 1));
  //     if (indexes.indexOf(num) === -1) indexes.push(num);
  //   } while (indexes.length < 3);
  //   return indexes;
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let indexes: number[] = imageIndexes;
  //     let num: number;

  //     do {
  //       num = Math.floor(Math.random() * (skillsObjects.length - 1));
  //     } while (indexes.indexOf(num) !== -1);

  //     indexes.shift();
  //     indexes.push(num);
  //     setImageIndexes(indexes);
  //     setFirstNum(indexes[0]);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   setTags(getTags);
  //   console.log("Here");
  //   console.log(imageIndexes);
  // }, [firstNum]);

  function getTags() {
    return skillsObjects.map(s => s.imageComponent);
  }

  return (
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
  );
};