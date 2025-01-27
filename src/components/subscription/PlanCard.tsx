import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Plan } from '../../types/subscription';

interface PlanCardProps {
  plan: Plan;
  index: number;
  onSelect: (plan: Plan) => void;
}

export const PlanCard = ({ plan, index, onSelect }: PlanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
        plan.popular ? 'ring-2 ring-primary-500' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        
        <div className="mb-6">
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

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => onSelect(plan)}
          className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
            plan.popular
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};