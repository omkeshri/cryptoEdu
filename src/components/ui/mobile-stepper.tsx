import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileStepperProps {
  steps: string[];
  currentStep: number;
  onNext?: () => void;
  onBack?: () => void;
}

export const MobileStepper = ({ steps, currentStep, onNext, onBack }: MobileStepperProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-white/10 p-4 md:hidden">
      <div className="flex items-center justify-between">
        {onBack && currentStep > 0 ? (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white/80 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}
        
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full ${
                index === currentStep 
                  ? 'w-8 bg-primary-500' 
                  : 'w-2 bg-white/20'
              }`}
              animate={{
                width: index === currentStep ? 32 : 8,
                backgroundColor: index === currentStep 
                  ? 'rgb(59, 130, 246)' 
                  : 'rgba(255, 255, 255, 0.2)',
              }}
            />
          ))}
        </div>

        {onNext && currentStep < steps.length - 1 ? (
          <button
            onClick={onNext}
            className="flex items-center space-x-2 text-white/80 hover:text-white"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};