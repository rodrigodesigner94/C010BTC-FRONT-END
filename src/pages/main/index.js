import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonB } from "../../components/Button";
import { Background } from "../../components/Container/background";

export const Main = () => {

  return (
    <Background>
      <a href="/Game">
        <ButtonB>Jogar</ButtonB>
      </a>
    </Background>
  );
};
