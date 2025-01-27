import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DashboardType } from '../types/auth';

export type UserRole = 'student' | 'instructor' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  dashboardType: DashboardType;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (credentials: { 
    email: string; 
    password: string; 
    role: UserRole;
    dashboardType: DashboardType;
  }) => Promise<void>;
  signOut: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      signIn: async (credentials) => {
        // Simulate API call
        const mockUser: User = {
          id: Math.random().toString(36).substring(7),
          name: credentials.email.split('@')[0],
          email: credentials.email,
          role: credentials.role,
          dashboardType: credentials.dashboardType,
        };
        set({ user: mockUser, isAuthenticated: true });
      },
      signOut: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);