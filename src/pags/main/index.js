import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Background } from "./styled";

export const Main = () => {
  return (
    <>
    <Background>

      <Button variant="outline-primary">Play Game</Button>

    </Background>
    </>
  );
};
