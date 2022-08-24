import React from "react";
import { motion } from "framer-motion";
import { EnterFromLeft, EnterFromRight, EnterWithFade } from "../../MotionProp";
import styled from "styled-components";
import ProjectLink, { ButtonType } from "./ProjectLink";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Project = (props: any) => {
  let image = <img src={props.imagePath} alt="Project Screenshot" />;
  const { height, width } = useWindowDimensions();

  return (
    <ProjectContainer>
      {(props.left || width < 1200) && (
        <motion.div {...EnterFromLeft({})}>{image}</motion.div>
      )}

      <TextContainer className={props.left ? "shiftLeft" : "shiftRight"}>
        <motion.h1 className="heading" {...EnterFromLeft({})}>
          {props.name}
        </motion.h1>
        <motion.div
          className={`description-container ${props.left ? "alignRight" : ""}`}
          {...EnterFromLeft({})}
        >
          <p>{props.description}</p>
        </motion.div>

        <motion.p {...EnterFromLeft({})}>{props.technologies}</motion.p>

        <motion.div className="links-container" {...EnterWithFade({})}>
          {props.github && (
            <ProjectLink buttonType={ButtonType.GITHUB} link={props.github} />
          )}
          {props.figma && (
            <ProjectLink buttonType={ButtonType.FIGMA} link={props.figma} />
          )}
          {props.dribbble && (
            <ProjectLink
              buttonType={ButtonType.DRIBBLE}
              link={props.dribbble}
            />
          )}
        </motion.div>
      </TextContainer>

      {!props.left && width > 1200 && (
        <motion.div {...EnterFromRight({})}>{image}</motion.div>
      )}
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-secondary);
  width: 100%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 640px;
    border-radius: 10px;
  }

  .heading {
    font-weight: 400;
    font-size: 32px;
    margin: 0;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1300px) {
    .shiftRight {
      transform: translateX(60px);
      align-items: flex-start;
    }
    .shiftLeft {
      transform: translateX(-60px);
      align-items: flex-end;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1300px) {
    .alignRight {
      text-align: end;
    }
  }

  .description-container {
    background: #1d3557;
    border-radius: 10px;
    color: var(--color-text);
    padding: 30px 30px;
    width: 500px;

    p {
      margin: 0;
    }
  }

  .links-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1300px) {
    .links-container {
      justify-content: start;
      margin-bottom: 40px;
    }
  }
`;

export default Project;
