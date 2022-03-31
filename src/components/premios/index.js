import taca from '../../assets/taca.png';
import medalha from '../../assets/medalha.png';
import trofeu from '../../assets/trofeu.png';
import styled from 'styled-components';

export const Taca = styled.div`
  background-image: url(${taca});
  background-repeat: no-repeat;
  background-size: contain;
  width: 10rem;
  height: 10rem;
  display: flex;
  margin: 0rem;
  justify-content: center;
  align-items: center;

  :hover {
    transform: scale(1.1);
  }
`;

export const Medalha = styled.div`
  background-image: url(${medalha});
  width: 3rem;
  height: 3rem;

  :hover {
    transform: scale(1.1);
  }
`;

export const Trofeu = styled.div`
  background-image: url(${trofeu});
  width: 3rem;
  height: 3rem;

  :hover {
    transform: scale(1.1);
  }
`;
