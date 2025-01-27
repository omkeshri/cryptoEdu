import React, { useState } from 'react';
import { JoinNowSteps } from './JoinNowSteps';
import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { PlanSelectionStep } from './steps/PlanSelectionStep';
import { PaymentStep } from './steps/PaymentStep';
import { SuccessStep } from './steps/SuccessStep';

interface PersonalInfo {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  country: string;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  interval: string;
  features: string[];
  popular: boolean;
  savings: number;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

const initialPersonalInfo: PersonalInfo = {
  fullName: '',
  email: '',
  password: '',
  phone: '',
  country: ''
};

export const JoinNowContent = () => {
  const [step, setStep] = useState<'personal' | 'plan' | 'payment' | 'success'>('personal');
  const [data, setData] = useState({
    personal: initialPersonalInfo,
    plan: null as Plan | null,
    payment: {} as PaymentInfo
  });

  const updateData = (key: keyof typeof data, value: any) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <JoinNowSteps currentStep={step} />
      
      <div className="mt-12">
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
              setStep('payment');
            }}
            onBack={() => setStep('personal')}
          />
        )}

        {step === 'payment' && data.plan && (
          <PaymentStep
            plan={data.plan}
            onSubmit={(paymentData) => {
              updateData('payment', paymentData);
              setStep('success');
            }}
            onBack={() => setStep('plan')}
          />
        )}

        {step === 'success' && (
          <SuccessStep
            email={data.personal.email}
            planName={data.plan?.name || ''}
          />
        )}
      </div>
    </div>
  );
};