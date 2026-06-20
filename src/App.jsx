import { Routes, Route } from "react-router-dom";

import Navbar from "./tempComponents/Navbar";

import Home from "./tempPages/Home";
import Portfolio from "./tempPages/Portfolio";
import Services from "./tempPages/Services";
import Contact from "./tempPages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;