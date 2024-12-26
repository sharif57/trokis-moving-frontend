import React from "react";
import { Button } from "antd";

export default function ActionButton({ text, className, onClick }) {
  return (
    <div>
      <Button
        className={`px-16 py-6 text-[18px] text-white font-lora font-normal ${className}`}
        onClick={onClick}
        color="default"
        variant="solid"
      >
        {text}
      </Button>
      {/* <Button
        className="px-16 py-6 text-[18px] bg-gray-400 text-white font-lora font-normal"
        color="default"
      >
        Start
      </Button>
      ; */}
    </div>
  );
}
