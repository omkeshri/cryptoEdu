import React from 'react';
import { motion } from 'framer-motion';
import { validateAuthState } from '../../lib/auth-validation';
import { validateDashboardState } from '../../lib/dashboard-access';

export const AuthDebugger = () => {
  const authState = validateAuthState();
  const dashboardState = validateDashboardState();

  const checkList = [
    { name: 'Authentication Token', status: dashboardState.checks.authToken },
    { name: 'User Role', status: dashboardState.checks.userRole },
    { name: 'Permissions', status: dashboardState.checks.permissions },
    { name: 'User Data', status: authState.isValid },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200 max-w-sm"
    >
      <h3 className="text-lg font-semibold mb-4">Authentication Status</h3>
      <div className="space-y-2">
        {checkList.map((check, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-600">{check.name}</span>
            <span className={`px-2 py-1 rounded-full text-sm ${
              check.status 
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {check.status ? 'Valid' : 'Invalid'}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};