import styled from 'styled-components';
import telaGame from '../../assets/telaGame.jpg';

export const BackgroundGame = styled.div`
    background-image: url(${telaGame});
    background-repeat: no-repeat;
    width: 100%;
    min-height: 99vh ;
    max-height: 100%;
    display: flex;
    justify-content: center;
    background-size: 100% 100%;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    
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