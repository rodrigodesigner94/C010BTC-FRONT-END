import bola from '../../assets/bola.png';
import styled from 'styled-components';
import { Figure, Card } from 'react-bootstrap'

const Bola = styled(Card)`
  background-image: url(${bola});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: contain;
  width: 3rem;
  height: 3rem;
  border: none;
  margin: 0.2rem;
`;

const Div = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: 2rem;
  align-items: center;
  justify-content: center;
`;

export const Bolas = () => {
  return( 
    <Figure>
      <Div>
        {Array.from({ length: 30 }).map((_, idx) => (
          <Bola />
        ))}
      </Div>
    </Figure>
  )
}
