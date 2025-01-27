import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, BookOpen, GraduationCap, LineChart, DollarSign, Bitcoin } from 'lucide-react';

const floatingElements = [
  { icon: BarChart2, delay: 0, x: '10%', y: '20%' },
  { icon: BookOpen, delay: 0.2, x: '80%', y: '15%' },
  { icon: GraduationCap, delay: 0.4, x: '15%', y: '70%' },
  { icon: LineChart, delay: 0.6, x: '75%', y: '75%' },
  { icon: DollarSign, delay: 0.8, x: '90%', y: '40%' },
  { icon: Bitcoin, delay: 1, x: '5%', y: '40%' },
];

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-white/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.2, 1],
              x: [element.x, `calc(${element.x} + 30px)`, element.x],
              y: [element.y, `calc(${element.y} - 30px)`, element.y],
            }}
            transition={{
              delay: element.delay,
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              left: element.x,
              top: element.y,
            }}
          >
            <Icon className="w-16 h-16 md:w-24 md:h-24" />
          </motion.div>
        );
      })}
    </div>
  );
};