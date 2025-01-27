import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { FormField } from '../components/ui/form-field';
import { LoadingSpinner } from '../components/ui/loading-spinner';
import { BrandLogo } from '../components/ui/brand-logo';
import { RoleSelector } from '../components/ui/role-selector';
import { useAuth } from '../store/auth';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['student', 'instructor', 'admin'] as const),
});

type SignInForm = z.infer<typeof signInSchema>;

interface SignInPageProps {
  onBack: () => void;
}

export const SignInPage = ({ onBack }: SignInPageProps) => {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      role: 'student',
    },
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: SignInForm) => {
    try {
      setIsLoading(true);
      await signIn({
        email: data.email,
        password: data.password,
        role: data.role,
        dashboardType: 'beginner',
      });
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinNow = () => {
    onBack();
    setTimeout(() => {
      const joinNowButton = document.querySelector('[data-join-now]') as HTMLButtonElement;
      if (joinNowButton) {
        joinNowButton.click();
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      </div>

      {/* Back Button */}
      <button
        // initial={{ opacity: 0, x: -20 }}
        // animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-6 left-6 flex items-center space-x-2 text-white/80 hover:text-white transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <BrandLogo />
          </div>

          {/* Sign In Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-300">Sign in to continue your journey</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormField error={errors.email?.message}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  icon={<Mail className="w-5 h-5" />}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  {...register('email')}
                />
              </FormField>

              <FormField error={errors.password?.message}>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    icon={<Lock className="w-5 h-5" />}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-12"
                    {...register('password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </FormField>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-white/80">
                  Select Your Role
                </label>
                <RoleSelector
                  value={selectedRole}
                  onChange={(role) => setValue('role', role)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <LoadingSpinner size="sm" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>

              <div className="text-center">
                <p className="text-gray-300">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={handleJoinNow}
                    className="text-primary-400 hover:text-primary-300 font-medium"
                  >
                    Join Now
                  </button>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};