interface EmailCredentials {
  email: string;
  password: string;
  planName: string;
  loginUrl: string;
}

export const sendWelcomeEmail = async (credentials: EmailCredentials) => {
  // In a real application, this would make an API call to your email service
  console.log('Sending welcome email to:', credentials.email, {
    subject: 'Welcome to Trading Academy - Your Login Credentials',
    body: `
      Welcome to Trading Academy!
      
      Your ${credentials.planName} subscription has been activated.
      Here are your login credentials:
      
      Email: ${credentials.email}
      Password: ${credentials.password}
      
      Login URL: ${credentials.loginUrl}
      
      For security reasons, please change your password after your first login.
      
      If you have any questions, our support team is here to help.
      
      Best regards,
      Trading Academy Team
    `
  });
};