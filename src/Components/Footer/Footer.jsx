import React from "react";
import transparentLogo from "../../assets/DigiTools-transparent-logo.png";
import instagramLogo from "../../assets/Instagram.png";
import facebookLogo from "../../assets/Facebook.png";
import xLogo from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#101727] pt-30 pb-7.5">
      <div className="text-white font-medium max-w-7xl m-auto grid grid-cols-1 md:grid-cols-7 gap-8 items-start text-center md:text-left">
        <div className="md:col-span-2 space-y-4">
          <img src={transparentLogo} alt="" className="mx-auto md:mx-0" />
          <p className="text-[18px] opacity-80">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-5">
            <h4 className="text-[20px] font-medium">Product</h4>
            <ul className="space-y-5">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[20px] font-medium">Company</h4>
            <ul className="space-y-5">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[20px] font-medium">Resources</h4>
            <ul className="space-y-5">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-5 items-center md:items-start">
          <h4 className="text-[20px] font-medium">Social Links</h4>
          <div className="flex gap-5">
            <img
              src={instagramLogo}
              alt=""
              className="w-8 h-8 cursor-pointer"
            />
            <img src={facebookLogo} alt="" className="w-8 h-8 cursor-pointer" />
            <img src={xLogo} alt="" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="block max-w-7xl mx-auto h-px bg-white/50 my-10"></div>

      <div className="flex flex-col md:flex-row justify-between text-[#fafafa] opacity-50 max-w-7xl m-auto text-center md:text-left gap-4">
        <p>© 2026 Digitools. All rights reserved.</p>
        <ul className="flex flex-col md:flex-row gap-5 items-center">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
