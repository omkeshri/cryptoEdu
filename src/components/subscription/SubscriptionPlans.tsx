import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { PlanCard } from './PlanCard';
import { Plan } from '../../types/subscription';

interface SubscriptionPlansProps {
  onPlanSelect: (plan: Plan) => void;
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

export const SubscriptionPlans = ({ onPlanSelect }: SubscriptionPlansProps) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Choose Your Trading Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Select the plan that best fits your goals and start your path to trading mastery
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              index={index} 
              onSelect={onPlanSelect}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Guarantee
            </h3>
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <span className="ml-2 text-lg font-medium text-gray-700">
                30-Day Money-Back Guarantee
              </span>
            </div>
            <p className="text-gray-600">
              Try any plan risk-free. If you're not completely satisfied within your first 30 days,
              we'll refund your payment in full – no questions asked.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};