import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from "@mui/material";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import Navbar from "./components/Header";
import About from "./pages/About";
import "./App.css";


function App() {
  const [position, setPosition] = useState(null);
  const [welcomePage, setWelcomePage] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (fadeOut) {
      const timeout = setTimeout(() => setWelcomePage(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [fadeOut]);

  if (welcomePage) {
     return (
      <Container sx={{ height: "100vh"}}>
      <div
        className={`welcome-screen ${fadeOut ? "fade-out" : "fade-in"}`}>
        <img
          src="/hawaiian-warrior6-landing.png"
          alt="Hawaiian Warrior"
          className="hwn-image"
        />
        <div className="welcome-overlay">
          <button onClick={() => setFadeOut(true)}>Enter</button>
        </div>
      </div>
      </Container>
    );
  }

  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ width: "50vw", height: "100vh" }}>
              <Maps position={position} />
            </div>
            <div style={{ width: "50vw", height: "100vh" }}>
              <SearchBox position={position} setPosition={setPosition} />
            </div>
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/dedication" element={<null />} />
        <Route path="/contact" element={<null />} />
      </Routes>
    </Router>
  );
}

export default App;
