import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import logo from './logo.svg';
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>

      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> React site
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/aboutus" className="nav-link">About us</Link>
              <Link to="/contacts" className="nav-link">Contacts</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                name="search-field"
              />
              <Button variant="outline-info">Search</Button>
            </Form>

          </Navbar.Collapse>

        </Container>
      </Navbar>

    </div>
  );
}