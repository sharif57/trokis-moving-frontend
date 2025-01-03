"use client";
import Image from "next/image";
import React from "react";

import { Button, Input } from "antd";
import { MailCheck } from "lucide-react";
import Link from "next/link";


export default function forgot() {
  return (
    <div className="lg:flex items-center justify-center font-lora gap-10 bg-gray-100">
      {/* Image Section */}
      <div className="mb-8">
        <Image
          height={500}
          width={500}
          className="h-full hidden sm:block"
          src="/images/forgot.png"
          alt="Driver Login"
          priority
        />
      </div>

      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-[30px] font-normal text-primaryText text-center pb-2">
          Forgot Password{" "}
        </h1>
        <p className="lg:w-1/2 mx-auto text-center">
          Please enter your email address to reset your password.
        </p>
        <div className="mb-4 mt-4">
          <Input
            size="large"
            placeholder="Enter Your Email"
            prefix={<MailCheck />}
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
              Send Otp
            </Button>
          </Link>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <p>Already have an account ?</p>
            <Link href="/login">
              <Button
                className="text-[15px] font-normal text-primaryText font-lora"
                color="default"
                variant="text"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
