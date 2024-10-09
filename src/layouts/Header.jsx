import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>25 React Projects</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Project List One" id="dropdown-one">
              <LinkContainer to="/accordian">
                <NavDropdown.Item>Accordian</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/random-color">
                <NavDropdown.Item>Random Color Generator</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/star-rating">
                <NavDropdown.Item>Star Rating</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/image-slider">
                <NavDropdown.Item>Image Slider</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/load-more">
                <NavDropdown.Item>Load More</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Project List Two" id="dropdown-two">
              <LinkContainer to="/tree-view">
                <NavDropdown.Item>Tree View</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/qr-code-generator">
                <NavDropdown.Item>QR Code Generator</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/light-dark-mode">
                <NavDropdown.Item>Color Theme Swtich</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/scroll-indicator">
                <NavDropdown.Item>Scroll Indicator</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/tabs">
                <NavDropdown.Item>Tabs</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Project List Three" id="dropdown-three">
              <LinkContainer to="/modal">
                <NavDropdown.Item>Modal</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/github-profile-finder">
                <NavDropdown.Item>Github Profile Finder</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/search-user-autocomplete">
                <NavDropdown.Item>Search Auto Complete</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
