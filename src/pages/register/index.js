import { Form, Button } from "react-bootstrap";
import {GlobalStyle} from "../../styles/global"


export const Register = () => {
  return (
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
<<<<<<< HEAD:src/pags/register/register.js
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
=======
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Frist Name</Form.Label>
        <Form.Control type="name" placeholder="First Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Last Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
>>>>>>> 7239ec8cc9861397d103744419d568b41cba3dd1:src/pages/register/index.js
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
<<<<<<< HEAD:src/pags/register/register.js
        <Form.Label>Password </Form.Label>
        <Form.Control type="string" placeholder="Password" />
      </Form.Group>


<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Comfirm Password </Form.Label>
        <Form.Control type="string" placeholder="Password Comfirm" />
      </Form.Group>


=======
        <Form.Label>Password Comfirm</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">  
      </Form.Group>
>>>>>>> 7239ec8cc9861397d103744419d568b41cba3dd1:src/pages/register/index.js
      <Button variant="primary" type="submit">
        Register
      </Button>
      <GlobalStyle/>
    </Form>
    
  );
};