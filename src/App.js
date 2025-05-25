import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
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
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100vw", height: "100vh" }}>
      <div style={{ width: "50vw", height: "100vh" }}>
        <Maps position={position} />
      </div>
      <div style={{ border: "2px solid red", width: "50vw", height: "100vh" }}>
        <SearchBox position={position} setPosition={setPosition} />
      </div>
    </div>
  );
}

export default App;
