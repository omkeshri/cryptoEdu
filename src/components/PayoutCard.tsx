import React from 'react';
import { motion } from 'framer-motion';

interface PayoutCardProps {
  amount: string;
  delay: number;
}

export const PayoutCard = ({ amount, delay }: PayoutCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3"
    >
      <div className="text-xl font-bold text-white">${amount}</div>
      <div className="bg-green-500/20 text-green-400 text-sm px-2 py-1 rounded">
        Payout
      </div>
    </motion.div>
  );
};