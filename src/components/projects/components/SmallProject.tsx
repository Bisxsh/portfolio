import React from "react";
import styled from "styled-components";
import ProjectLink, { ButtonType } from "./ProjectLink";

const SmallProject = (props: any) => {
  return (
    <SmallProjectContainer>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.technologies}</p>

      <div>
        {props.github && (
          <ProjectLink buttonType={ButtonType.GITHUB} link={props.github} />
        )}
        {props.figma && (
          <ProjectLink buttonType={ButtonType.FIGMA} link={props.figma} />
        )}
        {props.dribbble && (
          <ProjectLink buttonType={ButtonType.DRIBBLE} link={props.dribbble} />
        )}
      </div>
    </SmallProjectContainer>
  );
};

const SmallProjectContainer = styled.div`
  width: 300px;
  aspect-ratio: 1;
  background-color: var(--color-secondary);
  border-radius: 10px;
  padding: 30px;
`;

export default SmallProject;
