import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './styles/global'
import {Container} from './style'
import { Routes, BrowserRouter } from 'react-router-dom'
import {NavBar} from '../src/Navbar'
import { Panel } from './components/Bolas';
import {App} from '../src/components/App'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes />
        <GlobalStyle /> 
        <Container>
        <Panel />
        <App/>
        <Routes />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);