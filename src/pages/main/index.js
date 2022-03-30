import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonB } from "../../components/Button";
import { Background } from "../../components/Container/background";
import { PlacaBV } from "../../components/Container/placa";

export const Main = () => {
  return (
    <Background>
      <PlacaBV>
        <a href="/Cartela">
          <ButtonB>Jogar</ButtonB>
        </a>
      </PlacaBV>
    </Background>
  );
};
