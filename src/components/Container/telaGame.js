import styled from 'styled-components';
import telaGame from '../../assets/telaGame.jpg';

export const BackgroundGame = styled.div`
    background-image: url(${telaGame});
    background-repeat: no-repeat;
    width: 100%;
    height: 50rem;
    display: flex;
    background-size: contain;
    justify-content: center;
    background-size: 100% 100%;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    button{
        border-radius: 10px;
        background-color: #bac7db;
    }

    button:hover{ 
        width: 104px;
        height: 26px;
        font-size: 13px;
       background-color: #8c9196;
    }
`;