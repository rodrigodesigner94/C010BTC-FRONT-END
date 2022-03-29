import { Form, Button, Col } from "react-bootstrap";
import { GlobalStyle } from "../../components/Global";
import { Background } from "../../components/Container/background";
import { FormR } from "../../components/Form";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(password.length < 6){
      alert("Senha deve ter no minimo 6 caracteres")
      event.preventDefault();
    }else{
      navigate('/Login')
    }

    const inputUser = {
      email,
      firstName,
      password,
      passwordConfirmation,
    };

    axios
      .post('/user', inputUser)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  

  return (
    <Background>
      <FormR onSubmit={handleSubmit}>
        <Form.Group className="mb-3" as={Col}>
          <Form.Label>Nome ou apelido</Form.Label>
          <Form.Control
              type="text"
              placeholder="Digite como você quer ser chamado"
              onChange={(event) => setFirstName(event.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" as={Col}>
          <Form.Label>E-Mail</Form.Label>
          <Form.Control 
            type='email' 
            placeholder='Digite um Email' 
            onChange={(event) => setEmail(event.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3" as={Col}>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite uma Senha"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" as={Col}>
          <Form.Label>Confirmar Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Redigite a Senha"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Criar Conta
        </Button>
        <GlobalStyle/>
      </FormR>
    </Background>
  );
};