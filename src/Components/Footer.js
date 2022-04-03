import { Row, Col, Container } from "react-bootstrap";

function Footer() {
    return(
        <>
            <Container fluid>
                <Row style={{backgroundColor: "lightgray"}}>
                    <Col>
                        <h1>Hello World</h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;