import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import { Plan } from '../../types/subscription';

interface PlanSelectionProps {
  selectedPlan: Plan | null;
  onSelect: (plan: Plan) => void;
  onNext: () => void;
  onBack: () => void;
}

const plans: Plan[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 49.99,
    interval: 'month',
    features: [
      'Full course library access',
      'Live trading sessions',
      'Community forum access',
      'Basic market analysis tools',
      'Email support'
    ],
    popular: false,
    savings: 0
  },
  {
    id: 'quarterly',
    name: '3-Month',
    price: 129.99,
    interval: '3 months',
    features: [
      'Everything in Monthly plan',
      'Priority support',
      'Advanced market tools',
      'Weekly mentor sessions',
      'Trading simulator access'
    ],
    popular: true,
    savings: 20
  },
  {
    id: 'annual',
    name: 'Annual',
    price: 399.99,
    interval: 'year',
    features: [
      'Everything in 3-Month plan',
      'One-on-one mentoring',
      'Premium analysis tools',
      'Strategy development help',
      'Career guidance'
    ],
    popular: false,
    savings: 33
  }
];

export const PlanSelection = ({ selectedPlan, onSelect, onNext, onBack }: PlanSelectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h2>
        <p className="text-gray-600">Select the plan that best fits your goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            whileHover={{ scale: 1.02 }}
            className={`relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border-2 transition-colors ${
              selectedPlan?.id === plan.id
                ? 'border-primary-500'
                : 'border-transparent'
            }`}
            onClick={() => onSelect(plan)}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                Most Popular
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600">/{plan.interval}</span>
                {plan.savings > 0 && (
                  <div className="mt-2">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Save {plan.savings}%
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedPlan}
          className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Payment
        </button>
      </div>
    </motion.div>
  );
};