import { Form, Button } from "react-bootstrap";
import { GlobalStyle } from "../../components/Global";
import { Background } from "../../components/Container/background";

export const Register = () => {
  return (
    <Background>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>firstName</Form.Label>
          <Form.Control type="string" placeholder="Enter FirstName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="email" placeholder="Enter LastName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control type="string" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password </Form.Label>
          <Form.Control type="string" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Comfirm Password </Form.Label>
          <Form.Control type="string" placeholder="Password Comfirm" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <GlobalStyle/>
      </Form>
    </Background>
  );
};