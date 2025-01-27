import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['student', 'instructor', 'admin'] as const),
});

export const validateCredentials = (email: string, password: string) => {
  const errors: string[] = [];
  
  if (!email.includes('@')) {
    errors.push('Invalid email format');
  }
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  
  return errors;
};

export const validateAuthState = () => {
  const token = localStorage.getItem('auth_token');
  const user = localStorage.getItem('auth_user');
  
  if (!token || !user) {
    return { isValid: false, error: 'No valid authentication found' };
  }
  
  try {
    const userData = JSON.parse(user);
    if (!userData.role || !userData.id) {
      return { isValid: false, error: 'Invalid user data' };
    }
    
    return { isValid: true, userData };
  } catch {
    return { isValid: false, error: 'Corrupted user data' };
  }
};