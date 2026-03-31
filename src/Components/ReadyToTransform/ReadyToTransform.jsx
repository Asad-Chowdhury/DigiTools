import React from "react";

const ReadyToTransform = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-15 text-white">
      <div className="max-w-7xl m-auto">
        <div className="text-center space-y-5">
          <h2 className="text-3xl md:text-[40px] font-extrabold">
            Ready to Transform Your Workflow?
          </h2>
          <p className="opacity-60 font-medium">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br />
            Start your free trial today.
          </p>
        </div>
        <div className="my-10 space-y-5">
          <div className="flex gap-5 justify-center items-center">
            <button className="btn text-[#9514fa] rounded-full font-medium md:px-10">
              Explore Products
            </button>
            <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full font-medium md:px-10">
              View Pricing
            </button>
          </div>
          <p className="opacity-60 font-medium text-center">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadyToTransform;
