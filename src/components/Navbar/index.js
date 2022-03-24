import  { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
<<<<<<< Updated upstream
=======
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

    api.get('/auth', config).then((response) => {
      setLogged(true);
      setShowLogin(false);
      setUser(response.data);
    });
  }, [logged, user.firstName]);
>>>>>>> Stashed changes

  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Vegas Bingo</Navbar.Brand>
        {/* <Navbar.Brand href="/Game">Jogar </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Register"> Register </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};