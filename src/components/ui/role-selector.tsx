import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Settings } from 'lucide-react';
import { UserRole } from '../../store/auth';

interface RoleSelectorProps {
  value: UserRole;
  onChange: (role: UserRole) => void;
}

export const RoleSelector = ({ value, onChange }: RoleSelectorProps) => {
  const roles = [
    {
      id: 'student',
      label: 'Student',
      icon: Users,
      description: 'Access courses and track progress'
    },
    {
      id: 'instructor',
      label: 'Instructor',
      icon: GraduationCap,
      description: 'Create and manage courses'
    },
    {
      id: 'admin',
      label: 'Administrator',
      icon: Settings,
      description: 'Full system management'
    }
  ] as const;

  return (
    <div className="grid gap-4">
      {roles.map((role, index) => {
        const Icon = role.icon;
        const isSelected = value === role.id;

        return (
          <motion.button
            key={role.id}
            type="button"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onChange(role.id as UserRole)}
            className={`flex items-center p-4 rounded-lg border-2 transition-all ${
              isSelected 
                ? 'border-primary-500 bg-primary-500/10' 
                : 'border-white/20 hover:border-white/40'
            }`}
          >
            <Icon className={`w-5 h-5 mr-3 ${
              isSelected ? 'text-primary-500' : 'text-white/60'
            }`} />
            <div className="text-left">
              <p className={`font-medium ${
                isSelected ? 'text-primary-500' : 'text-white'
              }`}>
                {role.label}
              </p>
              <p className="text-sm text-white/60">{role.description}</p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};