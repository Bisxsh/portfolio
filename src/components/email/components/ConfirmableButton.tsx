import React, { useRef, useState } from "react";
import styled from "styled-components";

const ConfirmableButton = (props: any) => {
  const btn = useRef<HTMLButtonElement>(null);
  const btnText = useRef<HTMLParagraphElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const handleClick = () => {
    if (messageSent) return;

    if (
      props.onSubmit &&
      btnText.current &&
      btnText.current.innerHTML !== "Thanks"
    ) {
      if (btnText.current) btnText.current.innerHTML = "Thanks";
      if (btn.current) btn.current.classList.add("active");
      setMessageSent(true);
    }
  };

  return (
    <ButtonContainer>
      <button ref={btn} onClick={handleClick}>
        <div className="text-container">
          <p ref={btnText}>Submit</p>
          {props.children}
        </div>

        <div className="check-box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
      </button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  margin-top: 40px;
  padding: 10px 20px;
  border-radius: 10px;
  width: 20vw;
  cursor: pointer;

  .submit-form {
    position: relative;
    opacity: 0;
    border-radius: 30px;
    width: 250px;
    height: 75px;
    z-index: 2;
  }

  button {
    width: 270px;
    height: 80px;
    border: none;
    outline: none;
    color: #fff;
    border: 2px solid var(--color-secondary);
    font-size: 22px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      color: var(--color-secondary);
    }

    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        margin: 0;
      }

      & > input {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .check-box {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: -40px;
    opacity: 0;
  }

  .check-box svg {
    width: 40px;
    margin: 20px;
  }

  svg path {
    stroke-width: 3;
    stroke: #fff;
    stroke-dasharray: 34;
    stroke-dashoffset: 34;
    stroke-linecap: round;
  }

  .active {
    border: none;
    background: var(--color-primary);
    transition: 1s;

    .text-container {
      & > p {
        margin-right: 4vw;
        color: white;
      }
    }
  }

  .active .check-box {
    right: 0;
    opacity: 1;
    transition: 1s;
  }

  .active p {
    margin-block: auto;
    margin-right: 125px;
    transition: 1s;
  }

  .active svg path {
    stroke-dashoffset: 0;
    transition: 1s;
    transition-delay: 1s;
  }
`;

export default ConfirmableButton;
