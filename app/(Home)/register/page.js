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
import { KeyRound, MailCheck, PersonStanding, Phone } from "lucide-react";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
export default function register() {
  return (
    <div className="flex items-center justify-center font-lora gap-10 bg-gray-100">
      {/* Image Section */}
      <div className="mb-8">
        <Image
          height={500}
          width={500}
          className="h-full"
          src="/images/registerDriver.png"
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
            placeholder="Name"
            prefix={<PersonStanding  />}
          />
        </div>
        <div className="mb-4">
          <Input
            size="large"
            placeholder="Enter Your Email"
            prefix={<MailCheck />}
          />
        </div>
        <div className="mb-4">
          <Input
            size="large"
            placeholder="Phone Number"
            prefix={<Phone  />}
          />
        </div>
        <div className="mb-4">
          <Input.Password
            size="large"
            prefix={<KeyRound />}
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <div className="mb-4">
          <Input.Password
            size="large"
            prefix={<KeyRound />}
            placeholder="Confirm Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        {/* <div className="flex justify-between items-center text-[15px] font-normal text-primaryText">
          <Checkbox
            onChange={onChange}
            className="text-[15px] font-normal text-primaryText font-lora"
          >
            Remember me
          </Checkbox>
          <p>Forgot password?</p>
        </div> */}
        <div className="pt-6">
          <Button className="w-full py-6 text-[20px] font-lora" color="default" variant="solid">
          Register
          </Button>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <p>Don't have an account?</p>
            <Button className="text-[15px] font-normal text-primaryText font-lora" color="default" variant="text">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
