import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RegistrationForm } from '../components/subscription/RegistrationForm';
import { SubscriptionPlans } from '../components/subscription/SubscriptionPlans';
import { PaymentForm } from '../components/subscription/PaymentForm';
import { RegistrationData, PaymentData, Plan } from '../types/subscription';

type Step = 'registration' | 'plan' | 'payment';

export const RegisterPage = () => {
  const [step, setStep] = useState<Step>('registration');
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleRegistrationSubmit = (data: RegistrationData) => {
    setRegistrationData(data);
    setStep('plan');
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setStep('payment');
  };

  const handlePaymentSubmit = (data: PaymentData) => {
    // Handle payment submission
    console.log('Payment submitted:', {
      registration: registrationData,
      plan: selectedPlan,
      payment: data
    });
    // Redirect to success page or show success message
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-12">
              {['Registration', 'Select Plan', 'Payment'].map((label, index) => {
                const isActive = (
                  (step === 'registration' && index === 0) ||
                  (step === 'plan' && index === 1) ||
                  (step === 'payment' && index === 2)
                );
                const isCompleted = (
                  (step === 'plan' && index === 0) ||
                  (step === 'payment' && index <= 1)
                );

                return (
                  <div key={label} className="flex-1 relative">
                    <div className="flex items-center">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                        ${isActive || isCompleted ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}
                      `}>
                        {index + 1}
                      </div>
                      <div className={`
                        flex-1 h-1 mx-4
                        ${isCompleted ? 'bg-primary-500' : 'bg-gray-200'}
                      `} />
                    </div>
                    <span className="absolute left-0 right-0 text-center mt-2 text-sm font-medium text-gray-200">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {step === 'registration' && (
                <RegistrationForm onSubmit={handleRegistrationSubmit} />
              )}
              {step === 'plan' && (
                <SubscriptionPlans onPlanSelect={handlePlanSelect} />
              )}
              {step === 'payment' && selectedPlan && (
                <PaymentForm
                  onSubmit={handlePaymentSubmit}
                  selectedPlan={selectedPlan.name}
                  totalAmount={selectedPlan.price}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};