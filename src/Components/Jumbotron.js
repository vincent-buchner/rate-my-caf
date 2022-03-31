import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function Greetings() {
    return (
        <>
            <Container fluid className='p-0 my-5' style={{ width: "100%", height: "600px", backgroundColor: "#005a9c" }}>
                <Row style={{ margin: "0px" }}>
                    <Col className="d-flex flex-column justify-content-center align-items-center py-4 text-center">
                        <h1 style={{ fontFamily: "mont_bold", color: "white" }}>Find out what students think before you decide to eat there!</h1>
                        <div style={{width: "100%"}}className='d-flex flex-row justify-content-around align-items-center py-5'>
                            <Col md={4} className='d-flex justify-content-center'>
                                <div style={{ width: "200px", height: "200px", backgroundColor: "white", borderRadius: "100px" }}>
                                </div>
                            </Col>
                            <Col md={4} className='d-flex justify-content-center'>
                                <div style={{ width: "200px", height: "200px", backgroundColor: "white", borderRadius: "100px" }}>
                                </div>
                            </Col>
                            <Col md={4} className='d-flex justify-content-center'>
                                <div style={{ width: "200px", height: "200px", backgroundColor: "white", borderRadius: "100px" }}>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Greetings;