import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg shadow-gray-400">
        {/* Payment Method Selection */}
        <div className="mb-4 flex justify-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              className="accent-blue-500"
            />
            <span className="text-gray-700">Cash on Delivery</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="credit"
              checked={paymentMethod === "credit"}
              onChange={() => setPaymentMethod("credit")}
              className="accent-blue-500"
            />
            <span className="text-gray-700">Credit Card</span>
          </label>
        </div>

        {/* Payment Form */}
        {paymentMethod === "credit" && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Enter your card number:</label>
              <input
                type="text"
                placeholder="Card number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Enter your card's expiry date:</label>
              <input
                type="text"
                placeholder="Expiry date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Enter your CVV number:</label>
              <input
                type="text"
                placeholder="CVV"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Confirm Payment Button */}
        <button
          className={`w-full mt-6 py-2 text-white rounded-md ${
            paymentMethod === "credit" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={paymentMethod !== "credit"}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
