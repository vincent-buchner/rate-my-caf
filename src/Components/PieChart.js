import { PieChart } from "react-minimal-pie-chart";
import { Container, Row, Col } from "react-bootstrap";


function CafPieChart(props) {
    return(
        <>
            <PieChart
                label={(props) => {return props.dataEntry.value - 1}}
                labelStyle={{fontSize: "5px", fontWeight: 600, fill: "#ffffff", textShadow: "1px 1px 0 #000",}}
                radius={40}
                center={[50, 50]}
                viewBoxSize={[100, 100]}
                labelPosition={70}
                animate={true}
                animationDuration={1000}
                animationEasing={"ease-out"}
                // Lower: worst to best
                data={[
                    {key: 1, value: props.chart_data[4] + 1, color: '#9EC2FF'},
                    {key: 2, value: props.chart_data[3] + 1, color: '#7B9FF2'},
                    {key: 3, value: props.chart_data[2] + 1, color: '#4259C3'},
                    {key: 4, value: props.chart_data[1] + 1, color: '#212AA5'},
                    {key: 5, value: props.chart_data[0] + 1, color: '#03018C'},
                ]}
            />

            {/* DATA SCALE */}
            <div className="d-flex justify-content-center">
                <div style={{width: "300px", backgroundColor: "#D3D3D3", borderRadius: "10px"}}>
                    <Container fluid>
                        <Row>
                            <Col className="d-flex justify-content-between align-items-center">
                                <p>Just Get Marty's</p>
                                <p>Pretty Good</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-around align-items-center py-2">
                                    <div style={{width: "20px", height: "20px", backgroundColor: '#03018C', borderRadius: "3px" }}/>
                                    <div style={{width: "20px", height: "20px", backgroundColor: '#212AA5', borderRadius: "3px" }}/>
                                    <div style={{width: "20px", height: "20px", backgroundColor: '#4259C3', borderRadius: "3px" }}/>
                                    <div style={{width: "20px", height: "20px", backgroundColor: '#7B9FF2', borderRadius: "3px" }}/>
                                    <div style={{width: "20px", height: "20px", backgroundColor: '#9EC2FF', borderRadius: "3px" }}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>  
    );
}

export default CafPieChart;