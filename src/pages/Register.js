import React, { useState, useEffect } from "react";

import Wrapper from "../assets/wrappers/RegisterPage";

import { Logo, FormRow } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {};

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className="full-page">
      <form
        className="form"
        onSubmit={() => {
          onSubmit();
        }}
      >
        <Logo></Logo>

        <h3>Login</h3>

        <FormRow
          type={"text"}
          name="name"
          value={values.name}
          handleChange={handleChange}
        ></FormRow>
        <FormRow
          type={"email"}
          name="email"
          value={values.email}
          handleChange={handleChange}
        ></FormRow>
        <FormRow
          type={"password"}
          name="password"
          value={values.password}
          handleChange={handleChange}
        ></FormRow>

        <button className="btn btn-block" type="submit">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
