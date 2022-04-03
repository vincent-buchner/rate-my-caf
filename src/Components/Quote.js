import { Row, Container, Card } from 'react-bootstrap';
import '../App.css';

function Quote() {
    return (
        <>
            <Container fluid>
                <Row>
                    <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                        <div className='display-6' style={{fontFamily: "mont_bold"}}>Wanna See More?</div>
                        <p>Send In Your Suggestions via Email: <u>rmc@gmail.com</u></p>
                        <p>Click <a href='#'>Here</a> for Github Repo</p>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Quote;