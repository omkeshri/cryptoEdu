export interface Plan {
  id: string;
  name: string;
  price: number;
  interval: string;
  features: string[];
  popular: boolean;
  savings: number;
}

export interface RegistrationData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  country: string;
}

export interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}