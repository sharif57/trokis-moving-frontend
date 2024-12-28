import { ArrowUp } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import Map from "@/app/components/shared/Map";

export default function SubmitQuote() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 text-primaryText p-4 lg:p-8">
      {/* Left Content */}
      <div className="lg:w-2/5 space-y-8">
        {/* Starting Address */}
        <div>
          <h1 className="text-[16px] font-normal pb-4">Starting Address:</h1>
          <div className="bg-white p-4 rounded-lg space-y-4 text-[14px]">
            <h1 className="flex gap-3 items-center">
              <ArrowUp className="text-gray-600" />
              2972 Westheimer Rd. Santa Ana, Illinois
            </h1>
            <p>Location type: House</p>
            <p>Floor level: 04</p>
            <p>Is there an elevator?: Normal elevator</p>
            <p>Choose parking type: The parking is right outside the house</p>
          </div>
        </div>

        {/* Date and Time */}
        <div>
          <h1 className="text-[16px] font-normal pb-4">Date and Time:</h1>
          <div className="bg-white p-4 rounded-lg space-y-4 text-[14px] font-normal">
            <div className="flex flex-col sm:flex-row gap-3">
              <p>Date: 12-12-2024</p>
              <p>Time: 10.45 am</p>
            </div>
          </div>
        </div>

        {/* Destination Address */}
        <div>
          <h1 className="text-[16px] font-normal pb-4">Destination Address:</h1>
          <div className="bg-white p-4 rounded-lg space-y-4 text-[14px]">
            <h1 className="flex gap-3 items-center">
              <ArrowUp className="text-gray-600" />
              2972 Westheimer Rd. Santa Ana, Illinois
            </h1>
            <p>Location type: House</p>
            <p>Floor level: 04</p>
            <p>Is there an elevator?: Normal elevator</p>
            <p>Choose parking type: The parking is right outside the house</p>
          </div>
        </div>

        {/* Items Section */}
        <div>
          <h1 className="text-[16px] font-normal pb-4">Items:</h1>
          <div className="space-y-4">
            {[
              { icon: "/images/Tables.png", title: "Bedrooms" },
              { icon: "/images/bed.png", title: "Dining room" },
              { icon: "/images/Dressers.png", title: "Office / Studio" },
              { icon: "/images/Frame.png", title: "Electronics" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg space-y-2 text-[14px]"
              >
                <h1 className="flex items-center text-[16px] gap-3">
                  <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    alt={item.title}
                  />
                  {item.title}
                </h1>
                <p>King Bed (includes mattress): 1</p>
                <p>Queen Bed (includes mattress): 2</p>
                <p>Queen Bed (includes mattress): 4</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photos */}
        <div>
          <h2 className="text-2xl font-normal text-primaryText mb-4">Photos</h2>
          <div className="flex gap-4 flex-wrap">
            {["product-1.png", "product-2.png", "product-3.png"].map(
              (img, idx) => (
                <Image
                  key={idx}
                  src={`/images/${img}`}
                  width={100}
                  height={100}
                  alt={img}
                  className="rounded-lg shadow"
                />
              )
            )}
          </div>
        </div>

        <div>
          <h2 className="text-[18px] font-normal  text-primaryText mb-4">
            Pricing Details
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-[18px] font-normal  text-primaryText">
                Your price
              </p>
              <p className="text-[18px] font-normal  text-primaryText">$ 754</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[18px] font-normal  text-primaryText">
                Admin fee
              </p>
              <p className="text-[18px] font-normal  text-primaryText">20%</p>
            </div>
            <hr className="mt-3 border-t-2 border-black"></hr>
            <div className="flex justify-between">
              <p className="text-[18px] font-normal  text-primaryText">
                Your profit :{" "}
              </p>
              <p className="text-[18px] font-normal  text-primaryText">$ 904</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="lg:flex flex-col items-center gap-4 pb-10 font-lora px-4 sm:px-6 lg:px-8">
          {/* Button Container */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Cancel Button */}
            <Link href="/driver">
              <Button
                className="w-full lg:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-lora font-normal"
                color="default"
                variant="outlined"
              >
                Cancel
              </Button>
            </Link>

            {/* Submit Quote Button */}
            <Link href="/driver/StartShipment">
              <Button
                className="w-full lg:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-lora font-normal"
                color="default"
                variant="solid"
              >
                Submit Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full lg:w-3/5 h-[400px] lg:h-auto">
        <Map />
      </div>
    </div>
  );
}
