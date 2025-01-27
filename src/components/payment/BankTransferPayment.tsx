import React from 'react';
import { motion } from 'framer-motion';
import { Building, Copy, CheckCircle } from 'lucide-react';
import { Plan } from '../../types/subscription';

interface BankTransferPaymentProps {
  plan: Plan;
  onSubmit: () => void;
  onBack: () => void;
}

export const BankTransferPayment = ({ plan, onSubmit, onBack }: BankTransferPaymentProps) => {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const bankDetails = {
    accountName: 'Trading Academy Ltd',
    accountNumber: '1234567890',
    bankName: 'Global Trading Bank',
    swiftCode: 'GTBXXXXX',
    routingNumber: '021000021',
    reference: `ORDER-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
  };

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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bank Transfer</h2>
        <p className="text-gray-600">{plan.name} Plan - ${plan.price}/{plan.interval}</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl mb-8">
        <Building className="w-16 h-16 text-primary-600 mx-auto mb-6" />
        
        <div className="space-y-6">
          {Object.entries(bankDetails).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div>
                <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="font-medium text-gray-900">{value}</p>
              </div>
              <button
                onClick={() => copyToClipboard(value, key)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {copiedField === key ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Important:</strong> Please include your reference number in the transfer description
            for faster processing. Once we receive your payment, your account will be activated within 24 hours.
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
          I've Made the Transfer
        </motion.button>
      </div>
    </motion.div>
  );
};