import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Bitcoin } from 'lucide-react';
import { PaymentMethod } from '../../types/payment';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
}

export const PaymentMethodSelector = ({ selectedMethod, onSelect }: PaymentMethodSelectorProps) => {
  const paymentMethods = [
    {
      id: 'card',
      label: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay securely with your card',
    },
    {
      id: 'paypal',
      label: 'PayPal',
      icon: Wallet,
      description: 'Fast and secure payment',
    },
    {
      id: 'crypto',
      label: 'Cryptocurrency',
      icon: Bitcoin,
      description: 'BTC, ETH, USDT, USDC',
    },
    {
      id: 'bank',
      label: 'Bank Transfer',
      icon: Wallet,
      description: 'Direct bank transfer',
    },
  ] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {paymentMethods.map((method) => {
        const Icon = method.icon;
        const isSelected = selectedMethod === method.id;

        return (
          <motion.button
            key={method.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(method.id)}
            className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all ${
              isSelected
                ? 'border-primary-500 bg-primary-500/10'
                : 'border-white/20 hover:border-white/40'
            }`}
          >
            <Icon className={`w-8 h-8 mb-3 ${
              isSelected ? 'text-primary-500' : 'text-white/60'
            }`} />
            <h3 className={`font-semibold mb-1 ${
              isSelected ? 'text-primary-500' : 'text-white'
            }`}>
              {method.label}
            </h3>
            <p className="text-sm text-white/60 text-center">
              {method.description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
};