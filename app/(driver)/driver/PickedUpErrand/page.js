import Map from "@/app/components/shared/Map";
import { Button } from "antd";
import { ArrowDown, ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PickedUpErrand() {
  return (
    <div className="lg:flex gap-6">
      <div className=" space-y-2 rounded-lg text-[14px] font-normal font-lora">
        <div className="bg-white text-primaryText p-6 rounded-lg">
            <h1 className="font-normal text-[18px] space-y-4 mb-4">Parcel is picked up</h1>
          <h1>Errand details</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <ArrowUp />
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <ArrowDown />
            <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          </div>
          <Button
            className="px-12 py-6 text-[18px] font-lora font-normal mt-4"
            color="default"
            variant="solid"
          >
            Price : $59585
          </Button>

          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-[18px] font-normal text-primaryText mb-2">
              User Information
            </h2>

            <div>
              <div className="flex items-center gap-4 mt-3">
                <Image
                  src="/images/user.png"
                  width={60}
                  height={60}
                  alt="User Profile"
                />
                <div className="space-y-2">
                  <h1 className="text-[18px] font-normal">Sabbir Hossein</h1>
                  <div className="lg:flex items-center gap-4">
                    <div className="flex items-center gap-2">4.65</div>
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
            
                <Link href="/driver/OnTheWayErrand" passHref>
                  <Button
                    className="px-16 py-6 text-[18px] font-lora font-normal"
                    color="default"
                    variant="solid"
                  >
                     picked up
                  </Button>
                  {/* <Modals></Modals> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Map></Map>
      </div>
    </div>
  );
}
