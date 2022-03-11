import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Background } from "./styled";
import { useState } from "react";
import axios from "axios";


export const Main = () => {


  return (
    <>
    <Background>

      <Button variant="outline-primary">Play Game</Button>

    </Background>
    </>
  );
};
