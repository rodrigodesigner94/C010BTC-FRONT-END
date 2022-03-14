import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "../src/styles/global";
import { Container } from "./style";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "../src/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { Login } from "../src/pags/login/login";
import { Main } from "../src/pags/main/main";
import { Register } from "../src/pags/register/register";
import {Game}from "../src/pags/game/game"
=======
import { Login } from "../src/pages/login";
import { Main } from "../src/pages/main";
import { Register } from "../src/pages/register";
import  axios  from 'axios';
import { Sorteio } from '../src/components/Bolas/index';
import { Cartela } from './components/Cartela/index'


axios.defaults.baseURL = 'https://blue-ctb.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.get('/bola')
.then((response) =>{
  //console.log(response.data[0].bolaSorteio);
})
>>>>>>> 7239ec8cc9861397d103744419d568b41cba3dd1

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Container>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Login />} path="/Login" />
          <Route element={<Register />} path="/Register" />
<<<<<<< HEAD
          <Route element={<Game />} path="/Game" />
=======
          <Route element={<Sorteio />} path="/bola" />
          <Route element={<Cartela />} path="/cartela" />
>>>>>>> 7239ec8cc9861397d103744419d568b41cba3dd1
        </Routes>
        <GlobalStyle />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
