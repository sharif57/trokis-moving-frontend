"use client";
import Image from "next/image";
import React from "react";

import { Button, Input } from "antd";
import { KeyRound, MailCheck } from "lucide-react";
import Link from "next/link";


export default function ResetPassword() {
  return (
    <div className="flex items-center justify-center font-lora gap-10 bg-gray-100">
      {/* Image Section */}
      <div className="mb-8">
        <Image
          height={700}
          width={500}
          className="h-full"
          src="/images/ResetPassword.png"
          alt="Driver Login"
          priority
        />
      </div>

      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-[30px] font-normal text-primaryText text-center pb-2">
        Reset Password{" "}
        </h1>
        <p className="w-1/2 mx-auto text-center">
        Your password must be 8-10 character long.
        </p>
        <div className="mb-4 mt-4">
          <Input
            size="large"
            placeholder="Enter Password"
            prefix={<KeyRound />}
            required
          />
        </div>
        <div className="mb-4 mt-4">
          <Input
            size="large"
            placeholder="Re-enter Password"
            prefix={<KeyRound />}
            required
          />
        </div>

        <div className="pt-6">
          <Link href="/VerifyEmail">
            <Button
              className="w-full py-6 text-[20px] font-lora"
              color="default"
              variant="solid"
            >
              Confirm
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
