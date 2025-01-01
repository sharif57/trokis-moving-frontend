"use client";
import Image from "next/image";
import React from "react";

import { Button, Input } from "antd";
import Link from "next/link";
import { Typography } from "antd";

const { Title } = Typography;

export default function VerifyEmail() {
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  return (
    <div className="flex items-center justify-center font-lora gap-10 bg-gray-100">
      {/* Image Section */}
      <div className="mb-8">
        <Image
          height={500}
          width={500}
          className="h-full"
          src="/images/forgot.png"
          alt="Driver Login"
          priority
        />
      </div>

      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-[30px] font-normal text-primaryText text-center pb-2">
          Verify Email{" "}
        </h1>
        <p className="w-1/2 mx-auto text-center">
          Please enter the otp we have sent you in your email.{" "}
        </p>
        <div className="mb-4 mt-4 mx-auto w-3/5">
          <Input.OTP className="" formatter={(str) => str.toUpperCase()} {...sharedProps} />
        </div>

        <div className="pt-6">
          <Button
            className="w-full py-6 text-[20px] font-lora"
            color="default"
            variant="solid"
          >
            Send Otp
          </Button>
        </div>
     
      </div>
    </div>
  );
}
