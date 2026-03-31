import React from "react";
import { Check } from "lucide-react";
const PricingCard = ({ price }) => {
  const features = price.features;
  const popular = price.isPopular;
  const popularCard = (
    <div className="relative flex flex-col p-6 rounded-2xl shadow-2xl space-y-6 bg-linear-to-br from-[#4f39f6] to-[#9514fa] text-white">
      {/* Badge */}
      <div className="absolute left-1/2 -top-3 transform -translate-x-1/2">
        <span className="px-4 py-1 bg-[#fff3d9] text-[#101727] rounded-full text-sm font-medium shadow-sm">
          Most Popular
        </span>
      </div>

      <div className="py-2">
        <h2 className="text-2xl font-bold">{price.plan}</h2>
        <p className="text-[#ffffffcc]">{price.tagline}</p>
      </div>

      <p className="text-[40px] font-bold">
        ${price.price}
        <span className="text-[20px] text-[#ffffffcc] font-medium">/Month</span>
      </p>

      <ul className="grow space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3 items-start">
            <Check className="text-[#ffffff] h-5 w-5 mt-1" />
            <span className="text-white">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="btn w-full rounded-full bg-white text-[#4f39f6] font-medium py-3">
        {price.ctaText}
      </button>
    </div>
  );

  const nonPopularCard = (
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
        {price.ctaText}
      </button>
    </div>
  );
  return popular ? popularCard : nonPopularCard;
};

export default PricingCard;
