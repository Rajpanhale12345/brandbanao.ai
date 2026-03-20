import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Careers from "./Pages/Careers";
import About from "./Pages/About";
import Services from "./Pages/Services";
import HoardingBranding from "./Pages/HoardingBranding";
import CinemaBranding from "./Pages/CinemaBranding";
import RadioBranding from "./Pages/RadioBranding";
import BusShelterBranding from "./Pages/BusShelterBranding";
import AirportBranding from "./Pages/AirportBranding";
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
import CycleBranding from "./Pages/CycleBranding";
import RailwayBranding from "./Pages/RailwayBranding";
import DigitalMarketing from "./Pages/DigitalMarketing";
import WebDevelopment from "./Pages/WebDevelopment";
import NotFound from "./Pages/NotFound";
import Sitemap from "./Pages/Sitemap";
import HoardingBrandingCity from "./Pages/HoardingBrandingCity";


export default function App() {
  return (

    <Router>
      <Navbar />
      <ScrollToTop smooth offset={80} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/cinema" element={<CinemaBranding />} />
        <Route path="/radio" element={<RadioBranding />} />
 
        <Route path="/hoardings" element={<HoardingBranding />} />
        <Route path="/hoardings/:citySlug" element={<HoardingBrandingCity />} />

        <Route path="/bus-shelter" element={<BusShelterBranding />} />
        <Route path="/airport-branding" element={<AirportBranding />} />

        <Route path="/careers/digital-marketing-executive" element={<DigitalMarketingExecutiveRole />} />
        <Route path="/careers/digital-marketing-manager" element={<DigitalMarketingManager />} />
        <Route path="/careers/media-planner" element={<MediaPlanner />} />
        <Route path="/careers/sales-marketing-executive-female" element={<SalesMarketingExecutiveFemale />} />
        <Route path="/careers/sales-marketing-manager" element={<SalesMarketingManager />} />
        <Route path="/careers/operations-head" element={<OperationsHead />} />

        <Route path="/tv-news-chanel-branding" element={<TVNewsChanelBranding />} />
        <Route path="/bus-branding" element={<BusBranding />} />
        <Route path="/auto-branding" element={<AutoBranding />} />
        <Route path="/cycle-branding" element={<CycleBranding />} />
        <Route path="/railway-branding" element={<RailwayBranding />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/sitemap" element={<Sitemap />} />
 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
