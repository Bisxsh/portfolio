import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Heading from "../heading";
import Project from "./components/Project";
import todoImage from "./images/to-do-list.png";
import pomodoroImage from "./images/pomodoro-timer.png";

const Projects = () => {
  return (
    <>
      <Heading text="Projects" left={false} className="Projects" />
      <Project
        left={true}
        imagePath={todoImage}
        name="To-Do List"
        description="A simple to-do list app I made when learning Angular and CSS animations"
        technologies="Angular Typescript Material-UI"
        github="https://github.com/Bisxsh/angular-todo-list"
        figma="https://www.figma.com/file/GQTxnhir2TgDUJDulqsMWV/Todo-list?node-id=0%3A1"
        dribbble="https://dribbble.com/shots/18943466-To-do-List"
      />
      <Project
        left={false}
        imagePath={todoImage}
        name="To-Do List"
        description="A simple to-do list app I made when learning Angular and CSS animations"
        technologies="Angular Typescript Material-UI"
        github="https://github.com/Bisxsh/angular-todo-list"
        figma="https://www.figma.com/file/GQTxnhir2TgDUJDulqsMWV/Todo-list?node-id=0%3A1"
        dribbble="https://dribbble.com/shots/18943466-To-do-List"
      />
      <Project
        left={true}
        imagePath={pomodoroImage}
        name="Pomodoro Timer"
        description="A minimilistic Pomodoro Timer app I created when learning React Native"
        technologies="React Native Typescript Expo"
        github="https://github.com/Bisxsh/angular-todo-list"
        figma="https://www.figma.com/file/GQTxnhir2TgDUJDulqsMWV/Todo-list?node-id=0%3A1"
        dribbble="https://dribbble.com/shots/18943466-To-do-List"
      />
    </>
  );
};

export default Projects;
