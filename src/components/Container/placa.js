import styled from 'styled-components';
import bemVindo from '../../assets/bemVindo.png';

export const PlacaBV = styled.div`
  background-image: url(${bemVindo});
  background-repeat: no-repeat;
  width: 43rem;
  height: 38rem;
  display: flex;
  background-size: contain;
  justify-content: center;
  align-items: flex-end;
  background-size: 100% 100%;
  padding: 3rem;
`;
