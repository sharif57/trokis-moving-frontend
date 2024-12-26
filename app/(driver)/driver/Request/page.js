import { ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import Map from "@/app/components/shared/Map";

import React from 'react';
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

        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-[18px] font-normal text-primaryText mb-4">
            Load is picked up
          </h2>
          <p>DHK METRO HA 64-8549</p>
          <p>48-foot trailer—24 pallets</p>

          <div>
            <div className="flex items-center gap-4 mt-8">
              <Image
                src="/images/user.png"
                width={60}
                height={60}
                alt="User Profile"
              />
              <div className="space-y-2">
                <h1 className="text-[18px] font-normal">Sabbir Hossein</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                  
                    <Modals></Modals>
                   
                    4.65
                  </div>
                  <p>Phone: 123-456-7890</p>
                  <p>Email: sharifmahamud@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-4 border-2 text-[20px] font-normal px-5 rounded-3xl p-2">
                <Mail />
                <p>Send a free message</p>
              </div>
              <Phone />
            </div>
            <div className="mt-8 flex gap-6">
              <Link href="/driver/ReceivedLocation" passHref>
                <Button
                  className="px-12 py-6 text-[18px] font-lora font-normal"
                  color=""
                  variant="solid"
                >
                  Support
                </Button>
              </Link>
              <Link href="/driver/Delivery" passHref>
                <Button
                  className="px-12 py-6 text-[18px] font-lora font-normal"
                  color="default"
                  variant="solid"
                >
                  Request
                </Button>
                {/* <Modals></Modals> */}
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
