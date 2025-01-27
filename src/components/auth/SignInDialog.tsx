import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, TrendingUp } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Select } from '../ui/select';
import { useAuth, UserRole } from '../../store/auth';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['student', 'instructor', 'admin'] as const),
});

type SignInForm = z.infer<typeof signInSchema>;

interface SignInDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInDialog = ({ isOpen, onClose }: SignInDialogProps) => {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      role: 'student',
    },
  });

  const onSubmit = async (data: SignInForm) => {
    try {
      setIsLoading(true);
      await signIn(data);
      reset();
      onClose();
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-50 w-full max-w-md overflow-hidden"
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 animate-gradient" />

              {/* Content */}
              <div className="relative p-8">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Logo */}
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-primary-500/10 p-3 rounded-full">
                    <TrendingUp className="w-8 h-8 text-primary-500" />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sign in to continue your learning journey
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      icon={<Mail className="w-5 h-5" />}
                      error={errors.email?.message}
                      className="bg-gray-50 dark:bg-gray-800"
                      {...register('email')}
                    />
                  </div>

                  <div>
                    <Input
                      type="password"
                      placeholder="Password"
                      icon={<Lock className="w-5 h-5" />}
                      error={errors.password?.message}
                      className="bg-gray-50 dark:bg-gray-800"
                      {...register('password')}
                    />
                  </div>

                  <div>
                    <Select
                      icon={<User className="w-5 h-5" />}
                      error={errors.role?.message}
                      className="bg-gray-50 dark:bg-gray-800"
                      options={[
                        { value: 'student', label: 'Student' },
                        { value: 'instructor', label: 'Instructor' },
                        { value: 'admin', label: 'Administrator' },
                      ]}
                      {...register('role')}
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                  </div>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <button
                      onClick={onClose}
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      Join Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};