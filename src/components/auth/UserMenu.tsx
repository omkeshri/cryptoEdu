import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserCircle, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { SignInDialog } from './SignInDialog';
import { useAuth } from '../../store/auth';

export const UserMenu = () => {
  const { user, isAuthenticated, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  if (!isAuthenticated) {
    return (
      <>
        <Button
          onClick={() => setShowSignIn(true)}
          size="lg"
          className="flex items-center space-x-2 text-lg"
        >
          <LogIn className="h-5 w-5" />
          <span>Sign In to Your Account</span>
        </Button>
        <SignInDialog isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
      </>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <UserCircle className="h-5 w-5" />
        <span>{user?.name}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <button
              onClick={signOut}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};