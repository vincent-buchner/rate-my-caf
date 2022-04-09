import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

function Greetings() {
    return (
        <>
            <Container fluid className='p-0 my-5' style={{ width: "100%", height: "fit-content", backgroundColor: "#005a9c" }}>
                <Row className='m-0'>
                    <Col lg={6} className="d-flex flex-column justify-content-center align-items-center py-5">
                        <div className='display-2 text-center pb-3' style={{fontFamily: "mont_bold", color: "white"}}>Find out what students think before you decide to eat there!</div>
                        
                            <Button href='https://docs.google.com/spreadsheets/d/e/2PACX-1vQNZXfIUrrmIFGH0jX1JvvYBHnKGFsgSWVhX_QfTMqR-c_0XFCbpTJ8GS063dadElo5y3ab4kawK96M/pub?gid=168020417&single=true&output=csv'
                                    size="lg" 
                                    variant="outline-light" 
                                    target='_blank'>SUBMIT REVIEW
                                    </Button>
                        
                        
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        <img 
                            src='https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                            className='img-fluid p-5'
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