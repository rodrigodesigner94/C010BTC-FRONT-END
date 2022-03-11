import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Background } from "./styled";
import { useState } from "react";

export const Main = () => {
  return (
    <Background>
      <Button variant="outline-primary">Play Game</Button>
    </Background>
  );
};
