import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PaymentMethodSelector } from '../components/payment/PaymentMethodSelector';
import { CardPayment } from '../components/payment/CardPayment';
import { CryptoPayment } from '../components/payment/CryptoPayment';
import { BankTransfer } from '../components/payment/BankTransfer';
import { PaymentSuccess } from '../components/payment/PaymentSuccess';
import { PaymentMethod, CryptoCurrency } from '../types/payment';
import { handlePaymentSuccess } from '../lib/payment-service';
import { AnimatedBackground } from '../components/ui/animated-background';
import { ResponsiveContainer } from '../components/ui/responsive-container';

interface PaymentPageProps {
  onBack: () => void;
  planName: string;
  amount: number;
  email: string;
}

export const PaymentPage = ({ onBack, planName, amount, email }: PaymentPageProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrency>('BTC');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    try {
      setIsProcessing(true);
      await handlePaymentSuccess({ email, planName, amount });
      setIsSuccess(true);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isSuccess) {
    return (
      <PaymentSuccess
        email={email}
        planName={planName}
        onContinue={() => {/* Handle navigation to dashboard */}}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <AnimatedBackground />
      
      <div className="relative">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="fixed top-6 left-6 flex items-center space-x-2 text-white/80 hover:text-white transition-colors z-10"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>

        {/* Main Content */}
        <ResponsiveContainer className="pt-24 pb-12">
          <div className="space-y-8">
            {/* Payment Method Selection */}
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

            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              {paymentMethod === 'card' && (
                <CardPayment onSubmit={handlePayment} />
              )}
              {paymentMethod === 'crypto' && (
                <CryptoPayment
                  amount={amount}
                  selectedCrypto={selectedCrypto}
                  onSelectCrypto={setSelectedCrypto}
                />
              )}
              {paymentMethod === 'bank' && (
                <BankTransfer amount={amount} />
              )}
            </motion.div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};