import { ChevronLeft } from "lucide-react";
import React from "react";

const PaymentCard = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center py-10 text-primaryText">
      {/* Cards at the top */}
      <div className="flex space-x-4 mb-8">
        <div className="bg-white shadow-md p-4 rounded-lg text-center w-48">
          <h3 className="text-gray-600 font-semibold">Total Errand</h3>
          <p className="text-2xl font-bold">$436</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center w-48">
          <h3 className="text-gray-600 font-semibold">Total Moving</h3>
          <p className="text-2xl font-bold">89</p>
        </div>
      </div>

      {/* Payment Form */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <button className="text-gray-600 text-sm flex items-center mb-6">
          <ChevronLeft className="mr-2" />
          Back
        </button>
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <form>
          {/* Cardholder Name */}
          <div className="mb-4">
            <label htmlFor="cardholder-name" className="block text-gray-600 text-sm mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholder-name"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none pb-1"
              placeholder="John Doe"
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label htmlFor="card-number" className="block text-gray-600 text-sm mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none pb-1"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          {/* Expiry and CVC */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="expiry" className="block text-gray-600 text-sm mb-2">
                MM/YY
              </label>
              <input
                type="text"
                id="expiry"
                className="w-full border-b border-gray-300 focus:border-black focus:outline-none pb-1"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvc" className="block text-gray-600 text-sm mb-2">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                className="w-full border-b border-gray-300 focus:border-black focus:outline-none pb-1"
                placeholder="CVC"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none pb-1"
              value="mstkhushiakter333@gmail.com"
              readOnly
            />
          </div>

          {/* Total Amount */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-gray-600">
              <span>Total Amount</span>
              <span className="font-bold">$45.00</span>
            </div>
          </div>

          {/* Save Card */}
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="save-card" className="mr-2 h-4 w-4" />
            <label htmlFor="save-card" className="text-gray-600 text-sm">
              Save this Card for future purchases. <br />
              <span className="text-xs">
                You’ll be able to delete your card details at any time from your settings
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-black text-white py-2 px-6 rounded-md w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentCard;
