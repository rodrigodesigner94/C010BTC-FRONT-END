import { Form, Button } from "react-bootstrap";
import {GlobalStyle} from "../../styles/global"

export const Register = () => {
  return (
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
        Submit
      </Button>
      <GlobalStyle/>
    </Form>
  );
};