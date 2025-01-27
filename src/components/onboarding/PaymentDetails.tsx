import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Lock, ArrowLeft } from 'lucide-react';
import { PaymentInfo } from '../../types/onboarding';
import { Plan } from '../../types/subscription';

interface PaymentDetailsProps {
  data: PaymentInfo;
  errors: Record<string, string[]>;
  onChange: (data: Partial<PaymentInfo>) => void;
  onNext: () => void;
  onBack: () => void;
  plan: Plan;
}

export const PaymentDetails = ({
  data,
  errors,
  onChange,
  onNext,
  onBack,
  plan
}: PaymentDetailsProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
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
            Complete your {plan.name} subscription - ${plan.price}/{plan.interval}
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
                  value={data.cardNumber}
                  onChange={(e) => onChange({ cardNumber: e.target.value })}
                  placeholder="1234 5678 9012 3456"
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.cardNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.cardNumber[0]}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={data.expiryDate}
                  onChange={(e) => onChange({ expiryDate: e.target.value })}
                  placeholder="MM/YY"
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.expiryDate && (
                <p className="mt-1 text-sm text-red-600">{errors.expiryDate[0]}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={data.cvv}
                  onChange={(e) => onChange({ cvv: e.target.value })}
                  placeholder="123"
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.cvv ? 'border-red-500' : 'border-gray-300'
                  }`}
                  maxLength={4}
                />
              </div>
              {errors.cvv && (
                <p className="mt-1 text-sm text-red-600">{errors.cvv[0]}</p>
              )}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name on Card
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => onChange({ name: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name[0]}</p>
              )}
            </div>

            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={data.billingAddress.street}
                  onChange={(e) => onChange({
                    billingAddress: { ...data.billingAddress, street: e.target.value }
                  })}
                  placeholder="Street Address"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors['billingAddress.street'] ? 'border-red-500' : 'border-gray-300'
                  }`}
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={data.billingAddress.city}
                    onChange={(e) => onChange({
                      billingAddress: { ...data.billingAddress, city: e.target.value }
                    })}
                    placeholder="City"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors['billingAddress.city'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <input
                    type="text"
                    value={data.billingAddress.state}
                    onChange={(e) => onChange({
                      billingAddress: { ...data.billingAddress, state: e.target.value }
                    })}
                    placeholder="State"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors['billingAddress.state'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={data.billingAddress.zipCode}
                    onChange={(e) => onChange({
                      billingAddress: { ...data.billingAddress, zipCode: e.target.value }
                    })}
                    placeholder="ZIP Code"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors['billingAddress.zipCode'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <select
                    value={data.billingAddress.country}
                    onChange={(e) => onChange({
                      billingAddress: { ...data.billingAddress, country: e.target.value }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors['billingAddress.country'] ? 'border-red-500' : 'border-gray-300'
                    }`}
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

          <div className="flex justify-between pt-6 border-t">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <button
              type="submit"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Complete Payment
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Your payment is secured by industry-standard encryption
          </p>
        </form>
      </div>
    </motion.div>
  );
};