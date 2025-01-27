import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const CourseOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
      <p className="text-gray-600 mb-6">
        Master the fundamentals of financial markets through our comprehensive beginner-friendly program. 
        Build a strong foundation in market operations and trading basics.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-4">After Completion You'll Be Able To</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          'Understand core financial market concepts',
          'Develop basic market analysis skills',
          'Navigate trading platforms confidently',
          'Identify market opportunities',
          'Implement risk management strategies'
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};