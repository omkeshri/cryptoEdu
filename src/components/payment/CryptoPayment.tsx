import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Copy, CheckCircle } from 'lucide-react';
import { Plan } from '../../types/subscription';

interface CryptoPaymentProps {
  plan: Plan;
  onSubmit: () => void;
  onBack: () => void;
}

export const CryptoPayment = ({ plan, onSubmit, onBack }: CryptoPaymentProps) => {
  // Move cryptoOptions inside component to access plan prop
  const cryptoOptions = [
    {
      name: 'Bitcoin (BTC)',
      address: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5',
      amount: 0.0023,
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bitcoin:3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5'
    },
    {
      name: 'Ethereum (ETH)',
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      amount: 0.15,
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ethereum:0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
    },
    {
      name: 'USDT (TRC20)',
      address: 'TNVrLxMqYFHHFwKZj6YkQGQXkAE8XAWYeH',
      amount: plan.price,
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tron:TNVrLxMqYFHHFwKZj6YkQGQXkAE8XAWYeH'
    }
  ];

  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pay with Cryptocurrency</h2>
        <p className="text-gray-600">{plan.name} Plan - ${plan.price}/{plan.interval}</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl mb-8">
        <div className="flex space-x-4 mb-8">
          {cryptoOptions.map((crypto) => (
            <button
              key={crypto.name}
              onClick={() => setSelectedCrypto(crypto)}
              className={`flex-1 p-4 rounded-lg transition-all ${
                selectedCrypto.name === crypto.name
                  ? 'bg-primary-50 border-2 border-primary-500'
                  : 'bg-white border-2 border-gray-200 hover:border-primary-200'
              }`}
            >
              <p className="font-medium text-gray-900">{crypto.name}</p>
              <p className="text-sm text-gray-500">{crypto.amount} {crypto.name.split(' ')[1]}</p>
            </button>
          ))}
        </div>

        <div className="text-center mb-8">
          <img
            src={selectedCrypto.qrCode}
            alt={`${selectedCrypto.name} QR Code`}
            className="w-48 h-48 mx-auto mb-6"
          />
          
          <div className="inline-block bg-white rounded-lg p-4">
            <p className="text-sm text-gray-500 mb-2">Send exactly</p>
            <div className="flex items-center justify-center space-x-2">
              <p className="font-mono text-lg font-bold text-gray-900">
                {selectedCrypto.amount} {selectedCrypto.name.split(' ')[1]}
              </p>
              <button
                onClick={() => copyToClipboard(selectedCrypto.amount.toString(), 'amount')}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                {copiedField === 'amount' ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-2">To address</p>
          <div className="flex items-center justify-between">
            <p className="font-mono text-sm text-gray-900">{selectedCrypto.address}</p>
            <button
              onClick={() => copyToClipboard(selectedCrypto.address, 'address')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {copiedField === 'address' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Important:</strong> Send only {selectedCrypto.name.split(' ')[0]} ({selectedCrypto.name.split(' ')[1]}) 
            to this address. Sending any other cryptocurrency may result in permanent loss.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Back to payment methods
        </button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSubmit}
          className="px-8 h-14 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-200"
        >
          I've Sent the Payment
        </motion.button>
      </div>
    </motion.div>
  );
};