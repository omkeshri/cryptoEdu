import { UserRole } from '../store/auth';

export const checkDashboardAccess = (role: UserRole) => {
  const allowedRoutes = {
    admin: ['/dashboard', '/users', '/settings', '/analytics'],
    instructor: ['/dashboard', '/courses', '/students', '/assignments'],
    student: ['/dashboard', '/courses', '/assignments', '/progress'],
  };

  return {
    hasAccess: true,
    allowedRoutes: allowedRoutes[role] || [],
  };
};

export const validateDashboardState = () => {
  const checks = {
    authToken: !!localStorage.getItem('auth_token'),
    userRole: !!localStorage.getItem('user_role'),
    permissions: !!localStorage.getItem('user_permissions'),
  };

  return {
    isValid: Object.values(checks).every(Boolean),
    checks,
  };
};