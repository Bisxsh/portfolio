import React from "react";
import styled from "styled-components";
import ProjectLink, { ButtonType } from "./ProjectLink";
import { motion } from "framer-motion";
import { EnterWithFade } from "../../MotionProp";

const SmallProject = (props: any) => {
  if (typeof window === `undefined`) {
    return <></>;
  }

  function openExternal() {
    let link: string;
    if (props.github) {
      link = props.github;
    } else if (props.figma) {
      link = props.figma;
    } else {
      link = props.dribbble;
    }

    if (link) window.open(link, "_blank")?.focus();
  }

  return (
    <SmallProjectContainer onClick={openExternal}>
      <motion.div
        className="project-container"
        {...EnterWithFade({ delay: props.enterDelay })}
      >
        <h1>{props.title}</h1>
        <p className="technologies">{props.technologies}</p>
        <p className="description">{props.description}</p>

        <div className="links-container">
          {props.github && (
            <ProjectLink
              className="external-link"
              buttonType={ButtonType.GITHUB}
              link={props.github}
            />
          )}
          {props.figma && (
            <ProjectLink
              className="external-link"
              buttonType={ButtonType.FIGMA}
              link={props.figma}
            />
          )}
          {props.dribbble && (
            <ProjectLink
              className="external-link"
              buttonType={ButtonType.DRIBBLE}
              link={props.dribbble}
            />
          )}
        </div>
      </motion.div>
    </SmallProjectContainer>
  );
};

const SmallProjectContainer = styled.div`
  .project-container {
    width: 100%;
    height: 100%;
    background-color: var(--color-secondary);
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
  }

  h1 {
    color: white;
    margin-bottom: 10px;
  }

  P {
    font-weight: 400;
  }

  .description {
    flex-grow: 1;
  }

  .technologies {
    font-weight: 300;
    font-style: italic;
  }

  .links-container {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .external-link {
    width: 48px;
    padding: 10px;
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      transform: translateY(-7px);
      box-shadow: var(--color-accent) 0px 7px 12px 0px;
      h1 {
        color: var(--color-accent);
      }
    }
  }

  @media screen and (min-width: 1800px) {
    max-width: 40vw;
  }
`;

export default SmallProject;
