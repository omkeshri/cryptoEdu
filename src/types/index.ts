export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  enrolled: number;
  rating: number;
  reviews: number;
  image: string;
  outcomes: string[];
  price: {
    basic: number;
    pro?: number;
    elite?: number;
  };
  category: string;
  features?: string[];
  curriculum?: {
    module: string;
    topics: string[];
  }[];
}

export interface MarketTicker {
  symbol: string;
  price: number;
  change: number;
  volume: number;
}