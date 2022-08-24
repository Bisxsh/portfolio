import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { EnterWithFade } from "../MotionProp";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Email = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  const options = {
    name: { required: true, pattern: /^[A-Za-z ]+$/i },
    email: { required: "An email address is required" },
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [message, setMessage] = useState<String>();
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  function constructEmail(data) {
    return {
      to_name: "Bisesh",
      from_name: data.name,
      message: message,
      reply_to: data.email,
    };
  }

  const sendEmail = e => {
    console.log(e);
    console.log(message);

    // emailjs
    //   .send(
    //     "service_xasw9ak",
    //     "template_92mu72i",
    //     constructEmail(e),
    //     "bD_OMS6xSFT0bgbHS"
    //   )
    //   .then(
    //     result => {
    //       console.log(result.text);
    //     },
    //     error => {
    //       console.log(error.text);
    //     }
    //   );
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [message]);

  return (
    <EmailContainer>
      <motion.div {...EnterWithFade({})}>
        <h1>Send me a message!</h1>
        <h2>Got any questions or just want to say hello? Well fire away 🔫</h2>

        <FormContainer onSubmit={handleSubmit(sendEmail)}>
          <div className="form--upper">
            <div className="form--small">
              <label>Your name</label>
              <input type="text" {...register("name", options.name)} />
            </div>

            <div className="form--small">
              <label>Your email</label>
              <input type="email" {...register("email")} />
            </div>
          </div>

          <div className="form--message">
            <label>Your message</label>
            <textarea
              {...register("message")}
              ref={textareaRef}
              onChange={textAreaChange}
            >
              {message}
            </textarea>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <input className="submit" type="submit" />
          </motion.div>
        </FormContainer>
      </motion.div>
    </EmailContainer>
  );
};

const EmailContainer = styled.div`
  padding: 5vw;
  width: 60vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transform: translateY(200px);
  z-index: 1;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  color: var(--color-secondary);
  h1 {
    color: var(--color-primary);
    margin-bottom: 20px;
  }

  h2 {
    font-size: var(--font-l);
  }

  h2,
  label {
    font-weight: 300;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    align-self: flex-start;
    font-size: var(--font-sm);
    opacity: 0.5;
    margin-bottom: 10px;
  }

  .form--upper {
    flex-direction: row;
  }

  .form--small {
    display: flex;
    flex-direction: column;
    margin: 30px;
  }

  .form--message {
    &,
    textarea {
      width: 100%;
    }
    padding: 0 30px;
  }

  .submit {
    margin-top: 40px;
    padding: 10px 20px;
    border: 2px solid var(--color-primary);
    border-radius: 10px;
    width: 20vw;
    cursor: pointer;
  }

  //Reset styles
  input,
  textarea,
  input:focus {
    outline: none;
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
  }

  input,
  textarea {
    border-bottom: 1px solid var(--color-secondary);
    font-size: var(--font-xl);
    overflow: auto;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }

  input:focus {
    border-bottom: 1px solid var(--color-primary);
  }
`;

export default Email;
