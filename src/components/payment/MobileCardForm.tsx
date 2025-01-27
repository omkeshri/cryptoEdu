import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import { AnimatedInput } from '../ui/animated-input';

interface MobileCardFormProps {
  onSubmit: (data: any) => void;
}

export const MobileCardForm = ({ onSubmit }: MobileCardFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({
      // Form data
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatedInput
        type="text"
        placeholder="Card Number"
        icon={<CreditCard className="w-5 h-5" />}
        className="w-full"
      />

      <div className="grid grid-cols-2 gap-4">
        <AnimatedInput
          type="text"
          placeholder="MM/YY"
          icon={<Calendar className="w-5 h-5" />}
        />
        <AnimatedInput
          type="text"
          placeholder="CVC"
          icon={<Lock className="w-5 h-5" />}
          maxLength={4}
        />
      </div>

      <AnimatedInput
        type="text"
        placeholder="Name on Card"
      />

      <button
        type="submit"
        className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold"
      >
        Pay Now
      </button>
    </form>
  );
};