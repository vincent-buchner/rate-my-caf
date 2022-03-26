import '../App.css';
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';

function CafNavBar() {
    return (
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="#home" style={{ fontFamily: "logo_font" }}>Rate My Caf</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Luther College</Nav.Link>
                        <Nav.Link href="#pricing">Stats</Nav.Link>
                        <NavDropdown title="Eating Times" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lunch</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Learn More</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            <Button variant='outline-primary'>SUBMIT REVIEW</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CafNavBar;