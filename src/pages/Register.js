import React, { useState, useEffect } from "react";

import Wrapper from "../assets/wrappers/RegisterPage";

import { Logo, FormRow } from "../components";

import { ToastContainer, toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(`${name}:${value}`);

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      console.log("Please Fill Out All Fields");
      toast.warning("Please fill out all fields");

      return;
    }
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

        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {!values.isMember && (
          <FormRow
            type={"text"}
            name="name"
            value={values.name}
            handleChange={handleChange}
          ></FormRow>
        )}

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

        <button className="btn btn-block" onClick={onSubmit}>
          Submit
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button className="member-btn" type="button" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
