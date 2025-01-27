import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Bitcoin } from 'lucide-react';
import { PaymentMethod } from '../../types/payment';

interface MobilePaymentMethodProps {
  selectedMethod: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
}

export const MobilePaymentMethod = ({ selectedMethod, onSelect }: MobilePaymentMethodProps) => {
  const methods = [
    {
      id: 'card',
      label: 'Card',
      icon: CreditCard,
      description: 'Credit or Debit'
    },
    {
      id: 'paypal',
      label: 'PayPal',
      icon: Wallet,
      description: 'Fast & Secure'
    },
    {
      id: 'crypto',
      label: 'Crypto',
      icon: Bitcoin,
      description: 'BTC, ETH & More'
    },
    {
      id: 'bank',
      label: 'Bank',
      icon: Wallet,
      description: 'Wire Transfer'
    }
  ] as const;

  return (
    <div className="grid grid-cols-2 gap-4">
      {methods.map((method, index) => {
        const Icon = method.icon;
        const isSelected = selectedMethod === method.id;

        return (
          <motion.button
            key={method.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(method.id as PaymentMethod)}
            className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
              isSelected 
                ? 'border-primary-500 bg-primary-500/10' 
                : 'border-white/20 hover:border-white/40'
            }`}
          >
            <Icon className={`w-6 h-6 mb-2 ${
              isSelected ? 'text-primary-500' : 'text-white/60'
            }`} />
            <p className={`font-medium ${
              isSelected ? 'text-primary-500' : 'text-white'
            }`}>
              {method.label}
            </p>
            <p className="text-xs text-white/60">
              {method.description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
};