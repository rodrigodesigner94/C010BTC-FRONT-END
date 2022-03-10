import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/global";
import { Container } from "./style";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "../src/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "../src/pags/login/login";
import { Main } from "../src/pags/main/main";
import { Register } from "../src/pags/register/register";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Container>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Login />} path="/Login" />
          <Route element={<Register />} path="/Register" />
        </Routes>
        <GlobalStyle />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
