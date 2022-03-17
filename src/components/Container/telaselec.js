import styled from 'styled-components';
import telaSelecao from '../../assets/telaSelecao.jpg';

export const BackgroundSelec = styled.div`
    background-image: url(${telaSelecao});
    background-repeat: no-repeat;
    width: 100%;
    height: 50rem;
    display: flex;
    background-size: contain;
    justify-content: center;
    background-size: 100% 100%;
    padding: 4rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;