import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { EnterWithFade } from "../MotionProp";
import { useForm } from "react-hook-form";

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

  return (
    <EmailContainer>
      <motion.div {...EnterWithFade({})}>
        <h1>Send me a message!</h1>
        <h2>Got any questions or just want to say hello? Well fire away 🔫</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Your name</label>
          <input type="text" {...register("name", options.name)} />
          <label>Your email</label>
          <input type="email" {...register("email")} />

          <label>Your message</label>
          <textarea {...register("message")} />
          <input type="submit" />
        </form>
      </motion.div>
    </EmailContainer>
  );
};

const EmailContainer = styled.div`
  div > form {
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }
`;

export default Email;
