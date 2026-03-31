import React from "react";

const Highlights = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-16 mb-32">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 text-white gap-8 md:gap-0">
        <div className="flex-1 text-center">
          <h2 className="text-4xl md:text-[60px] font-extrabold">50K+</h2>
          <p className="text-lg md:text-[24px] font-medium opacity-80">
            Active Users
          </p>
        </div>

        {/* Horizontal divider for mobile, vertical for desktop */}
        <div className="block md:hidden w-60 h-px bg-white/30"></div>
        <div className="hidden md:block w-px h-20 bg-white/30"></div>

        <div className="flex-1 text-center">
          <h2 className="text-4xl md:text-[60px] font-extrabold">200+</h2>
          <p className="text-lg md:text-[24px] font-medium opacity-80">
            Premium Tools
          </p>
        </div>

        {/* Horizontal divider for mobile, vertical for desktop */}
        <div className="block md:hidden w-60 h-px bg-white/30"></div>
        <div className="hidden md:block w-px h-20 bg-white/30"></div>

        <div className="flex-1 text-center">
          <h2 className="text-4xl md:text-[60px] font-extrabold">4.9</h2>
          <p className="text-lg md:text-[24px] font-medium opacity-80">
            Rating
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
