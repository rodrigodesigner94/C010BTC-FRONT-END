import  { Navbar, Container, Nav, } from "react-bootstrap"

export const NavBar = () => {

    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Bingo Game</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Log in</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Cadastre-se
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
          
    );
};