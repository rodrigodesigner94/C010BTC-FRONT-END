import styled from 'styled-components';
import  { Navbar, Container, Nav } from "react-bootstrap";

const ContainerS = styled(Container)`
  align-items: center;

  a {
    color: #f2d974;
    margin: 0.35rem;
    text-decoration: none;
  }
`;

export const NavBar = () => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ContainerS>    
        <a href="/">Vegas Bingo</a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <a href="/login">Entre</a>
            <a href="/register">Cadastre-se</a>
          </Nav>
        </Navbar.Collapse>
      </ContainerS>
    </Navbar>
  );
};