import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "../src/components/Navbar";
import { Login } from "../src/pages/login";
import { Main } from "../src/pages/main";
import { Register } from "../src/pages/register";
import { Game } from "./pages/game/index";
import { Game2 } from "./pages/game/game2";
import { Game3 } from "./pages/game/game3";
import { Game4 } from "./pages/game/game4";
import { Cartela } from "./pages/selecao";

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
        <Route element={<Game2 />} path="/Game2" />
        <Route element={<Game3 />} path="/Game3" />
        <Route element={<Game4 />} path="/Game4" />
        <Route element={<Cartela />} path="/Cartela" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
