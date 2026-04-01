import React from "react";
import logoImage from "../../assets/digitools-logo.png";
import { ShoppingCart } from "lucide-react";

const NavBar = ({ carts, onCartClick }) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-between max-w-7xl m-auto items-center pt-5">
      <img
        src={logoImage}
        className="w-45 h-10 cursor-pointer"
        alt="logo"
        onClick={() => (window.location.href = "/")}
      />

      <div>
        <ul className="flex flex-col md:flex-row justify-center gap-5 items-center">
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

      <div className="flex justify-center gap-5 items-center">
        <div className="relative inline-block">
          <ShoppingCart
            className="w-5 h-5 cursor-pointer"
            onClick={onCartClick}
          />
          <div className="badge badge-primary badge-sm absolute -top-3 -right-5">
            {carts.length}
          </div>
        </div>

        <a href="">Login</a>
        <button className="btn bg-[#4f39f6] text-white rounded-3xl font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
