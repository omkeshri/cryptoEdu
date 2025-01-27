import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { JoinNowSteps } from '../components/join/JoinNowSteps';
import { PersonalInfoStep } from '../components/join/steps/PersonalInfoStep';
import { PlanSelectionStep } from '../components/join/steps/PlanSelectionStep';
import { PaymentMethodSelector } from '../components/join/steps/PaymentMethodSelector';
import { PaymentStep } from '../components/join/steps/PaymentStep';
import { PaypalPayment } from '../components/payment/PaypalPayment';
import { CryptoPayment } from '../components/payment/CryptoPayment';
import { BankTransferPayment } from '../components/payment/BankTransferPayment';
import { SuccessStep } from '../components/join/steps/SuccessStep';
import { PersonalInfo } from '../types/onboarding';
import { Plan } from '../types/subscription';
import { PaymentMethod } from '../types/payment';

interface JoinNowPageProps {
  onBack: () => void;
}

const initialPersonalInfo: PersonalInfo = {
  firstName: '',
  lastName: '',
  email: ''
};

type Step = 'personal' | 'plan' | 'payment-method' | 'payment' | 'success';

export const JoinNowPage = ({ onBack }: JoinNowPageProps) => {
  const [step, setStep] = useState<Step>('personal');
  const [data, setData] = useState({
    personal: initialPersonalInfo,
    plan: null as Plan | null,
    paymentMethod: null as PaymentMethod | null,
    payment: null as any
  });

  const updateData = (key: keyof typeof data, value: any) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const renderPaymentComponent = () => {
    if (!data.plan) return null;

    switch (data.paymentMethod) {
      case 'card':
        return (
          <PaymentStep
            plan={data.plan}
            onSubmit={(paymentData) => {
              updateData('payment', paymentData);
              setStep('success');
            }}
            onBack={() => setStep('payment-method')}
          />
        );
      case 'paypal':
        return (
          <PaypalPayment
            plan={data.plan}
            onSubmit={() => setStep('success')}
            onBack={() => setStep('payment-method')}
          />
        );
      case 'crypto':
        return (
          <CryptoPayment
            plan={data.plan}
            onSubmit={() => setStep('success')}
            onBack={() => setStep('payment-method')}
          />
        );
      case 'bank':
        return (
          <BankTransferPayment
            plan={data.plan}
            onSubmit={() => setStep('success')}
            onBack={() => setStep('payment-method')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wMikiLz48L2c+PC9zdmc+')] opacity-50" />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-6 left-6 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="relative">
              <div className="bg-primary-50 p-4 rounded-full">
                <TrendingUp className="w-10 h-10 text-primary-600" />
              </div>
              <motion.div
                className="absolute inset-0 bg-primary-200/50 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-12">
            <JoinNowSteps currentStep={step} />
          </div>

          {/* Step Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-8"
          >
            {step === 'personal' && (
              <PersonalInfoStep
                initialData={data.personal}
                onSubmit={(personalData) => {
                  updateData('personal', personalData);
                  setStep('plan');
                }}
              />
            )}

            {step === 'plan' && (
              <PlanSelectionStep
                selectedPlan={data.plan}
                onSubmit={(plan) => {
                  updateData('plan', plan);
                  setStep('payment-method');
                }}
                onBack={() => setStep('personal')}
              />
            )}

            {step === 'payment-method' && (
              <PaymentMethodSelector
                onSelect={(method) => {
                  updateData('paymentMethod', method);
                  setStep('payment');
                }}
                onBack={() => setStep('plan')}
              />
            )}

            {step === 'payment' && renderPaymentComponent()}

            {step === 'success' && (
              <SuccessStep
                email={data.personal.email}
                planName={data.plan?.name || ''}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};