import { ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import Map from "@/app/components/shared/Map";

import React from "react";
import Modals from "@/app/components/shared/Modals";

export default function PickedUp() {
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

        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg">
          {/* Header Section */}
          <h2 className="text-base sm:text-lg md:text-[18px] font-normal text-primaryText mb-4">
            Load is picked up
          </h2>
          <p className="text-sm sm:text-base">DHK METRO HA 64-8549</p>
          <p className="text-sm sm:text-base">48-foot trailer—24 pallets</p>

          {/* User Information Section */}
          <div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <Image
                src="/images/user.png"
                width={60}
                height={60}
                alt="User Profile"
                className="rounded-full"
              />
              <div className="space-y-2 text-center sm:text-left">
                <h1 className="text-base sm:text-lg md:text-[18px] font-normal">
                  Sabbir Hossein
                </h1>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <Modals />
                    <span>4.65</span>
                  </div>
                  <p className="text-sm sm:text-base">Phone: 123-456-7890</p>
                  <p className="text-sm sm:text-base">
                    Email: sharifmahamud@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Actions Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <div className="flex items-center gap-4 border-2 text-sm sm:text-base md:text-[20px] font-normal px-5 py-2 rounded-3xl">
                <Mail />
                <p>Send a free message</p>
              </div>
              <Phone />
            </div>

            {/* Buttons Section */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/driver/ReceivedLocation" passHref>
                <Button
                  className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-lora font-normal"
                  color="default"
                  variant="solid"
                >
                  Support
                </Button>
              </Link>
              <Link href="/driver/Delivery" passHref>
                <Button
                  className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-lora font-normal"
                  color="default"
                  variant="solid"
                >
                  Request
                </Button>
              </Link>
            </div>
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
