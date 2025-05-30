import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBox from "./components/SearchBox";
import Maps from "./components/Maps";
import Navbar from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LegendDetail from "./components/LegendDetail";
import { Box, Button, Container, CssBaseline } from "@mui/material";
import "./App.css";

function App() {
  const [position, setPosition] = useState(null);
  const [nearbyLegends, setNearbyLegends] = useState([]);
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
      <Box
        className={`welcome-screen ${fadeOut ? "fade-out" : "fade-in"}`}
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "background.default",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/hawaiian-warrior6-landing.png"
          alt="Hawaiian Warrior"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <Box
          className="welcome-overlay"
          sx={{
            position: "absolute",
            bottom: 500,
            left: 50,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: 0,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setFadeOut(true)}
            sx={{ px: 4, py: 1.5, fontWeight: "bold" }}
          >
            Enter
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Box sx={{ display: "flex", height: "100vh" }}>
              <Box sx={{ width: "50vw", height: "100vh" }}>
                <Maps position={position} nearbyLegends={nearbyLegends} />
              </Box>
              <Box sx={{ width: "50vw", height: "100vh" }}>
                <SearchBox 
                position={position} 
                setPosition={setPosition} 
                nearbyLegends={nearbyLegends} 
                setNearbyLegends={setNearbyLegends} />
              </Box>
            </Box>
          }
        />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/legend/:id" element={<LegendDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
