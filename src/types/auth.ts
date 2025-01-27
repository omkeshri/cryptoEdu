export type DashboardType = 'beginner' | 'advanced' | 'demo';

export interface SignInForm {
  email: string;
  password: string;
  role: 'student' | 'instructor' | 'admin';
  dashboardType: DashboardType;
}

export interface AuthState {
  dashboardType: DashboardType | null;
  setDashboardType: (type: DashboardType) => void;
}