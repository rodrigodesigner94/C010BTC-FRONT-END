import  { Navbar, Container, Nav, Link } from "react-bootstrap";


export const NavBar = () => {

    return(

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>    
  <Navbar.Brand href="/">Vegas Bingo</Navbar.Brand>
  <Navbar.Brand href="/cartela">Jogar </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
      <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      <Nav.Link href="/Register"> Register </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>         
    );
};