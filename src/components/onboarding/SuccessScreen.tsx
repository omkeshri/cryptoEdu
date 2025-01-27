import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';

interface SuccessScreenProps {
  email: string;
  planName: string;
}

export const SuccessScreen = ({ email, planName }: SuccessScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto text-center"
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-12 h-12 text-green-500" />
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to the Trading Academy!
        </h2>
        <p className="text-gray-600 mb-8">
          Your {planName} subscription has been activated successfully.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <Mail className="w-5 h-5 mr-2" />
            <span>Check your inbox</span>
          </div>
          <p className="text-sm text-gray-600">
            We've sent your login credentials and getting started guide to:
            <br />
            <span className="font-medium text-gray-900">{email}</span>
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Access Your Dashboard
          </button>
          <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            View Getting Started Guide
          </button>
        </div>
      </div>
    </motion.div>
  );
};