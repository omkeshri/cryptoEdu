import { sendWelcomeEmail } from './email-service';
import { generateSecurePassword } from './security';

interface PaymentSuccessData {
  email: string;
  planName: string;
  amount: number;
}

export const handlePaymentSuccess = async (data: PaymentSuccessData) => {
  try {
    // Generate temporary password
    const tempPassword = generateSecurePassword();
    
    // Send welcome email with credentials
    await sendWelcomeEmail({
      email: data.email,
      password: tempPassword,
      planName: data.planName,
      loginUrl: window.location.origin + '/login'
    });

    // Return credentials for auto-login
    return {
      email: data.email,
      password: tempPassword
    };
  } catch (error) {
    console.error('Error handling payment success:', error);
    throw error;
  }
};