/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, Checkbox, Input } from "antd";
import { KeyRound, MailCheck } from "lucide-react";
import Link from "next/link";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
export default function login() {
  return (
    <div className="flex items-center justify-center font-lora gap-10 bg-gray-100">
      {/* Image Section */}
      <div className="mb-8">
        <Image
          height={500}
          width={500}
          className="h-full"
          src="/images/driverLogin.png"
          alt="Driver Login"
          priority
        />
      </div>

      {/* Input Fields Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-[30px] font-normal text-primaryText text-center pb-6">
          Sign In
        </h1>
        <div className="mb-4">
          <Input
            size="large"
            placeholder="Enter Your Email"
            prefix={<MailCheck />}
          />
        </div>
        <div className="mb-4">
          <Input.Password
            size="large"
            prefix={<KeyRound />}
            placeholder="Enter Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <div className="flex justify-between items-center text-[15px] font-normal text-primaryText">
          <Checkbox
            onChange={onChange}
            className="text-[15px] font-normal text-primaryText font-lora"
          >
            Remember me
          </Checkbox>
          <Link href="/forgotPass">
            <p className="text-primaryText hover:underline cursor-pointer">
              Forgot password?
            </p>
          </Link>
        </div>
        <div className="pt-6">
          <Button
            className="w-full py-6 text-[20px] font-lora"
            color="default"
            variant="solid"
          >
            Sign In
          </Button>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <p>Don't have an account?</p>
            <Link href="/register" passHref>
              <Button
                className="text-[15px] font-normal text-primaryText font-lora"
                type="link"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
