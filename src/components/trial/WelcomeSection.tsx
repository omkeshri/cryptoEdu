import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Access to live trading sessions',
  'Professional trading tools and resources',
  'Community support and networking',
  'Personal mentor guidance'
];

export const WelcomeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Your Trading Journey
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Start your 14-day free trial and unlock the full potential of professional trading education.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What's Included:
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Your Trial Includes:
          </h3>
          <div className="space-y-3 text-gray-600">
            <p>✓ Unlimited access to basic courses</p>
            <p>✓ 2 live trading sessions</p>
            <p>✓ Trading simulator access</p>
            <p>✓ Basic market analysis tools</p>
          </div>
          <button className="w-full bg-primary-600 text-white rounded-lg py-3 px-6 mt-6 hover:bg-primary-700 transition-colors">
            Activate Your Free Trial
          </button>
        </div>
      </div>
    </motion.div>
  );
};