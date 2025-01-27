import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  currentStep: string;
}

const steps = [
  { id: 'personal', label: 'Personal Info' },
  { id: 'plan', label: 'Select Plan' },
  { id: 'payment', label: 'Payment' },
  { id: 'success', label: 'Complete' }
];

export const ProgressSteps = ({ currentStep }: ProgressStepsProps) => {
  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const currentIndex = getCurrentStepIndex();
          const isCompleted = index < currentIndex;
          const isCurrent = step.id === currentStep;

          return (
            <React.Fragment key={step.id}>
              {index > 0 && (
                <div className="flex-1 h-1 mx-2">
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
                    backgroundColor: isCompleted || isCurrent ? '#2563eb' : '#e5e7eb'
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className={`text-sm ${isCurrent ? 'text-white' : 'text-gray-600'}`}>
                      {index + 1}
                    </span>
                  )}
                </motion.div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 whitespace-nowrap">
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