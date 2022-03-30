import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";

export const Back = styled(TiArrowBack)`
  position: absolute;
  top: 5rem;
  left: 2rem;
  width: 4rem;
  height: 4rem;

  :hover {
    transform: scale(1.1);
  }
`;
