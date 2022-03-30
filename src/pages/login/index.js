import api from '../../services/Api';
import { Form, Button } from 'react-bootstrap';
import { GlobalStyle } from '../../components/Global';
import { Background } from '../../components/Container/background';
import { FormL } from '../../components/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputLogin = {
      email,
      password
    };

    api
      .post('/auth', inputLogin)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
      })
      .catch((error) => {
        console.log(error.message);
      });

    navigate('/');
  };

  return (
    <Background>
      <FormL onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu Email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            minlength="6"
            placeholder="Digite sua Senha"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Entrar
        </Button>
        <GlobalStyle />
      </FormL>
    </Background>
  );
};
