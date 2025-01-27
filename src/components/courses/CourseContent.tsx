import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export const CourseContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          'Market newcomers',
          'Finance students',
          'Investment enthusiasts',
          'Career transitioners'
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
          >
            <Users className="w-5 h-5 text-primary-600" />
            <span className="text-gray-700">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};