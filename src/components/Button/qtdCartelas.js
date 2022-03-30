import React from "react";
import styled from "styled-components";
import api from "../../services/Api";
import { useEffect } from "react";
import { Col } from "react-bootstrap";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

const ColS = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem;
  margin: 0rem;

  a {
    text-decoration: none;
    color: #000;
  }
`;

const DivD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 245, 245, 0.8);
  margin: 2rem;
  border-radius: 1rem;
  width: 20rem;
  height: 12rem;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: #669cf2 2px 2px 2px;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const Selecionar = () => {
  // DELETE PARTIDA
  // useEffect(() =>{
  //   api.delete('/partida')
  // }, [])

  // DELETE CARTELA
  // useEffect(() =>{
  // api.delete('/cartela')
  // }, [])

  // POST PARTIDA
  useEffect(() => {
    api.post("/partida", {
      bolaSorteio: "string",
      hits: "string",
      premio: "string",
      inicio: "2022-03-22T00:29:51.261Z",
      fim: "2022-03-22T00:29:51.261Z",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  // POST Cartela 1
  useEffect(() => {
    api.post("/cartela", {
      cartela: 1,
      linhaCartela: "string",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  // POST Cartela 2
  useEffect(() => {
    api.post("/cartela", {
      cartela: 2,
      linhaCartela: "string",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  // POST Cartela 3
  useEffect(() => {
    api.post("/cartela", {
      cartela: 3,
      linhaCartela: "string",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  // POST Cartela 4
  useEffect(() => {
    api.post("/cartela", {
      cartela: 4,
      linhaCartela: "string",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <Div>
      <ColS>
        <a href="/Game">
          <DivD>
            <h1>1 Cartela</h1>
          </DivD>
        </a>

        <a href="/Game2">
          <DivD>
            <h1>2 Cartela</h1>
          </DivD>
        </a>
      </ColS>

      <ColS>
        <a href="/Game3">
          <DivD>
            <h1>3 Cartela</h1>
          </DivD>
        </a>

        <a href="/Game4">
          <DivD>
            <h1>4 Cartela</h1>
          </DivD>
        </a>
      </ColS>
    </Div>
  );
};
