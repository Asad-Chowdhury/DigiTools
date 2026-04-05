import { useState } from "react";
import { Suspense } from "react";
import { useRef } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Highlights from "./Components/Highlights/Highlights";
import Products from "./Components/Products/Products";
import Cart from "./Components/Products/Cart";
import GetStarted from "./Components/GetStarted/GetStarted";
import Pricing from "./Components/Pricing/Pricing";
import ReadyToTransform from "./Components/ReadyToTransform/ReadyToTransform";
import Footer from "./Components/Footer/Footer";

const getPrices = async () => {
  const res = await fetch("/pricing.json");
  return res.json();
};

const getToolPrices = async () => {
  const res = await fetch("./productPrice.json");
  return res.json();
};

const spinner = (
  <div className="flex justify-center m-10">
    <span>LOADING</span>
    <span className="loading loading-ball loading-xs"></span>
    <span className="loading loading-ball loading-sm"></span>
    <span className="loading loading-ball loading-md"></span>
    <span className="loading loading-ball loading-lg"></span>
    <span className="loading loading-ball loading-xl"></span>
  </div>
);

function App() {
  const simplePrices = getPrices();
  const toolPrices = getToolPrices();
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  const productsRef = useRef(null);

  const handleScrollToCart = () => {
    setActiveTab("Cart");

    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <div>
        <NavBar carts={carts} onCartClick={handleScrollToCart} />
        <div className="divider"></div>
        <HeroBanner></HeroBanner>
        <Highlights></Highlights>
        <div ref={productsRef}>
          <Suspense fallback={spinner}>
            <Products
              toolPrices={toolPrices}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              carts={carts}
              setCarts={setCarts}
            />
          </Suspense>
        </div>
        <GetStarted></GetStarted>
        <Suspense fallback={spinner}>
          <Pricing simplePrices={simplePrices}></Pricing>
        </Suspense>
        <ReadyToTransform></ReadyToTransform>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
