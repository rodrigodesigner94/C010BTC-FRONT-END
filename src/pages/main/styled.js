import styled from "styled-components";
import image from "../../assets/TelaInicial.jpg";

export const Background = styled.div`
  width: 99vw;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
