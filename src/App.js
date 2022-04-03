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



function App() {
  return (
    <>
      <Container fluid className="p-0">
        <CafNavBar />
        <HeadingTextWithDate />
        <div className="chart-container">
          <CafPieChart />
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
