import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Heading from "../heading";
import Project from "./components/Project";
import todoImage from "./images/to-do-list.png";
import pomodoroImage from "./images/pomodoro-timer.png";
import portfolioImage from "./images/portfolio.png";
import SmallProject from "./components/SmallProject";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LargeButton } from "../Button";
import { EnterWithFade } from "../MotionProp";

const Projects = () => {
  function openGithubRepositories() {
    window
      .open("https://github.com/bisxsh?tab=repositories", "_blank")
      ?.focus();
  }

  return (
    <ProjectsContainer>
      <Heading text="Projects" left={false} className="Projects" />
      <Project
        left={true}
        imagePath={portfolioImage}
        name="Portfolio"
        description="The website I created as a digital portfolio. The very one you are on right now!"
        technologies="React · Gatsby · Framer Motion · Styled Components"
        github="https://github.com/Bisxsh/portfolio"
        figma="https://www.figma.com/file/kJ8vsEHC56hF3RcfFoKTrK/Website?node-id=0%3A1"
        dribbble="https://dribbble.com/shots/19211487-Frontend-developer-portfolio"
      />
      <Project
        left={false}
        imagePath={todoImage}
        name="To-Do List"
        description="A simple to-do list app I made when learning Angular and CSS animations"
        technologies="Angular · Typescript · Material-UI"
        github="https://github.com/Bisxsh/angular-todo-list"
        figma="https://www.figma.com/file/GQTxnhir2TgDUJDulqsMWV/Todo-list?node-id=0%3A1"
        dribbble="https://dribbble.com/shots/18943466-To-do-List"
      />
      <Project
        left={true}
        imagePath={pomodoroImage}
        name="Pomodoro Timer"
        description="A minimilistic Pomodoro Timer app I created when learning React Native"
        technologies="React Native · Typescript · Expo"
        github="https://github.com/Bisxsh/angular-todo-list"
      />

      <motion.h2 className="small-projects-heading" {...EnterWithFade({})}>
        Some other projects I have worked on 💻
      </motion.h2>

      <SmallProjectsContainer>
        <SmallProject
          title="UnlockBath"
          description="A 2D, top-down, adventure game that obtained first place in the Unlock Bath GameJam 2022, hosted by Echo Games CIC."
          technologies="Unity · C#"
          github="https://github.com/bisxsh/unlock-bath"
          enterDelay={0}
        />
        <SmallProject
          title="Who's That Pixelmon"
          description="A ChatGame plugin for Pixelmon to mimic the 'Whos that Pokemon' intervals from the show."
          technologies="Java · Gradle"
          github="https://github.com/Bisxsh/WhosThatPixelmon"
          enterDelay={0.2}
        />
        <SmallProject
          title="GeoQuest"
          description="A simple game to help promote fitness through gamification of jogging."
          technologies="Java · Android Studio · XML · Figma"
          github="https://github.com/bisxsh/BathHack"
          figma="https://www.figma.com/file/V877HFhDf4gcHo1NH09Vni/BathHack22?node-id=0%3A1"
          enterDelay={0.4}
        />
      </SmallProjectsContainer>
      <motion.div
        className="projects--button"
        onClick={openGithubRepositories}
        initial={{ scale: 0.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          default: {
            duration: 0.7,
          },
        }}
      >
        <LargeButton text="🔎 See More 🔍" setClassName="hero--button" />
      </motion.div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .small-projects-heading {
    color: var(--color-secondary);
    margin-top: 10vh;
  }

  .projects--button {
    margin: 50px 0;
  }
`;

const SmallProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  width: 100%;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    max-width: 1900px;
    padding: 20px;
  }
`;

export default Projects;
