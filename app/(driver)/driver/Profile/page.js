import React from "react";
import { Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center p-6">
        <div className=" rounded-lg  p-6 w-full max-w-4xl">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <Image
              height={128}
              width={128}
              src="/images/profle.png"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <Input placeholder="Jane Cooper" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <Input placeholder="jane@example.com" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <Input placeholder="+1234567890" />
            </div>

            {/* NID */}
            <div>
              <label className="block text-gray-700 mb-1">NID</label>
              <Upload>
                <Button icon={<UploadOutlined />}>Upload NID</Button>
              </Upload>
            </div>

            {/* NID Number */}
            <div>
              <label className="block text-gray-700 mb-1">NID Number</label>
              <Input placeholder="123456789" />
            </div>

            {/* Driver License */}
            <div>
              <label className="block text-gray-700 mb-1">
                Driver License Picture
              </label>
              <Upload>
                <Button icon={<UploadOutlined />}>Upload Driver License</Button>
              </Upload>
            </div>

            {/* Driver License Number */}
            <div>
              <label className="block text-gray-700 mb-1">
                Driver License Number
              </label>
              <Input placeholder="435558831" />
            </div>

            {/* Route Permit */}
            <div>
              <label className="block text-gray-700 mb-1">
                Route Permit Picture
              </label>
              <Upload>
                <Button icon={<UploadOutlined />}>Upload Route Permit</Button>
              </Upload>
            </div>

            {/* Driver Picture */}
            <div>
              <label className="block text-gray-700 mb-1">Driver Picture</label>
              <Upload>
                <Button icon={<UploadOutlined />}>Upload Driver Picture</Button>
              </Upload>
            </div>

            {/* Vehicle Registration Number */}
            <div>
              <label className="block text-gray-700 mb-1">
                Vehicle Registration Number
              </label>
              <Input placeholder="24324401" />
            </div>

            {/* Vehicle Picture */}
            <div>
              <label className="block text-gray-700 mb-1">
                Vehicle Picture
              </label>
              <Upload>
                <Button icon={<UploadOutlined />}>
                  Upload Vehicle Picture
                </Button>
              </Upload>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="flex justify-center mt-6">
            <Link href={'EditProfile'}>
              <Button
                type="primary"
                size="large"
                className="bg-black text-white w-full max-w-xs rounded-lg"
              >
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
