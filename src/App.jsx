// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Careers from "./Pages/Careers";
import About from "./Pages/About";
import Services from "./Pages/Services";
import CinemaBranding from "./Pages/CinemaBranding";
import RadioBranding from "./Pages/RadioBranding";
import Hoardings from "./Pages/HoardingBranding";
import BusShelterBranding from "./Pages/BusShelterBranding";
import AirportBranding from "./Pages/AirportBranding";
import Helmet from 'react-helmet';
import DigitalMarketingExecutiveRole from "./JD/DigitalExecutive";
import DigitalMarketingManager from "./JD/DigitalManager";
import MediaPlanner from "./JD/MediaPlanner";
import OperationsHead from "./JD/OperationsHead";
import SalesMarketingExecutiveFemale from "./JD/SalesFemale";
import SalesMarketingManager from "./JD/SalesManager";
import TVNewsChanelBranding from "./Pages/TV&NewsBranding"
import ScrollToTop from "./Pages/ScrollToTop";
import BusBranding from "./Pages/BusBranding";
import AutoBranding from "./Pages/AutoBranding";
import CycleeBranding from "./Pages/CycleBranding";
import RailwayyBranding from "./Pages/RailwayBranding";

export default function App() {
  return (

    <Router>
      <Navbar />
        <ScrollToTop smooth offset={80} />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/services" element={< Services />} />
        <Route path="/careers" element={< Careers />} />
        <Route path="/cinema" element={< CinemaBranding />} />
        <Route path="/radio" element={< RadioBranding />} />
        <Route path="/hoardings" element={< Hoardings />} />
        <Route path="/bus-shelter" element={< BusShelterBranding />} />
        <Route path="/AirportBranding" element={< AirportBranding />} />
        <Route path="/Careers/DigitalMarketingExecutive" element={< DigitalMarketingExecutiveRole />} />
        <Route path="/Careers/DigitalMarketingManager" element={< DigitalMarketingManager />} />
        <Route path="/Careers/MediaPlanner" element={< MediaPlanner />} />
        <Route path="/Careers/SalesMarketingExecutiveFemale" element={< SalesMarketingExecutiveFemale/>} />
        <Route path="/Careers/SalesMarketingManager" element={< SalesMarketingManager />} />
        <Route path="/Careers/OperationsHead" element={< OperationsHead />} />
        <Route path="/TVNewsChanelBranding" element={< TVNewsChanelBranding />} />
        <Route path="/BusBranding" element={< BusBranding />} />
        <Route path="/AutoBranding" element={< AutoBranding />} />
        <Route path="/CycleeBranding" element={< CycleeBranding />} />
        <Route path="/RailwayyBranding" element={< RailwayyBranding />} />
      </Routes>
      <Footer />
    </Router>
  );
}
