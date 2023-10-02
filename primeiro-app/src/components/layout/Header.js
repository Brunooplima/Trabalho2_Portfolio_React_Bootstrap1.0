import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Head.css";

function Header() {
  return (
    <>
      <div className="letras">
        <a className="letras-a">
          <Navbar bg="#" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/home">Bruno Lima</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Quem Sou
                </Nav.Link>
                <Nav.Link as={Link} to="/projetos">
                  Projetos
                </Nav.Link>
                <Nav.Link as={Link} to="/parceiros">
                  Parceiros
                </Nav.Link>
                <Nav.Link as={Link} to="/contatos">
                  Contatos
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </a>
      </div>
    </>
  );
}

export default Header;
