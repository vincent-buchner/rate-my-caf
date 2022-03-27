import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function Greetings() {
    return(
        <>
            <Container fluid className='p-0 my-5' style={{width: "100%", height: "500px", backgroundColor: "#005a9c"}}>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center py-4 text-center">
                        <h1 style={{fontFamily: "mont_bold", color: "white"}}>Find out what students think before you decide to eat there!</h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Greetings;