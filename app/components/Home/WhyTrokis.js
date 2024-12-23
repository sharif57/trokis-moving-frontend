import Image from "next/image";
import React from "react";

export default function WhyTrokis() {
  const prorducts = [
    {
      title: "Fast Booking",
      description: "Book your trip in just a few seconds",
      image: "/images/boost.png",
    },
    {
      title: "Best Rate",
      description: "Get the best fare on the market",
      image: "/images/Group.png",
    },
    {
      title: "Secured Delivery",
      description: "Ensure the safest delivery of your products",
      image: "/images/rate.png",
    },
    {
      title: "Verified Drivers",
      description: "Thousands of verified drivers are available",
      image: "/images/Verified Drivers.png",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center">
        <h1 className="text-[45px] font-normal text-primaryText">
          Why Trokis?
        </h1>
        <p className="text-[23px] font-normal">The easiest way to hire your trucks.</p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <div className="flex flex-wrap  gap-4">
            {prorducts.map((product, index) => (
              <div key={index} className="w-1/2 md:w-1/3 text-center">
                <div className="p-4 bg-white shadow-md rounded-md mb-4 ">
                  <div className="flex items-center justify-center h-full">
                    <Image
                      width={50}
                      height={50}
                      className="bg-[#c4f6fc] p-2 lg:p-4 rounded-full text-black shadow-md"
                      alt={product.title || "Product Image"}
                      src={product.image}
                    />
                  </div>

                  <div className="pt-3">
                    <h3 className="text-lg font-normal text-primaryText">
                      {product.title}
                    </h3>
                    <p className="text-xs">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          width={660}
          height={555}
          alt="WhyTrokis"
          src={"/images/WhyTrokis.png"}
        ></Image>
      </div>
    </div>
    // </div>
  );
}
