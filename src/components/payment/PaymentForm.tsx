import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { PaymentMethod } from '../../types/payment';

interface PaymentFormProps {
  amount: number;
  onSubmit: (paymentDetails: any) => void;
}

export const PaymentForm = ({ amount, onSubmit }: PaymentFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
      >
        <h2 className="text-xl font-semibold text-white mb-6">
          Select Payment Method
        </h2>
        <PaymentMethodSelector
          selectedMethod={paymentMethod}
          onSelect={setPaymentMethod}
        />
      </motion.div>
    </div>
  );
};