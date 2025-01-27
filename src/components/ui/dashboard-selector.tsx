import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Settings } from 'lucide-react';
import { UserRole } from '../../store/auth';

interface DashboardSelectorProps {
  value: UserRole;
  onChange: (value: UserRole) => void;
  className?: string;
}

export const DashboardSelector = ({ value, onChange, className = '' }: DashboardSelectorProps) => {
  const options = [
    {
      value: 'student',
      label: 'Student Dashboard',
      description: 'Access your courses, track progress, and view assignments',
      icon: Users,
    },
    {
      value: 'instructor',
      label: 'Instructor Dashboard',
      description: 'Manage courses, students, and track teaching performance',
      icon: GraduationCap,
    },
    {
      value: 'admin',
      label: 'Administrator Dashboard',
      description: 'Full system control and analytics',
      icon: Settings,
    },
  ] as const;

  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;

        return (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(option.value)}
            className={`w-full flex items-start space-x-4 p-4 rounded-lg border-2 transition-colors ${
              isSelected
                ? 'border-primary-500 bg-primary-500/10'
                : 'border-white/20 hover:border-white/40'
            }`}
            type="button"
          >
            <Icon className={`w-6 h-6 mt-1 ${
              isSelected ? 'text-primary-500' : 'text-white/60'
            }`} />
            <div className="flex-1 text-left">
              <p className={`font-medium ${
                isSelected ? 'text-primary-500' : 'text-white'
              }`}>
                {option.label}
              </p>
              <p className="text-sm text-white/60">{option.description}</p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};