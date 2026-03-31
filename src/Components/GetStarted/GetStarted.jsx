import React from "react";
import userImage from "../../assets/user.png";
import packageImage from "../../assets/package.png";
import rocketImage from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] py-15">
      <div className="space-y-5 my-15 max-w-7xl m-auto">
        <h2 className="text-3xl md:text-[48px] font-extrabold text-center">
          Get Started in 3 Steps
        </h2>
        <p className="text-[#627983] text-center">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-10 my-10">
          <div className="border border-zinc-100 shadow-2xl rounded-2xl p-4">
            <div className="relative">
              <div className="badge bg-[#9514fa] text-white rounded-full w-10 h-10 absolute top-0 right-0 pt">
                01
              </div>
            </div>
            <div className="my-15 space-y-5">
              <img
                src={userImage}
                alt="userImage"
                className="place-self-center bg-[#9514fa]/25 rounded-full p-4"
              />
              <h2 className="place-self-center">Create Account</h2>
              <p className="text-center">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className="border border-zinc-100 shadow-2xl rounded-2xl p-4">
            <div className="relative">
              <div className="badge bg-[#9514fa] text-white rounded-full w-10 h-10 absolute top-0 right-0 pt">
                02
              </div>
            </div>
            <div className="my-15 space-y-5">
              <img
                src={packageImage}
                alt="packageImage"
                className="place-self-center bg-[#9514fa]/25 rounded-full p-4"
              />
              <h2 className="place-self-center">Choose Products</h2>
              <p className="text-center">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="border border-zinc-100 shadow-2xl rounded-2xl p-4">
            <div className="relative">
              <div className="badge bg-[#9514fa] text-white rounded-full w-10 h-10 absolute top-0 right-0 pt">
                03
              </div>
            </div>
            <div className="my-15 space-y-5">
              <img
                src={rocketImage}
                alt="rocketImage"
                className="place-self-center bg-[#9514fa]/25 rounded-full p-4"
              />
              <h2 className="place-self-center">Start Creating</h2>
              <p className="text-center">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
