import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Background } from "../../components/Container/background";

export const Main = () => {

  return (
    <Background>
      <Button variant="outline-primary" id="register-link" href="/Game">Play Game</Button>
    </Background>
  );
};
