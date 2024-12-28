import Image from "next/image";
import React from "react";

const ConfirmPayment = () => {
  return (
    <div className=" text-primaryText font-lora flex items-center justify-center">
      <div className=" lg:w-1/2 mx-auto p-6 ">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <Image
          height={50}
          width={50}
            src="/images/payment.png"
            alt="Online Store"
            className="w-12 h-12"
          />
          <div className="ml-4">
            <h1 className="text-lg font-normal">Online Store</h1>
            <p className="text-sm text-gray-500">Pago De Compra Online</p>
            <p className="text-sm text-gray-800 font-semibold">$13762.00 cop</p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Payment Options */}
        <div className="space-y-4 mt-6">
          <button className="w-full flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
            <span className="mr-3 text-xl">🛒</span> Productos Davivienda
          </button>
          <button className="w-full flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
            <span className="mr-3 text-xl">💳</span> Carjeta De Credito Y Debito
          </button>
          <button className="w-full flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
            <span className="mr-3 text-xl">💰</span> Cuentas De Ahorro Y Corriente
          </button>
          <button className="w-full flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
            <span className="mr-3 text-xl">🕒</span> Daviplata
          </button>
          <button className="w-full flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
            <span className="mr-3 text-xl">💵</span> Efectivo
          </button>
          <button className="w-full flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
            <span className="mr-3 text-xl">🔒</span> Safetypay
          </button>
        </div>

        {/* Confirm Button */}
        <div className="mt-8 lg:w-1/2 mx-auto">
          <button className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
