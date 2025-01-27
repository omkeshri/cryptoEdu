import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface JoinNowStepsProps {
  currentStep: string;
}

const steps = [
  { id: 'personal', label: 'Personal Info' },
  { id: 'plan', label: 'Select Plan' },
  { id: 'payment', label: 'Payment' },
  { id: 'success', label: 'Complete' }
];

export const JoinNowSteps = ({ currentStep }: JoinNowStepsProps) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = step.id === currentStep;

          return (
            <React.Fragment key={step.id}>
              {index > 0 && (
                <div className="flex-1 h-0.5 mx-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isCompleted ? 1 : 0 }}
                    className="h-full bg-primary-500 origin-left"
                  />
                </div>
              )}
              <div className="relative">
                <motion.div
                  animate={{
                    scale: isCurrent ? 1.1 : 1,
                    backgroundColor: isCompleted || isCurrent ? '#2563eb' : '#f3f4f6'
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted || isCurrent ? 'shadow-md' : ''
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <span className={isCurrent ? 'text-white' : 'text-gray-400'}>
                      {index + 1}
                    </span>
                  )}
                </motion.div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 whitespace-nowrap">
                  {step.label}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};