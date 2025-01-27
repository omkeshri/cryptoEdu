import React from 'react';
import { motion } from 'framer-motion';
import { WelcomeSection } from './WelcomeSection';
import { WebinarSection } from './WebinarSection';
import { ConsultationSection } from './ConsultationSection';

export const FreeTrialPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <WelcomeSection />
          <WebinarSection />
          <ConsultationSection />
        </motion.div>
      </div>
    </div>
  );
};