import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Heading from "../heading";
import Project from "./components/Project";
import todoImage from "./images/to-do-list.png";
import { motion } from "framer-motion";
import { EnterWithFade } from "../MotionProp";

const Projects = () => {
  return (
    <>
      <Heading text="Projects" left={false} className="Projects" />
      <motion.div {...EnterWithFade}>
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
      </motion.div>
    </>
  );
};

export default Projects;
