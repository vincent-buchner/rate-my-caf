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
import { csv, map } from 'd3';
import React, { useEffect, useState } from "react";

function csvData(){
  const [data, setData] = useState([]);
  let csv_link = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNZXfIUrrmIFGH0jX1JvvYBHnKGFsgSWVhX_QfTMqR-c_0XFCbpTJ8GS063dadElo5y3ab4kawK96M/pub?gid=168020417&single=true&output=csv"
  useEffect(() => {
    csv(csv_link).then(data => {
      setData(data);
    });
  }, []);

  return(data);
}

function pieChartData(rawData){
  let convertToInt = rawData.map(a => parseInt(a.rating))
  let returnArray = [0, 0, 0, 0, 0]

  for (let i = 0; i < convertToInt.length; i++ ){
    if(convertToInt[i] == 1){
      returnArray[0] += 1;
    } else if(convertToInt[i] == 2) {
      returnArray[1] += 1
    } else if(convertToInt[i] == 3) {
      returnArray[2] += 1
    } else if(convertToInt[i] == 4) {
      returnArray[3] += 1
    } else if(convertToInt[i] == 5) {
      returnArray[4] += 1
    } else {
      console.log("Somthing is wrong...")
    }
  }

  return(returnArray);
}

function scatterPlotData (rawData){
  let timeAndReview = rawData.map(i => ({
    x: new Date(i.timestamp).getHours(),
    y: parseInt(i.rating)
  }));
  return(timeAndReview)
}



function App() {

  let data = csvData()
  let pieData = pieChartData(data)
  let scatterData = scatterPlotData(data)

  return (
    <>
      <Container fluid className="p-0">
        <CafNavBar />
        <HeadingTextWithDate />
        <div className="chart-container">
          <CafPieChart chart_data={pieData}/>
          <Greetings />
          <ScatterPlots scatterPlot={scatterData} />
          <Quote />
          <Footer />
        </div>
        
      </Container>
      
    </>
    
  );
}

export default App;
