import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Snackbar() {
  

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
    <Container>
      <span className="material-symbols-outlined text-blue-500 m-1">pets</span>
      <Navbar.Brand href="#home">MeowSpace</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Friends</Nav.Link>
          <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Knock Something off a Table</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Zoom Around the Room
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Take a Nap</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Your Account
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Snackbar
