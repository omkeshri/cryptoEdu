import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface JoinNowLayoutProps {
  children: React.ReactNode;
  onBack: () => void;
}

export const JoinNowLayout = ({ children, onBack }: JoinNowLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="mt-8 text-gray-600 hover:text-gray-900 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </motion.button>
        
        <main className="py-12">{children}</main>
      </div>
    </div>
  );
};