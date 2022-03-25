import styled from "styled-components";
import imagem1 from '../../assets/felipe.jpg'
import imagem2 from '../../assets/johni.jpg'
import imagem3 from '../../assets/rodrigoborges.jpg'
import imagem4 from '../../assets/valdenir.png'
import imagem5 from '../../assets/rodrigoborges.jpg'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Background = styled.body`
  background-color: #335FA0;
`;

const Scrum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Image1 = styled.div`
  background-image: url(${imagem1});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  border: 2rem;
  border: solid;
  border-color: yellow;
`;

const Image2 = styled.div`
  background-image: url(${imagem2});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  border: 2rem;
  border: solid;
  border-color: yellow;
`;

const Image3 = styled.div`
  background-image: url(${imagem3});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  border: 2rem;
  border: solid;
  border-color: yellow;
`;

const Image4 = styled.div`
  background-image: url(${imagem4});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  border: 2rem;
  border: solid;
  border-color: yellow;
`;

const Image5 = styled.div`
  background-image: url(${imagem5});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  border: 2rem;
  border: solid;
  border-color: yellow;
`;

const DivG = styled.div`
  background-color: white;
  height: auto;
  padding: 2rem;
  margin: 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  box-shadow: 5px 5px 5px black;

  h1, h2{
    padding: 0.2rem;
  }
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;

  a{
    color: black;
  }

  h3{
    padding: 1rem;
  }
`;

const IconGit = styled(BsGithub)`
  width: 3.5rem;
  height: 3.5rem;
  margin: 5px;

  :hover{
    transform: scale(1.1)
  }
`;

const IconLink = styled(AiFillLinkedin)`
  width: 4rem;
  height: 4rem;
  margin: 5px;

  :hover{
    transform: scale(1.1)
  }
`;

export const Sobre = () => {
  return(
    <Background>
      <Scrum>
        <DivG>
          <Image1 />
          <h1>Felipe</h1>
          <h2>Back-End</h2>
          <IconDiv>
            <h3>Acesse:</h3>
            <a href="https://github.com/feeee-creator"><IconGit /></a>
            <a href="https://www.linkedin.com/in/felipe-silva-b60458210/"><IconLink /></a>
          </IconDiv>
        </DivG>
        <DivG>
          <Image2 />
          <h1>Johni</h1>
          <h2>Back-End</h2>
          <IconDiv>
            <h3>Acesse:</h3>
            <a href="https://github.com/johnicassere"><IconGit /></a>
            <a href="https://www.linkedin.com/in/johni-cassere/"><IconLink /></a>
          </IconDiv>
        </DivG>
        <DivG>
          <Image3 />
          <h1>Rodrigo</h1>
          <h2>Front-End</h2>
          <IconDiv>
            <h3>Acesse:</h3>
            <a href="https://github.com/rodrigodesigner94"><IconGit /></a>
            <a href="https://www.linkedin.com/in/rodrigo-borges-78a359a1/"><IconLink /></a>
          </IconDiv>
        </DivG>
        <DivG>
          <Image4 />
          <h1>Valdenir</h1>
          <h2>Back-End</h2>
          <IconDiv>
            <h3>Acesse:</h3>
            <a href="https://github.com/ValdenirSBrito"><IconGit /></a>
            <a href="https://www.linkedin.com/in/valdenir-silva-brito-43b34a1bb/"><IconLink /></a>
          </IconDiv>
        </DivG>
        <DivG>
          <Image5 />
          <h1>Willian</h1>
          <h2>Front-End</h2>
          <IconDiv>
            <h3>Acesse:</h3>
            <a href="https://github.com/Wilbyl"><IconGit /></a>
            <a href="https://www.linkedin.com/in/willian-oliveira-605134145/"><IconLink /></a>
          </IconDiv>
        </DivG>
      </Scrum>
    </Background>
  )
}