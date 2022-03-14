import styled from 'styled-components';
import Bola from '../../assets/bola.png';

export const ButtonB = styled.button`
  background-image: url(${Bola});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: contain;
  width: 15rem;
  height: 15rem;
  border: none;
  font-size: xx-large;

  :hover{
    transform: scale(1.1)
  }
`;
