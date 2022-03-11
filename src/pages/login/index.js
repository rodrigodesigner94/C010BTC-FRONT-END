import { Form, Button } from "react-bootstrap";
import {GlobalStyle} from "../../styles/global"




export const Login = () => {


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
<<<<<<< HEAD:src/pags/login/login.js
      
=======
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
>>>>>>> 7239ec8cc9861397d103744419d568b41cba3dd1:src/pages/login/index.js
      <Button variant="primary" type="submit">
        Login
      </Button>
      <GlobalStyle/>
    </Form>
  );
};
