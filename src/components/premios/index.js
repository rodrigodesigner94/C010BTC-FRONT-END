import taca from '../../assets/taca.png';
import medalha from '../../assets/medalha.png';
import trofeu from '../../assets/trofeu.png';
import styled from 'styled-components';

export const Taca = styled.div`
  background-image: url(${taca});
  background-repeat: no-repeat;
  background-size: contain;
  padding: 1rem;
  width: 7rem;
  height: 7rem;
  display: flex;
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
