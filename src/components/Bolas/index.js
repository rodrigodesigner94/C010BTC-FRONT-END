import bola from "../../assets/bola.png";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export const Bola = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bola});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: contain;
  width: 3rem;
  height: 3rem;
  border: none;
  margin: 0.2rem;

  :hover {
    transform: scale(1.1);
  }
`;

export const Div = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  max-width: 51rem;
`;
