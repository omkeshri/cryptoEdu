import React from 'react';
import { motion } from 'framer-motion';
import { Bell, MessageSquare, LogOut } from 'lucide-react';
import { useAuth } from '../../store/auth';
import { Button } from '../ui/button';

export const DashboardHeader = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id}`}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Welcome, {user?.name}</h2>
            <p className="text-sm text-gray-500">{user?.role}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};