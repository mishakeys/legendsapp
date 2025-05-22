import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";

function App() {
  const [position, setPosition] = useState(null);
  
  return (
      <div style= {{ 
        display: 'flex', 
        flexDirection: "row", 
        width: '100vw',
        height: '100vh',
      }}
        >
        <div style= {{ width: '100vw', height: '100vh' }}>
        <Maps position={position} />
      </div>
      <div style= {{ border: '2px solid blue', width: '50vw', height: '100vh' }}>
        <SearchBox position={position} setPosition={setPosition} />
      </div>
    </div>
  );
}

export default App;
