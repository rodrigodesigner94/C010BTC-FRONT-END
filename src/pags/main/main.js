import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import imagem from "../../components/img/tela-para-play.jpg"


export const Main = () => {
  return (
    <>
      <img src={imagem} alt="imagem"  className="img-fluid" position="absolute" />
      <Button variant="outline-primary" id="register-link" href="/Game">Play Game</Button>
      
    </>
  );
};
