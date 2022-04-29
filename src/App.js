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

// Gets the correct data for that given day
function validateData(rawData) {

  let returnArray = []

  for(let i = rawData.length - 1; i >= 0; i--){
    if (new Date(rawData[i].timestamp).getDate() === new Date().getDate() && new Date(rawData[i].timestamp).getMonth() === new Date().getMonth()){
      returnArray.push(rawData[i])
    }
  }
  return returnArray;
}

// Calculates what's need for pie Chart Data
function pieChartData(rawData){
  let convertToInt = rawData.map(a => parseInt(a.rating));
  let returnArray = [0, 0, 0, 0, 0];

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

// Calculates what's need for scatter plot
function scatterPlotData (rawData){
  let timeAndReview = rawData.map(i => ({
    x: new Date(i.timestamp).getHours() + (new Date(i.timestamp).getMinutes() / 60),
    y: parseInt(i.rating)
  }));
  return(timeAndReview)
}

// Calculates bar graph data
function barGraphData(rawData){
  let lineAndAverage = rawData.map(i => i.favorite_line);
  // Vegan, Sandwich, Main, Grill, Simple, Pizza, Dessert
  let lineRatingsArray = [0, 0, 0, 0, 0, 0, 0]

  for(let i = 0; i < lineAndAverage.length; i++){
    if(lineAndAverage[i] === "Vegan"){
      lineRatingsArray[0] += 1
    } else if(lineAndAverage[i] === "Sandwich"){
      lineRatingsArray[1] += 1
    } else if(lineAndAverage[i] === "Main"){
      lineRatingsArray[2] += 1
    } else if(lineAndAverage[i] === "Grill"){
      lineRatingsArray[3] += 1
    } else if(lineAndAverage[i] === "Simple"){
      lineRatingsArray[4] += 1
    } else if(lineAndAverage[i] === "Pasta and/or Pizza"){
      lineRatingsArray[5] += 1
    } else if(lineAndAverage[i] === "Dessert"){
      lineRatingsArray[6] += 1
    } else{
      console.log("Oh no! Something's wrong!")
    }
  }

  return(
    [
      {"line": "Vegan", "average_rating": lineRatingsArray[0]},
      {"line": "Sandwich", "average_rating": lineRatingsArray[1]},
      {"line": "Main", "average_rating": lineRatingsArray[2]},
      {"line": "Grill", "average_rating": lineRatingsArray[3]},
      {"line": "Simple", "average_rating": lineRatingsArray[4]},
      {"line": "Pizza/Pasta", "average_rating": lineRatingsArray[5]},
      {"line": "Dessert", "average_rating": lineRatingsArray[6]},
    ]
  );
}

function App() {

  let data = csvData();
  let correctData = validateData(data);
  let pieData = pieChartData(correctData);
  let scatterData = scatterPlotData(correctData);
  let barData = barGraphData(correctData);

  return (
    <>
      <Container fluid className="p-0">
        <CafNavBar />
        <HeadingTextWithDate />
        <div className="chart-container">
          <CafPieChart chart_data={pieData}/>
        </div>
        <Greetings />
        <ScatterPlots scatterPlot={scatterData} barGraph={barData}/>
        <Quote />
        <Footer />
      </Container>
      
    </>
    
  );
}

export default App;
