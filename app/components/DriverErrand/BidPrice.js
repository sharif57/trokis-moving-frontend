import React from "react";
import { Button } from "antd";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import Map from "../shared/Map";

export default function BidPrice() {
  return (
    <div>
      <div className="lg:flex gap-6">
        <div className="rounded-lg text-[14px] font-normal font-lora">
          <div className="bg-white  p-6 space-y-2 ">
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
            <div className="grid grid-cols-2 gap-4 lg:w-1/2 pt-10">
              <Button
                color="default"
                variant="solid"
                className="font-normal text-xl font-lora px-7 py-6"
              >
                Price: $783
              </Button>
              <Link href={"BidStart"}>
                <Button
                  color="default"
                  variant=""
                  className="font-normal text-xl font-lora px-7 py-6"
                >
                  Bid Price
                </Button>
              </Link>
              <Button
                color="default"
                variant=""
                className="font-normal text-xl font-lora px-7 py-6"
              >
                Cancel
              </Button>
              <Link href={"SubmitQuoteErrand"}>
                <Button
                  color="default"
                  variant="solid"
                  className="font-normal text-xl font-lora px-7 py-6"
                >
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Map></Map>
        </div>
      </div>
    </div>
  );
}
