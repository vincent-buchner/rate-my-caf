import { PieChart } from "react-minimal-pie-chart";
import { Container, Row, Col } from "react-bootstrap";


function CafPieChart(props) {
    return(
        <>
            <PieChart
                label={(props) => {return props.dataEntry.value - 1}}
                labelStyle={{fontSize: "5px", fontWeight: 600, fill: "#ffffff"}}
                radius={40}
                center={[50, 50]}
                viewBoxSize={[100, 100]}
                labelPosition={70}
                animate={true}
                animationDuration={1000}
                animationEasing={"ease-out"}
                data={[
                    {key: 1, value: props.chart_data[4] + 1, color: '#0083e2'},
                    {key: 2, value: props.chart_data[3] + 1, color: '#0079d1'},
                    {key: 3, value: props.chart_data[2] + 1, color: '#0072c5'},
                    {key: 4, value: props.chart_data[1] + 1, color: '#0064ad'},
                    {key: 5, value: props.chart_data[0] + 1, color: '#005a9c'},
                ]}
            />

            {/* DATA SCALE */}
            <div className="d-flex justify-content-center">
                <div style={{height: "fit-content", width: "300px", backgroundColor: "#D3D3D3", borderRadius: "10px"}}>
                    <Container fluid>
                        <Row>
                            <Col className="d-flex justify-content-between">
                                <p>Just Get Marty's</p>
                                <p>Pretty Good</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-around align-items-center py-2">
                                <span style={{width: "20px", height: "20px", backgroundColor: '#005a9c', borderRadius: "3px" }}/>
                                <span style={{width: "20px", height: "20px", backgroundColor: '#0064ad', borderRadius: "3px" }}/>
                                <span style={{width: "20px", height: "20px", backgroundColor: '#0072c5', borderRadius: "3px" }}/>
                                <span style={{width: "20px", height: "20px", backgroundColor: '#0079d1', borderRadius: "3px" }}/>
                                <span style={{width: "20px", height: "20px", backgroundColor: '#0083e2', borderRadius: "3px" }}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>  
    );
}

export default CafPieChart;