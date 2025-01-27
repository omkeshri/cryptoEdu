import React from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle } from 'lucide-react';

interface BankTransferProps {
  amount: number;
}

export const BankTransfer = ({ amount }: BankTransferProps) => {
  const bankDetails = {
    accountName: 'Trading Academy Ltd',
    accountNumber: 'XXXX-XXXX-XXXX-XXXX',
    bankName: 'Global Trading Bank',
    swiftCode: 'GTBXXXXX',
    reference: Math.random().toString(36).substring(2, 10).toUpperCase(),
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Add toast notification here
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Bank Transfer Instructions
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white/60 text-sm">Amount to Pay</p>
              <p className="text-xl font-semibold text-white">${amount}</p>
            </div>
            <button
              onClick={() => copyToClipboard(amount.toString())}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Copy className="w-5 h-5 text-white/60" />
            </button>
          </div>

          {Object.entries(bankDetails).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <div>
                <p className="text-white/60 text-sm">{key}</p>
                <p className="text-white">{value}</p>
              </div>
              <button
                onClick={() => copyToClipboard(value)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Copy className="w-5 h-5 text-white/60" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-500/10 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
          <div className="flex-1">
            <p className="text-white font-medium">Important</p>
            <p className="text-white/60 text-sm">
              Please include the reference number in your transfer description for faster processing.
              Once we receive your payment, your account will be activated within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};