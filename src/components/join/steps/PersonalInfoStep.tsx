import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail } from 'lucide-react';
import { PersonalInfo } from '../../../types/onboarding';
import { Input } from '../../ui/input';

interface PersonalInfoStepProps {
  initialData: PersonalInfo;
  onSubmit: (data: PersonalInfo) => void;
}

export const PersonalInfoStep = ({ initialData, onSubmit }: PersonalInfoStepProps) => {
  const [formData, setFormData] = React.useState<PersonalInfo>(initialData);
  const [focusedField, setFocusedField] = React.useState<keyof PersonalInfo | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto px-4 sm:px-0"
    >
      <div className="text-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
        >
          Join Our Community
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600"
        >
          Start your journey to financial mastery
        </motion.p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative">
            <Input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              onFocus={() => setFocusedField('firstName')}
              onBlur={() => setFocusedField(null)}
              icon={<User className={`w-5 h-5 transition-colors ${
                focusedField === 'firstName' ? 'text-primary-500' : 'text-gray-400'
              }`} />}
              required
              className="h-14 pl-12 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="First Name"
            />
            <motion.div
              initial={false}
              animate={{
                scale: focusedField === 'firstName' ? 1.02 : 1,
                opacity: focusedField === 'firstName' ? 1 : 0
              }}
              className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            <Input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              onFocus={() => setFocusedField('lastName')}
              onBlur={() => setFocusedField(null)}
              icon={<User className={`w-5 h-5 transition-colors ${
                focusedField === 'lastName' ? 'text-primary-500' : 'text-gray-400'
              }`} />}
              required
              className="h-14 pl-12 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="Last Name"
            />
            <motion.div
              initial={false}
              animate={{
                scale: focusedField === 'lastName' ? 1.02 : 1,
                opacity: focusedField === 'lastName' ? 1 : 0
              }}
              className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="relative">
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              icon={<Mail className={`w-5 h-5 transition-colors ${
                focusedField === 'email' ? 'text-primary-500' : 'text-gray-400'
              }`} />}
              required
              className="h-14 pl-12 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              placeholder="Email Address"
            />
            <motion.div
              initial={false}
              animate={{
                scale: focusedField === 'email' ? 1.02 : 1,
                opacity: focusedField === 'email' ? 1 : 0
              }}
              className="absolute -inset-px bg-primary-500/5 rounded-xl pointer-events-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-4"
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-14 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-200"
          >
            Continue
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};