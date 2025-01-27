import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Lock, ArrowLeft } from 'lucide-react';
import { Input } from '../../ui/input';
import { Plan } from '../../../types/subscription';

interface PaymentStepProps {
  plan: Plan;
  onSubmit: (data: any) => void;
  onBack: () => void;
}

export const PaymentStep = ({ plan, onSubmit, onBack }: PaymentStepProps) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    cardholderName: '',
    country: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          Complete Your Purchase
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
          {plan.name} Plan - ${plan.price}/{plan.interval}
        </motion.p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className="h-14 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              required
            />
            <motion.div
              initial={false}
              animate={{
                scale: focusedField === 'email' ? 1.02 : 1,
                opacity: focusedField === 'email' ? 1 : 0
              }}
              className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
            />
          </div>
        </div>

        {/* Card Information Section */}
        <div className="bg-gray-50 p-6 rounded-xl space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Card Information</h3>
          
          {/* Card Number */}
          <div className="relative">
            <Input
              type="text"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              onFocus={() => setFocusedField('cardNumber')}
              onBlur={() => setFocusedField(null)}
              icon={<CreditCard className={`w-5 h-5 transition-colors ${
                focusedField === 'cardNumber' ? 'text-primary-500' : 'text-gray-400'
              }`} />}
              placeholder="1234 1234 1234 1234"
              className="h-14 pl-12 text-lg bg-white border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              required
            />
            <motion.div
              initial={false}
              animate={{
                scale: focusedField === 'cardNumber' ? 1.02 : 1,
                opacity: focusedField === 'cardNumber' ? 1 : 0
              }}
              className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
            />
          </div>

          {/* Expiry and CVC */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Input
                type="text"
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                onFocus={() => setFocusedField('expiryDate')}
                onBlur={() => setFocusedField(null)}
                icon={<Calendar className={`w-5 h-5 transition-colors ${
                  focusedField === 'expiryDate' ? 'text-primary-500' : 'text-gray-400'
                }`} />}
                placeholder="MM / YY"
                className="h-14 pl-12 text-lg bg-white border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                required
              />
              <motion.div
                initial={false}
                animate={{
                  scale: focusedField === 'expiryDate' ? 1.02 : 1,
                  opacity: focusedField === 'expiryDate' ? 1 : 0
                }}
                className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
              />
            </div>

            <div className="relative">
              <Input
                type="text"
                value={formData.cvc}
                onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                onFocus={() => setFocusedField('cvc')}
                onBlur={() => setFocusedField(null)}
                icon={<Lock className={`w-5 h-5 transition-colors ${
                  focusedField === 'cvc' ? 'text-primary-500' : 'text-gray-400'
                }`} />}
                placeholder="CVC"
                className="h-14 pl-12 text-lg bg-white border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                required
                maxLength={4}
              />
              <motion.div
                initial={false}
                animate={{
                  scale: focusedField === 'cvc' ? 1.02 : 1,
                  opacity: focusedField === 'cvc' ? 1 : 0
                }}
                className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
              />
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="relative">
            <Input
              type="text"
              value={formData.cardholderName}
              onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
              onFocus={() => setFocusedField('cardholderName')}
              onBlur={() => setFocusedField(null)}
              placeholder="Full name on card"
              className="h-14 text-lg bg-white border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              required
            />
            <motion.div
              initial={false}
              animate={{
                scale: focusedField === 'cardholderName' ? 1.02 : 1,
                opacity: focusedField === 'cardholderName' ? 1 : 0
              }}
              className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
            />
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              onFocus={() => setFocusedField('country')}
              onBlur={() => setFocusedField(null)}
              className="w-full h-14 text-lg bg-white border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all px-4 appearance-none"
              required
            >
              <option value="">Select country or region</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
            </select>
            <motion.div
              initial={false}
              animate={{
                scale: focusedField === 'country' ? 1.02 : 1,
                opacity: focusedField === 'country' ? 1 : 0
              }}
              className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
            />
          </div>
        </div>

        {/* Save Information Checkbox */}
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="text-sm text-gray-600">
            Securely save my information for 1-click checkout
          </span>
        </label>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-6">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 h-14 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-200"
          >
            Pay ${plan.price}
          </motion.button>
        </div>
      </motion.form>

      {/* Security Badge */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Secure payment powered by Stripe
        </p>
      </div>
    </motion.div>
  );
};