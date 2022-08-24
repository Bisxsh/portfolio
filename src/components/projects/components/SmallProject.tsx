import React from "react";
import styled from "styled-components";
import ProjectLink, { ButtonType } from "./ProjectLink";

const SmallProject = (props: any) => {
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
    </SmallProjectContainer>
  );
};

const SmallProjectContainer = styled.div`
  width: 100%;
  background-color: var(--color-secondary);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

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
    }
  }
`;

export default SmallProject;
