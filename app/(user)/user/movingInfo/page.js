import { ArrowUp, CircleDollarSign } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import Map from "@/app/components/shared/Map";

export default function movingInfo() {
  return (
    <div className="lg:flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-6 lg:px-12 py-8 text-primaryText">
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
          <h1 className="text-[18px] font-normal">Select Payment Method</h1>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-5">
            <Button
              className="w-full lg:w-auto px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-[18px] font-lora font-normal text-center"
              color="default"
              // variant="solid"
            >
              Online Payment
              <CircleDollarSign />
            </Button>
            <Button
              className="w-full lg:w-auto px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-[18px] font-lora font-normal text-center"
              color="default"
              // variant="solid"
            >
              Cash
              <CircleDollarSign />
            </Button>
          </div>
        </div>
        {/* Buttons */}

        <div className="mt-6">
          <Link href={"/user/priceDone"}>
            <Button
              className="px-12 w-full py-6 text-[18px] font-lora font-normal"
              color="default"
              variant="solid"
            >
              Get Prices
              <span className="ml-2">{">>"}</span>
            </Button>
          </Link>
        </div>
      </div>
      {/* Map Section */}
      <div className="">
        <Map />
      </div>
    </div>
  );
}
