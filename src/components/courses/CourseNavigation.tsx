import React from 'react';
import { motion } from 'framer-motion';

export const CourseNavigation = () => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex space-x-1 p-4"
          >
            <button className="px-4 py-2 text-primary-600 font-medium border-b-2 border-primary-600">
              Basics of Financial Markets (KYFM)
            </button>
            <button className="px-4 py-2 text-gray-500 font-medium hover:text-gray-700" disabled>
              Intermediate Markets (Coming Soon)
            </button>
            <button className="px-4 py-2 text-gray-500 font-medium hover:text-gray-700" disabled>
              Advanced Trading (Coming Soon)
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};