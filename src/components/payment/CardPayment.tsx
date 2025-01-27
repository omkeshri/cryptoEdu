import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import { AnimatedInput } from '../ui/animated-input';
import { AnimatedButton } from '../ui/animated-button';

interface CardPaymentProps {
  onSubmit: (cardDetails: any) => void;
}

export const CardPayment = ({ onSubmit }: CardPaymentProps) => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(cardDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <AnimatedInput
          type="text"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
          icon={<CreditCard className="w-5 h-5" />}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <AnimatedInput
            type="text"
            placeholder="MM/YY"
            value={cardDetails.expiry}
            onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
            icon={<Calendar className="w-5 h-5" />}
            required
          />

          <AnimatedInput
            type="text"
            placeholder="CVC"
            value={cardDetails.cvc}
            onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
            icon={<Lock className="w-5 h-5" />}
            required
            maxLength={4}
          />
        </div>

        <AnimatedInput
          type="text"
          placeholder="Cardholder Name"
          value={cardDetails.name}
          onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
          required
        />
      </div>

      <AnimatedButton type="submit">
        Complete Payment
      </AnimatedButton>

      <div className="flex items-center justify-center space-x-2 text-white/60">
        <Lock className="w-4 h-4" />
        <span className="text-sm">Secure payment powered by Stripe</span>
      </div>
    </form>
  );
};