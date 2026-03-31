import React from "react";
import { use } from "react";
import PricingCard from "./PricingCard";

const Pricing = ({ modelPrices }) => {
  const prices = use(modelPrices);
  return (
    <div className="max-w-7xl m-auto">
      <div className="max-w-7xl m-auto my-15 space-y-5">
        <h2 className="text-3xl md:text-[48px] font-extrabold text-center">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl md:text-[16px] font-medium text-center text-[#627983]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 content-between">
        {prices.map((price) => {
          return <PricingCard price={price}></PricingCard>;
        })}
      </div>
    </div>
  );
};

export default Pricing;
