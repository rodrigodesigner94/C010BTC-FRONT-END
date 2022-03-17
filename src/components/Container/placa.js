import styled from 'styled-components';
import bemVindo from '../../assets/bemVindo.png';

export const PlacaBV = styled.div`
    background-image: url(${bemVindo});
    background-repeat: no-repeat;
    width: 50rem;
    height: 44rem;
    display: flex;
    background-size: contain;
    justify-content: center;
    align-items: flex-end;
    background-size: 100% 100%;
    padding: 4rem;
`;