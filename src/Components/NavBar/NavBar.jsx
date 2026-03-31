import React from "react";
import logoImage from "../../assets/digitools-logo.png";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-between max-w-7xl m-auto items-center pt-5">
      <img
        src={logoImage}
        className="w-45 h-10 cursor-pointer"
        alt="logo"
        onClick={() => (window.location.href = "/")}
      />

      <div>
        <ul className="flex justify-center gap-5 items-center">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>



      <div className="flex justify-end gap-5 items-center">
        <ShoppingCart className="w-5 h-5"></ShoppingCart>
        <a href="">Login</a>
        <button className="btn bg-[#4f39f6] text-white rounded-3xl font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
