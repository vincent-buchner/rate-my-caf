import { Row, Col, Container } from "react-bootstrap";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub, BsGoogle } from "react-icons/bs";

function Footer() {
    return (
        <>
            <Container fluid>
                <Row className='' style={{ backgroundColor: "lightgray" }}>
                    {/* <!-- Footer --> */}
                    <footer className="text-center text-lg-start bg-light text-muted">
                        {/* <!-- Section: Social media --> */}
                        <section
                            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                        >
                            {/* <!-- Left --> */}
                            <div className="me-5 d-none d-lg-block">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            {/* <!-- Left --> */}

                            {/* <!-- Right --> */}
                            <div>
                                <a href="https://twitter.com/ActuallyVin" target="_blank" className="me-4 text-reset">
                                    <BsTwitter />
                                </a>
                                <a href="https://www.instagram.com/actual_vincent/" target="_blank" className="me-4 text-reset">
                                    <BsInstagram />
                                </a>
                                <a href="https://www.linkedin.com/in/vincent-buchner-28a49a213/" target="_blank" className="me-4 text-reset">
                                    <BsLinkedin />
                                </a>
                                <a href="https://github.com/vincent-buchner" target="_blank" className="me-4 text-reset">
                                    <BsGithub />
                                </a>
                            </div>
                            {/* <!-- Right --> */}
                        </section>
                        {/* <!-- Section: Social media --> */}

                        {/* <!-- Section: Links  --> */}
                        <section className="">
                            <div className="container text-center text-md-start mt-5">
                                {/* <!-- Grid row --> */}
                                <div className="row mt-3">
                                    {/* <!-- Grid column --> */}
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        {/* <!-- Content --> */}
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Rate My Caf
                                        </h6>
                                        <p>
                                        Rate My Caf allows students to see whether or 
                                        not they would like to go to the cafeteria 
                                        based on reviews. Students can choose from a 
                                        variety of cuisines, read reviews, and find out 
                                        if the place is really worth visiting.
                                        </p>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    {/* <!-- Grid column --> */}
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            LINKS
                                        </h6>
                                        <p>
                                            <a href="#" className="text-reset"><i>Top Of Page</i></a>
                                        </p>
                                        <p>
                                            <a href="https://www.luther.edu" target="_blank" className="text-reset">Luther College</a>
                                        </p>
                                        <p>
                                            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNZXfIUrrmIFGH0jX1JvvYBHnKGFsgSWVhX_QfTMqR-c_0XFCbpTJ8GS063dadElo5y3ab4kawK96M/pub?gid=168020417&single=true&output=csv" className="text-reset">Stats</a>
                                        </p>
                                        <p>
                                            <a href="https://forms.gle/pTHK3B3A4ba9z5RcA" className="text-reset" target="_blank">Submit Form</a>
                                        </p>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    {/* <!-- Grid column --> */}
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            About
                                        </h6>
                                        <p>
                                            <a href="https://www.linkedin.com/in/vincent-buchner-28a49a213/" className="text-reset" target="_blank">The Developer</a>
                                        </p>
                                        <p>
                                            <a href="https://github.com/vincent-buchner" className="text-reset" target="_blank">Learn More</a>
                                        </p>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    {/* <!-- Grid column --> */}
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Contact
                                        </h6>
                                        <p>
                                            <BsGoogle />
                                            &emsp;ratemycaf.suggestions@gmail.com
                                        </p>
                                        <p>Visit our social media!</p>
                                    </div>
                                    {/* <!-- Grid column --> */}
                                </div>
                                {/* <!-- Grid row --> */}
                            </div>
                        </section>
                        {/* <!-- Section: Links  --> */}

                        {/* <!-- Copyright --> */}
                        <div className="text-center p-4">
                            © 2022 Copyright:
                            Rate My Caf
                        </div>
                        {/* <!-- Copyright --> */}
                    </footer>
                    {/* <!-- Footer --> */}


                </Row>
            </Container>
        </>
    );
}

export default Footer;