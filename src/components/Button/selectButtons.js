import styled from 'styled-components';
import { TiArrowBack } from 'react-icons/ti';

export const Back = styled(TiArrowBack)`
  position: absolute;
  top: 5rem;
  left: 2rem;
  width: 4rem;
  height: 4rem;
  z-index: 1;

  :hover {
    transform: scale(1.1);
  }
`;

export const Show = styled.button`
  background-color: #ffffff;
  border: solid;
  font-weight: bold;
  border-color: #550000ff;
  position: absolute;
  top: 90%;
  right: 3rem;
  width: 6rem;
  height: 4rem;

  :hover {
    transform: scale(1.1);
  }
`;

export const Tabela = styled.button`
  position: absolute;
  top: 85%;
  right: 5rem;
  width: 6rem;
  height: 4rem;

  :hover {
    transform: scale(1.1);
  }
`;
