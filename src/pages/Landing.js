import React from "react";

import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

import Wrapper from "../assets/wrappers/LandingPage";

import { Logo } from "../components";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt="jobster logo" className="logo" /> */}
        <Logo></Logo>
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>

          <p>
            I'm baby subway tile helvetica pickled master cleanse pok pok
            narwhal next level lyft. Quinoa pickled vape drinking vinegar, lo-fi
            blog sus pork belly subway tile man braid same art party poke
            selvage.{" "}
          </p>

          <button
            className="btn btn-hero"
            onClick={() => {
              navigate("/register");
            }}
          >
            Login/Register
          </button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
