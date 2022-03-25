import CafNavBar from "./Components/MainNavBar";
import HeadingTextWithDate from "./Components/HeadingWithDate";
import CafPieChart from "./Components/PieChart"
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import { PieChart } from "react-minimal-pie-chart";

import { Row, Col } from 'react-bootstrap';


function App() {
  return (
    <>
      <CafNavBar />
      <HeadingTextWithDate date="Friday, March 25th" />
      <Row>
        <div className="chart-container">
          <CafPieChart />
        </div>
      </Row>
      
    </>
    
  );
}

export default App;
