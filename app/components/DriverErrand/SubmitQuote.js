import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

export default function SubmitQuote() {
  return (
    <div>
      <div className="bg-white p-6 space-y-2 rounded-lg text-[14px] font-normal font-lora">
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
        
      </div>
    </div>
  );
}
