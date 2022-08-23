import { StaticImage } from "gatsby-plugin-image";
import React from "react";
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
]);

export interface SphereItem {
  textComponent: JSX.Element;
  imageComponent: JSX.Element;
}

export function getSkillsObjects(): SphereItem[] {
  let list: SphereItem[] = [];
  for (let [key, value] of skillsMap) {
    let textComponent: JSX.Element = <p>{key}</p>;
    console.log(value);
    let imageComponent: JSX.Element = value;
    list.push({ textComponent, imageComponent });
    console.log(imageComponent);
  }
  return list;
}
