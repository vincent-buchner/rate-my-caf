import '../App.css';
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';

function CafNavBar() {
    return (
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="#" style={{ fontFamily: "logo_font" }}>Rate My Caf</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://www.luther.edu/" target="_blank">Luther College</Nav.Link>
                        <Nav.Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNZXfIUrrmIFGH0jX1JvvYBHnKGFsgSWVhX_QfTMqR-c_0XFCbpTJ8GS063dadElo5y3ab4kawK96M/pub?gid=168020417&single=true&output=csv">Stats</Nav.Link>
                        <NavDropdown title="Eating Times" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14809&locationId=51809001&whereami=https://luther.sodexomyway.com/dining-near-me/resident-dining" target="_blank">Breakfast</NavDropdown.Item>
                            <NavDropdown.Item href="https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14809&locationId=51809001&whereami=https://luther.sodexomyway.com/dining-near-me/resident-dining" target="_blank">Lunch</NavDropdown.Item>
                            <NavDropdown.Item href="https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14809&locationId=51809001&whereami=https://luther.sodexomyway.com/dining-near-me/resident-dining" target="_blank">Dinner</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Learn More</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://forms.gle/8duWCfQPUNGfumhN6" target="_blank">
                            <Button variant='outline-primary'>SUBMIT REVIEW</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CafNavBar;