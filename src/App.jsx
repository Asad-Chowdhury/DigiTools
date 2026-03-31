import { useState } from "react";
import { Suspense } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Highlights from "./Components/Highlights/Highlights";
import Products from "./Components/Products/Products";
import GetStarted from "./Components/GetStarted/GetStarted"
import Pricing from "./Components/Pricing/Pricing"


function App() {

  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className="divider"></div>
        <HeroBanner></HeroBanner>
        <Highlights></Highlights>
        <Products></Products>
        <GetStarted></GetStarted>
        <Pricing></Pricing>
      </div>
    </>
  );
}

export default App;
