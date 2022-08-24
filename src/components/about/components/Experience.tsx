import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { EnterFromLeft, EnterFromRight, EnterWithFade } from "../../MotionProp";

const Experience = (props: any) => {
  return (
    <ExperienceWrapper>
      <HeadingWrapper>
        <motion.h1 className="heading" {...EnterFromRight({})}>
          {props.heading}
        </motion.h1>
        <motion.p className="date" {...EnterFromLeft({})}>
          {props.date}
        </motion.p>
      </HeadingWrapper>

      <motion.h2 className="technologies" {...EnterWithFade({ delay: 0.2 })}>
        {props.technologies}
      </motion.h2>
      <motion.ul
        className="description-list"
        {...EnterWithFade({ delay: 0.5 })}
      >
        {props.description.map(d => (
          <li className="description-list-item">{d}</li>
        ))}
      </motion.ul>
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.div`
  margin-top: 40px;
  color: var(--color-secondary);
  font-weight: 400;
  max-width: 80vw;

  .technologies {
    font-style: italic;
    font-weight: 400;
    font-size: var(--font-lg);
    margin-top: 0;
  }

  .description-list-item {
    font-weight: 300;
    font-size: var(--font-xl);
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .heading {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: var(--font-heading);
  }

  .date {
    font-size: var(--font-lg);
  }
`;

export default Experience;
