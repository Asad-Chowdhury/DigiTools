import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Highlights from "./Components/Highlights/Highlights";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className="divider"></div>
        <HeroBanner></HeroBanner>
        <Highlights></Highlights>
      </div>
    </>
  );
}

export default App;
