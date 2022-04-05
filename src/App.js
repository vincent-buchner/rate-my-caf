import CafNavBar from "./Components/MainNavBar";
import HeadingTextWithDate from "./Components/HeadingWithDate";
import CafPieChart from "./Components/PieChart"
import Greetings from "./Components/Jumbotron"
import ScatterPlots from "./Components/ScatterPlot";
import Quote from "./Components/Quote";
import Footer from "./Components/Footer";
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import { PieChart } from "react-minimal-pie-chart";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Row, Col } from 'react-bootstrap';
import { csv } from 'd3';
import React, { useEffect, useState } from "react";



function App() {

  const [data, setData] = useState([]);

  let csv_link = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNZXfIUrrmIFGH0jX1JvvYBHnKGFsgSWVhX_QfTMqR-c_0XFCbpTJ8GS063dadElo5y3ab4kawK96M/pub?gid=168020417&single=true&output=csv"
  useEffect(() => {
    csv(csv_link).then(data => {
      setData(data);
    });
  }, []);

  console.log(data)

  return (
    <>
      <Container fluid className="p-0">
        <CafNavBar />
        <HeadingTextWithDate />
        <div className="chart-container">
          <CafPieChart chart_data={data}/>
          <Greetings />
          <ScatterPlots />
          <Quote />
          <Footer />
        </div>
        
      </Container>
      
    </>
    
  );
}

export default App;
