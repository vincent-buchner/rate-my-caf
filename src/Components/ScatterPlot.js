import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function ScatterPlots(props) {

    let data = props.scatterPlot

    let data2 = props.barGraph

    return (
        <>
            <Container fluid>
                <Row className="m-0" >
                        <Col md={6} style={{ height: "500px" }} className="d-flex flex-column justify-content-center align-items-center">
                            <h1 style={{ fontFamily: "mont_bold" }}>Ratings Over Time</h1>
                            <ResponsiveContainer width="100%" height="90%">
                                <ScatterChart
                                    width={400}
                                    height={400}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 20,
                                    }}>
                                    <CartesianGrid />
                                    <XAxis type='number' dataKey='x' domain={[0, 24]} name='time' unit='hr' />
                                    <YAxis type='number' dataKey='y' domain={[0, 6]} name='rating' />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Scatter name="Ratings Over Time" data={data} fill="#005a9c" />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                            <h1 style={{ fontFamily: "mont_bold" }}>Line Favorites</h1>
                            <ResponsiveContainer width="100%" height="90%">
                                <BarChart width={700} height={300} data={data2}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="line" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="average_rating" fill="#005a9c" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                </Row>
            </Container>
        </>
    );
}

export default ScatterPlots;