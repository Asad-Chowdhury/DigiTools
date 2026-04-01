import React from "react";
import { use } from "react"; // keep if you're using experimental
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import Tab from "./Tab";

const Products = ({ toolPrices, activeTab, setActiveTab, carts, setCarts }) => {
  // If you're on React experimental, this is fine. Otherwise, fetch with useEffect + useState.
  const prices = use(toolPrices);

  if (activeTab === "Cart") {
    return (
      <div className="max-w-7xl m-auto py-10">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />
        <Cart carts={carts} setCarts={setCarts} />
      </div>
    );
  }

  return (
    <div>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />
      <div className="max-w-7xl m-auto py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {prices.map((price) => (
            <ProductCard
              key={price.id}
              price={price}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
