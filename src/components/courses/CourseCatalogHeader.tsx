import React from 'react';
import { motion } from 'framer-motion';

export const CourseCatalogHeader = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Master Trading with Expert-Led Courses
          </h1>
          <p className="text-xl text-gray-300">
            Choose from our comprehensive selection of professional trading courses
            and start your journey to financial success today.
          </p>
        </motion.div>
      </div>
    </div>
  );
};