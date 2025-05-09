import React from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";

function App() {
  return (
      <div style= {{ 
        display: 'flex', 
        flexDirection: "row", 
        width: '100vw',
        height: '100vh',
      }}
        >
        <div style= {{ width: '50vw', height: '100vh' }}>
        <Maps />
      </div>
      <div style= {{ border: '2px solid red', width: '50vw' }}>
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
