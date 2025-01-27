import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users2, Trophy } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const features = [
  {
    icon: Rocket,
    title: "Accelerated Learning",
    description: "Master trading fundamentals in weeks, not years, with our structured curriculum and hands-on practice sessions."
  },
  {
    icon: Target,
    title: "Personalized Strategy",
    description: "Develop your unique trading style with customized learning paths and one-on-one mentorship from pro traders."
  },
  {
    icon: Users2,
    title: "Active Community",
    description: "Join a thriving community of traders, participate in live trading sessions, and learn from peer experiences."
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Our students achieve 85% higher success rates compared to self-taught traders within their first year."
  }
];

export const ValueProposition = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-primary-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};