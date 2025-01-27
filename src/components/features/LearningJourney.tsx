import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Users, Award } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInRight } from '../../utils/animations';

const steps = [
  {
    icon: BookOpen,
    title: "1. Learn Fundamentals",
    description: "Start with comprehensive video lessons covering trading basics and market analysis."
  },
  {
    icon: Video,
    title: "2. Practice Trading",
    description: "Apply your knowledge using our risk-free simulator with real market conditions."
  },
  {
    icon: Users,
    title: "3. Join Live Sessions",
    description: "Participate in daily live trading sessions with professional mentors."
  },
  {
    icon: Award,
    title: "4. Get Certified",
    description: "Complete assessments and earn your professional trading certification."
  }
];

export const LearningJourney = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Your Learning Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow our proven path to becoming a successful trader through structured learning and hands-on experience.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={slideInRight}
                className="relative"
              >
                <div className="bg-gray-800 p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-750">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    className="bg-primary-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Icon className="w-8 h-8 text-primary-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-600 origin-left"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};