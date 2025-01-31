import { Button } from 'antd'
import {  Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SendReceive() {
  return (
    <div>
       <div>
        <div className="bg-white p-6 rounded-lg text-primaryText  ">
          <h2 className="text-lg font-normal mb-4">Parcel is picked up</h2>
          <div className="flex justify-between mb-6">
            <div>
              <h3 className="font-medium">Pickup</h3>
              <p className="text-sm text-gray-600">Date: 12-11-2024</p>
              <p className="text-sm text-gray-600">
                Address: Rupatoli, Barishal
              </p>
            </div>
            <div className="border-l border-gray-300 mx-4"></div>
            <div>
              <h3 className="font-medium">Delivery</h3>
              <p className="text-sm text-gray-600">Date: 15-11-2024</p>
              <p className="text-sm text-gray-600">Address: Banasree, Dhaka</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-normal mb-2">User Information</h3>
            <div>
              <div className="flex items-center gap-4 mt-3">
                <Image
                  src="/images/user.png"
                  width={60}
                  height={60}
                  alt="User Profile"
                />
                <div className="space-y-2">
                  <h1 className="text-[18px] font-normal">Sabbir Hossein</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">4.65</div>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: sharifmahamud@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-4 border-2 text-[20px] font-normal px-5 rounded-3xl p-2">
                  <Mail />
                  <p>Send a free message</p>
                </div>
                <Phone />
              </div>
            </div>

            <div className="flex justify-between mt-6">
             
              <Link href="/driver/DeliveryDoneErrand" passHref>
                <Button
                  className="px-16 py-6 text-[18px] text-white bg-gray-400 font-lora font-normal"
                  color="default"
                  
                >
                  Delivery Complete
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


