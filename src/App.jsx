// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Careers from "./Pages/Careers";
import About from "./Pages/About";
import Services from "./Pages/Services";

export default function App() {
  return (
   
    <Router>
 <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
  <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}
