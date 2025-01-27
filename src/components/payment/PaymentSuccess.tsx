import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../../store/auth';

interface PaymentSuccessProps {
  email: string;
  planName: string;
  onContinue: () => void;
}

export const PaymentSuccess = ({ email, planName, onContinue }: PaymentSuccessProps) => {
  const { signIn } = useAuth();

  useEffect(() => {
    // Auto-sign in user after successful payment
    const autoSignIn = async () => {
      try {
        await signIn({
          email,
          password: 'tempPassword', // This would be replaced with the actual password sent via email
          role: 'student',
          dashboardType: 'beginner'
        });
      } catch (error) {
        console.error('Auto sign-in failed:', error);
      }
    };

    autoSignIn();
  }, [email, signIn]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto text-center"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>

        <h2 className="text-2xl font-bold text-white mb-4">
          Payment Successful!
        </h2>
        <p className="text-white/80 mb-6">
          Welcome to {planName}! Your journey to financial mastery begins now.
        </p>

        <div className="bg-white/5 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center text-white/80 mb-4">
            <Mail className="w-5 h-5 mr-2" />
            <span>Check your inbox</span>
          </div>
          <p className="text-sm text-white/60">
            We've sent your login credentials to:
            <br />
            <span className="text-white font-medium">{email}</span>
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
          >
            <span>Continue to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};