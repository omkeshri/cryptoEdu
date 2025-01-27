import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import { PaymentData } from '../../types/subscription';

interface PaymentFormProps {
  onSubmit: (data: PaymentData) => void;
  selectedPlan: string;
  totalAmount: number;
}

export const PaymentForm = ({ onSubmit, selectedPlan, totalAmount }: PaymentFormProps) => {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(paymentData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Details</h2>
          <p className="text-gray-600">
            Complete your {selectedPlan} subscription - ${totalAmount.toFixed(2)}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={paymentData.cardNumber}
                  onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                  placeholder="1234 5678 9012 3456"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={paymentData.expiryDate}
                  onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                  placeholder="MM/YY"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                  placeholder="123"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                  maxLength={4}
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name on Card
              </label>
              <input
                type="text"
                value={paymentData.name}
                onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={paymentData.billingAddress.street}
                  onChange={(e) => setPaymentData({
                    ...paymentData,
                    billingAddress: { ...paymentData.billingAddress, street: e.target.value }
                  })}
                  placeholder="Street Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={paymentData.billingAddress.city}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      billingAddress: { ...paymentData.billingAddress, city: e.target.value }
                    })}
                    placeholder="City"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                  <input
                    type="text"
                    value={paymentData.billingAddress.state}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      billingAddress: { ...paymentData.billingAddress, state: e.target.value }
                    })}
                    placeholder="State"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={paymentData.billingAddress.zipCode}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      billingAddress: { ...paymentData.billingAddress, zipCode: e.target.value }
                    })}
                    placeholder="ZIP Code"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                  <select
                    value={paymentData.billingAddress.country}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      billingAddress: { ...paymentData.billingAddress, country: e.target.value }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Complete Payment
            </button>
            <p className="mt-4 text-sm text-gray-500 text-center">
              By completing this purchase you agree to our{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700">
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};