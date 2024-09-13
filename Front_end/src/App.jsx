import React from "react";
import "./App.css";
import Carousel from "./components/atoms/Carousel";
import Navbar from "./components/molecules/Navbar";
import MapDisplay from "./components/atoms/MapDisplay";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        <MapDisplay />
      </div>
    </>
  );
}

export default App;
