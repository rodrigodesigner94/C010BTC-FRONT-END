import styled from "styled-components";
import background from "../../assets/background.jpg";

export const Background = styled.div`
  background-image: url(${background});
  overflow: auto;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-size: contain;
  justify-content: center;
  background-size: 100% 100%;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
