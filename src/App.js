import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Landing, Register, Dashboard, Error } from "./pages";

import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Dashboard></Dashboard>}></Route>
        <Route path={"landing"} element={<Landing></Landing>}></Route>
        <Route path={"register"} element={<Register></Register>}></Route>
        <Route path={"*"} element={<Error></Error>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
};

export default App;
