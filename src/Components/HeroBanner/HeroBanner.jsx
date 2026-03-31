import "../../../src/index.css";
import React from "react";
import heroDot from "../../assets/dot.png";
import { Play } from "lucide-react";
import bannerImage from "../../assets/banner.png";

const HeroBanner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 max-w-7xl m-auto my-15 items-center p-10">
      <div>
        <div className="space-y-4 flex flex-col justify-center items-center md:justify-start md:items-start">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#E1E7FF] w-fit rounded-full justify-center">
            <img src={heroDot} alt="image_dot" className="w-5" />
            <p className="text-[#4f39f6] text-xs">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="text-2xl md:text-[72px] font-extrabold">
            Supercharge Your <br />
            <span className="text-[#4f39f6]">Digital Workflow</span>
          </h1>
          <p className="text-[18px] text-center md:text-left">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>
        <div className="flex gap-5 my-10 justify-center md:justify-start">
          <button className="btn bg-[#4f39f6] rounded-full text-white font-medium">
            Explore Products
          </button>
          <button className="flex gap-2 btn bg-none hover:bg-[#4f39f6] rounded-full text-[#4f39f6] hover:text-white font-medium border-[#4f39f6]">
            <Play className="w-5" />
            Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img src={bannerImage} alt="" className="object-contain p-5" />
      </div>
    </div>
  );
};

export default HeroBanner;
