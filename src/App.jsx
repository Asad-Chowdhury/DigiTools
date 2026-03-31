import { useState } from "react";
import { Suspense } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Highlights from "./Components/Highlights/Highlights";
import Products from "./Components/Products/Products";
import GetStarted from "./Components/GetStarted/GetStarted";
import Pricing from "./Components/Pricing/Pricing";

const getPrices = async () => {
  const res = await fetch("/pricing.json");
  return res.json();
};

const spinner = (
  <div className="flex justify-center m-10">
    <span>Price Loading</span>
    <span className="loading loading-ball loading-xs"></span>
    <span className="loading loading-ball loading-sm"></span>
    <span className="loading loading-ball loading-md"></span>
    <span className="loading loading-ball loading-lg"></span>
    <span className="loading loading-ball loading-xl"></span>
  </div>
);

function App() {
  const modelPrices = getPrices();

  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className="divider"></div>
        <HeroBanner></HeroBanner>
        <Highlights></Highlights>
        <Products></Products>
        <GetStarted></GetStarted>
        <Suspense fallback={spinner}>
          <Pricing modelPrices={modelPrices}></Pricing>
        </Suspense>
      </div>
    </>
  );
}

export default App;
