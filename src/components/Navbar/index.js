import api from "../../services/Api";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.token;

    if (!user.firstName) {
      setShowLogin(true);
      setLogged(false);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api.get("/auth", config).then((response) => {
      setLogged(true);
      setShowLogin(false);
      setUser(response.data);
    });
  }, [logged, user.firstName]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Vegas Bingo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          {showLogin && (
            <Nav>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Register"> Register </Nav.Link>
            </Nav>
          )}
          {logged && (
            <Nav>
              <Nav.Link>{`Usuario: ${user.firstName}`}</Nav.Link>
              <Nav.Link>{`Saldo: R$${user.saldo}`}</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
