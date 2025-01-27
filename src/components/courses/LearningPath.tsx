import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  'Introduction to Financial Markets',
  'Market Participants and Their Roles',
  'Basic Trading Concepts',
  'Understanding Market Indicators',
  'Risk Management Fundamentals',
  'Investment Basics'
];

export const LearningPath = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
      <div className="space-y-4">
        {modules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
          >
            <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold">
              {index + 1}
            </span>
            <span className="text-gray-700">{module}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};