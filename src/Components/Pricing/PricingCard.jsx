import React from "react";
import { Check } from "lucide-react";
const PricingCard = ({ price }) => {
  console.log(price.features);
  const features = price.features;
  return (
    <div className="flex flex-col p-6 border-[#f2f2f2FF] border-2 rounded-2xl shadow-2xl space-y-6">
      <div className="py-2">
        <h2 className="text-2xl text-bold">{price.plan}</h2>
        <p className="text-[#627382]">{price.tagline}</p>
      </div>
      <p className="text-[40px] font-bold">
        ${price.price}
        <span className="text-[20px] text-[#627382] font-medium">/Month</span>
      </p>
      <ul className="grow">
        {features.map((feature) => {
          return (
            <li className="flex gap-2">
              <Check className="text-[#30B868] h-5 w-5" />
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>
      <button className="btn w-full rounded-full bg-[#9514fa] text-white font-medium">
        Get Started Free
      </button>
    </div>
  );
};

export default PricingCard;
