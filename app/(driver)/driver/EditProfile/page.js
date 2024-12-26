import React from "react";
import { Input, Button, Upload } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import Image from "next/image";


export default function EditProfile() {
  return (
    <div>
      <div className="bg-gray-100  flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6 relative">
            <Image
            height={128}
            width={128}
              src="/images/profle.png"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
            <Upload>
              <Button
                shape="circle"
                icon={<CameraOutlined />}
                className="absolute bottom-2 right-2 bg-black text-white border-none flex items-center justify-center"
              />
            </Upload>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <Input placeholder="Jane Cooper" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <Input placeholder="lawson@example.com" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <Input placeholder="+50880754" />
            </div>
          </div>

          {/* Update Profile Button */}
          <div className="flex justify-center mt-6">
            <Button
              type="primary"
              size="large"
              className="bg-black text-white w-full max-w-xs rounded-lg"
            >
              Update Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
