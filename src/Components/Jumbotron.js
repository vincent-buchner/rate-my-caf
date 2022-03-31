import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

function Greetings() {
    return (
        <>
            <Container fluid className='p-0 my-5' style={{ width: "100%", height: "fit-content", backgroundColor: "#005a9c" }}>
                <Row className='m-0'>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <div className='display-2 text-center py-5' style={{fontFamily: "mont_bold", color: "white"}}>Find out what students think before you decide to eat there!</div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img 
                            src='https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                            className='img-fluid hover-shadow p-5'
                            alt='Burger!'
                            style={{borderRadius: "60px"}}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Greetings;