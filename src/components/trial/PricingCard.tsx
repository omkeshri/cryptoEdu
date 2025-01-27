import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: number;
  duration: string;
  features: PricingFeature[];
  recommended?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  onSelect: () => void;
}

export const PricingCard = ({ tier, onSelect }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-2xl shadow-lg p-6 ${
        tier.recommended ? 'ring-2 ring-primary-500' : ''
      }`}
    >
      {tier.recommended && (
        <div className="bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
          Recommended
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
        <span className="text-gray-500">/{tier.duration}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-5 h-5 mr-2 ${
              feature.included ? 'text-green-500' : 'text-gray-300'
            }`} />
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          tier.recommended
            ? 'bg-primary-600 text-white hover:bg-primary-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Start {tier.name} Trial
      </button>
    </motion.div>
  );
};