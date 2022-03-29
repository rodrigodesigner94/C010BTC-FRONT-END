import styled from 'styled-components';
import telaGame from '../../assets/telaGame.jpg';

export const BackgroundGame = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  min-height: 99vh ;
  max-height: 100%;
  background-image: url(${telaGame});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  button{
    border-radius: 10px;
    background-color: #bac7db;
  }

  button:hover{ 
    transform: scale(1.1);
    background-color: #8c9196;
  }

  a{
    color: black;
    text-decoration: none;
  }
`;