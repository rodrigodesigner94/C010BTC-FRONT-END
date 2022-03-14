import { Form, Button } from "react-bootstrap";
import { GlobalStyle } from "../../components/Global"
import { Background } from "../../components/Container/background";

export const Login = () => {

  return (
    <Background>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <GlobalStyle/>
      </Form>
    </Background>
  );
};
