import { PieChart } from "react-minimal-pie-chart";
import { Container, Row, Col } from "react-bootstrap";

function CafPieChart() {
    return(
        <>
            <PieChart
                label={(props) => {return props.dataEntry.value}}
                labelStyle={{fontSize: "5px", fontWeight: 600, fill: "#ffffff"}}
                radius={40}
                center={[50, 50]}
                viewBoxSize={[100, 100]}
                labelPosition={70}
                data={[
                    {key: 1, value: 5, color: '#0083e2'},
                    {key: 2, value: 10, color: '#0079d1'},
                    {key: 3, value: 15, color: '#0072c5'},
                    {key: 4, value: 20, color: '#0064ad'},
                    {key: 5, value: 25, color: '#005a9c'},
                ]}
            />

            {/* DATA SCALE */}
            <div className="d-flex justify-content-center">
                <div style={{height: "50px", width: "300px", backgroundColor: "#D3D3D3", borderRadius: "10px"}}>
                    <Container fluid>
                        <Row>
                            <Col className="d-flex justify-content-between">
                                <p>Just Get Marty's</p>
                                <p>Pretty Good</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                
                                <span style={{width: "20px", height: "20px", backgroundColor: '#0083e2', }}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>  
    );
}

export default CafPieChart;