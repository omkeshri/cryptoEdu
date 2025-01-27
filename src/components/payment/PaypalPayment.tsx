import React from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import { Plan } from '../../types/subscription';

interface PaypalPaymentProps {
  plan: Plan;
  onSubmit: () => void;
  onBack: () => void;
}

export const PaypalPayment = ({ plan, onSubmit, onBack }: PaypalPaymentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pay with PayPal</h2>
        <p className="text-gray-600">{plan.name} Plan - ${plan.price}/{plan.interval}</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl text-center mb-8">
        <Wallet className="w-16 h-16 text-[#00457C] mx-auto mb-6" />
        <p className="text-gray-700 mb-6">
          You will be redirected to PayPal to complete your payment securely.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSubmit}
          className="w-full h-14 bg-[#00457C] text-white text-lg font-semibold rounded-xl hover:bg-[#003660] transition-colors"
        >
          Continue to PayPal
        </motion.button>
      </div>

      <div className="text-center">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Back to payment methods
        </button>
      </div>
    </motion.div>
  );
};