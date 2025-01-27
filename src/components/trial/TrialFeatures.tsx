import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Video, Award } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Access our complete library of trading courses and materials'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Get guidance from professional traders and industry experts'
  },
  {
    icon: Video,
    title: 'Live Trading Sessions',
    description: 'Join daily live trading sessions and market analysis'
  },
  {
    icon: Award,
    title: 'Practice Account',
    description: 'Risk-free trading with $100,000 virtual currency'
  }
];

export const TrialFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};