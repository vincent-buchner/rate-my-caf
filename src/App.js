import CafNavBar from "./Components/MainNavBar";
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import { PieChart } from "react-minimal-pie-chart";
import CafPieChart from "./Components/PieChart"

function App() {
  return (
    <>
      <CafNavBar />
      <CafPieChart />
    </>
    
  );
}

export default App;
