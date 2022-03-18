import styled from 'styled-components';
import telaSelecao from '../../assets/telaSelecao.jpg';

export const BackgroundSelec = styled.div`
    background-image: url(${telaSelecao});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-size: contain;
    justify-content: center;
    background-size: 100% 100%;
    /* padding-top: -8rem; */
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;