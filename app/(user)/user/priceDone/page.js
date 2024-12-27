import Image from "next/image";
import React from "react";

export default function PriceDone() {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <Image
          className="bg-center"
          src="/images/Successful purchase.png"
          alt="purchase"
          height={500}
          width={500}
        />
      </div>

      <div className="lg:w-1/2 mx-auto ">
        <div className="bg-white p-4 rounded-xl">
          <h1 className="text-[25px] text-primaryText font-normal text-center ">
            The Estimate Price for this Moving is:
          </h1>
          <p className="text-[45px] font-normal text-black text-center mt-4">
            $777
          </p>
        </div>
        <h1 className="text-[25px] text-primaryText font-normal text-center">You will receive quotes for the next 24 hours</h1>
      </div>
    </div>
  );
}
