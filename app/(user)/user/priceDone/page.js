import Image from "next/image";
import React from "react";

export default function PriceDone() {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Image Section */}
      <div className="flex items-center justify-center mb-8">
        <Image
          className="bg-center"
          src="/images/Successful purchase.png"
          alt="purchase"
          height={400}
          width={400}
        />
      </div>

      {/* Content Section */}
      <div className="lg:w-3/4 xl:w-1/2 mx-auto">
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg">
          <h1 className="text-[18px] sm:text-[20px] lg:text-[25px] text-primaryText font-medium text-center">
            The Estimate Price for this Moving is:
          </h1>
          <p className="text-[35px] sm:text-[40px] lg:text-[45px] font-semibold text-black text-center mt-4">
            $777
          </p>
        </div>
        <h1 className="text-[18px] sm:text-[20px] lg:text-[25px] text-primaryText font-medium text-center mt-6">
          You will receive quotes for the next 24 hours
        </h1>
      </div>
    </div>
  );
}
