import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { MobileStepper } from '../ui/mobile-stepper';

interface MobilePaymentLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  onBack?: () => void;
  onNext?: () => void;
}

export const MobilePaymentLayout = ({ 
  children, 
  currentStep,
  onBack,
  onNext 
}: MobilePaymentLayoutProps) => {
  const steps = ['Plan', 'Details', 'Payment', 'Confirmation'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white/80 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-24 px-4">
        <div className="max-w-lg mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Stepper */}
      <MobileStepper
        steps={steps}
        currentStep={currentStep}
        onBack={onBack}
        onNext={onNext}
      />
    </div>
  );
};