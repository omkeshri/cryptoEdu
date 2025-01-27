import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SubscriptionPlans } from './SubscriptionPlans';
import { RegistrationForm } from './RegistrationForm';
import { PaymentForm } from './PaymentForm';
import { RegistrationData, PaymentData, Plan } from '../../types/subscription';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'plans' | 'registration' | 'payment';

export const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
  const [step, setStep] = useState<Step>('plans');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setStep('registration');
  };

  const handleRegistrationSubmit = (data: RegistrationData) => {
    setRegistrationData(data);
    setStep('payment');
  };

  const handlePaymentSubmit = (data: PaymentData) => {
    console.log('Payment submitted:', { plan: selectedPlan, registration: registrationData, payment: data });
    // Handle payment processing here
    onClose();
  };

  const modalContent = {
    plans: <SubscriptionPlans onPlanSelect={handlePlanSelect} />,
    registration: <RegistrationForm onSubmit={handleRegistrationSubmit} />,
    payment: selectedPlan && (
      <PaymentForm
        onSubmit={handlePaymentSubmit}
        selectedPlan={selectedPlan.name}
        totalAmount={selectedPlan.price}
      />
    ),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Progress indicator */}
              <div className="bg-gray-50 px-8 py-4 border-b">
                <div className="flex items-center justify-center space-x-4">
                  {['Choose Plan', 'Registration', 'Payment'].map((label, index) => {
                    const stepNumber = index + 1;
                    const isActive = (
                      (step === 'plans' && index === 0) ||
                      (step === 'registration' && index === 1) ||
                      (step === 'payment' && index === 2)
                    );
                    const isCompleted = (
                      (step === 'registration' && index === 0) ||
                      (step === 'payment' && index <= 1)
                    );

                    return (
                      <React.Fragment key={label}>
                        {index > 0 && (
                          <div className={`h-1 w-16 ${
                            isCompleted ? 'bg-primary-500' : 'bg-gray-200'
                          }`} />
                        )}
                        <div className="flex items-center">
                          <div className={`
                            w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                            ${isActive || isCompleted ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}
                          `}>
                            {stepNumber}
                          </div>
                          <span className="ml-2 text-sm font-medium text-gray-600">
                            {label}
                          </span>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {modalContent[step]}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};