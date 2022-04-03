import { Row, Container, Card } from 'react-bootstrap';

function Quote() {
    return (
        <>
            <Container fluid style={{ width: "80%" }}>
                <Row>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className='mb-0'>
                                <p><b>It's f*cking RAW...</b></p>
                                <footer className='blockquote-footer'>
                                    Some angry British guy
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
}

export default Quote;