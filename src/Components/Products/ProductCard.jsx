import React, { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const ProductCard = ({ price, carts, setCarts }) => {
  const features = price.features || [];

  const getBadgeStyles = (type) => {
    switch (type) {
      case "best-seller":
        return "bg-[#FFF6E5] text-[#F59E0B]";
      case "popular":
        return "bg-[#F3E8FF] text-[#9333EA]";
      case "new":
        return "bg-[#DCFCE7] text-[#22C55E]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const formatPeriod = (period) => {
    if (period === "monthly") return "Mo";
    if (period === "yearly") return "Yr";
    if (period === "one-time") return "One-Time";
    return period;
  };

  const alreadyInCart = carts.some((item) => item.id === price.id);
  const [isSubscribed, setIsSubscribed] = useState(alreadyInCart);

  const handleSubscribeBtn = () => {
    if (carts.some((item) => item.id === price.id)) {
      toast.error("Item already in cart");
      setIsSubscribed(true);
      return;
    }
    setCarts([...carts, price]);
    setIsSubscribed(true);
    toast.success("Product added to cart");
  };

  return (
    <div className="flex flex-col p-6 sm:p-8 bg-white rounded-3xl border border-[#f2f2f2] shadow-sm hover:shadow-md transition-shadow h-full text-left">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#fafafa] border border-[#f2f2f2]">
          <img
            src={price.icon}
            alt={price.name}
            className="w-6 h-6 object-contain"
          />
        </div>

        {price.tag && (
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-medium ${getBadgeStyles(
              price.tagType,
            )}`}
          >
            {price.tag}
          </span>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-[20px] font-bold text-[#101727] mb-2">
          {price.name}
        </h2>
        <p className="text-[#627983] text-[14px] leading-relaxed line-clamp-2">
          {price.description}
        </p>
      </div>

      <div className="mb-6 flex items-baseline">
        <span className="text-[32px] font-bold text-[#101727]">
          ${price.price}
        </span>
        <span className="text-[#627983] text-[14px] ml-1 font-medium">
          /{formatPeriod(price.period)}
        </span>
      </div>

      <ul className="space-y-3 mb-8 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3 items-start">
            <Check
              className="text-[#30B868] h-5 w-5 shrink-0"
              strokeWidth={2.5}
            />
            <span className="text-[#627983] text-[14px]">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className="btn w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none hover:opacity-90 font-medium py-3 mt-auto shadow-md min-h-12 h-auto"
        onClick={handleSubscribeBtn}
      >
        {isSubscribed ? "Subscription Selected" : "Subscribe Now"}
      </button>
    </div>
  );
};

export default ProductCard;
