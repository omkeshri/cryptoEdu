import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Bitcoin, Building } from 'lucide-react';
import { PaymentMethod } from '../../../types/payment';

interface PaymentMethodSelectorProps {
  onSelect: (method: PaymentMethod) => void;
  onBack: () => void;
}

export const PaymentMethodSelector = ({ onSelect, onBack }: PaymentMethodSelectorProps) => {
  const paymentMethods = [
    {
      id: 'card',
      title: 'Credit / Debit Card',
      description: 'Pay securely with your card',
      icon: CreditCard,
      supportedCards: ['visa', 'mastercard', 'amex']
    },
    {
      id: 'paypal',
      title: 'PayPal',
      description: 'Fast and secure checkout',
      icon: Wallet
    },
    {
      id: 'crypto',
      title: 'Cryptocurrency',
      description: 'Pay with BTC, ETH, or USDT',
      icon: Bitcoin
    },
    {
      id: 'bank',
      title: 'Bank Transfer',
      description: 'Direct bank wire transfer',
      icon: Building
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          Choose Payment Method
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
          Select your preferred way to pay
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method, index) => {
          const Icon = method.icon;
          
          return (
            <motion.button
              key={method.id}
              onClick={() => onSelect(method.id as PaymentMethod)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {method.description}
                  </p>
                </div>
              </div>

              {method.id === 'card' && (
                <div className="mt-4 flex items-center space-x-2">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" alt="Visa" className="h-6 w-auto grayscale opacity-50" />
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" alt="Mastercard" className="h-6 w-auto grayscale opacity-50" />
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg" alt="American Express" className="h-6 w-auto grayscale opacity-50" />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Back to plan selection
        </button>
      </div>
    </div>
  );
};