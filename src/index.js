import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "../src/styles/global";
import { Container } from "./style";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "../src/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "../src/pags/login";
import { Main } from "../src/pags/main";
import { Register } from "../src/pags/register";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <GlobalStyle />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
