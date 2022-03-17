import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  padding: 12rem;

  select{
  }

  a{
    margin: 2rem;
  }
`;

const ButtonJ = styled.button`
  border-color: #550000;
  background-color: #ffffff;
  border-width: 0.8rem;
  border-radius: 1rem;
`;

export const Selecionar = () => {
  return(
    <Div className="input-group" aria-label="Example select with button addon">
      <select className="form-select" >
        <option selected>Quantidade de cartelas</option>
        <option defaultValue="1">1</option>
        <option defaultValue="1">2</option>
        <option defaultValue="1">3</option>
        <option defaultValue="1">4</option>
      </select>
      <span className="input-group-text">$</span>
      <span className="input-group-text">0.00</span>
      <a href="/Game">
        <ButtonJ>Iniciar</ButtonJ>
      </a>
    </Div>
  )
}
