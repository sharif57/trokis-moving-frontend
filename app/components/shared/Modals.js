"use client";

import React, { useState } from "react";
import { Button, Modal, Rate, Input } from "antd";
import { Star } from "lucide-react";

export default function CenteredModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center   ">
      <Star className="cursor-pointer" onClick={showModal} color="#eacb06" />

      {/* Modal */}
      <Modal
        title={
          <div className="text-center font-lora font-normal  text-xl">
            Your Shipment Has Been Delivered To The Receiver.
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div key="footer" className="w-full flex justify-center">
         
            <Button
              onClick={handleOk}
              className="w-1/2  rounded-2xl py-6 text-[18px] font-lora font-normal"
              color="default"
              variant="solid"
            >
              Submit
            </Button>
          </div>,
        ]}
      >
        <div className="text-center">
          <Rate className="mb-4 text-[40px]" allowHalf defaultValue={2.5} />
          <p className="mb-4 font-lora font-normal mt-8">
            Leave A Comment For User.
          </p>
          <Input
            placeholder="Enter your valuable comment "
            className="mx-auto w-3/4 bg-gray-200 py-3"
          />
        </div>
      </Modal>
    </div>
  );
}
