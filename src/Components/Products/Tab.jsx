import React from "react";

const Tab = ({ activeTab, setActiveTab, carts }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-3xl md:text-[48px] text-center font-extrabold text-[#101727]">
        Premium Digital Tools
      </h2>
      <p className="text-lg text-center text-[#627382]">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="flex justify-center gap-5">
        <button
          className={`btn rounded-full w-40 ${
            activeTab === "Products"
              ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none"
              : ""
          }`}
          onClick={() => setActiveTab("Products")}
        >
          Products
        </button>
        <button
          className={`btn rounded-full w-40 ${
            activeTab === "Cart"
              ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none"
              : ""
          }`}
          onClick={() => setActiveTab("Cart")}
        >
          Cart ({carts.length})
        </button>
      </div>
    </div>
  );
};

export default Tab;
