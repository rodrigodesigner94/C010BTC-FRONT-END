import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "../src/components/Navbar";
import { Login } from "../src/pages/login";
import { Main } from "../src/pages/main";
import { Register } from "../src/pages/register";
import { Game } from "../src/pages/game";

axios.defaults.baseURL = 'https://bingoo-btc.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Register />} path="/Register" />
        <Route element={<Game />} path="/Game" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
