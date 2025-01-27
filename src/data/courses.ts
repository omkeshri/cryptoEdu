import { Course } from '../types';

export const forexCourses: Course[] = [
  {
    id: 'forex-1',
    title: 'Forex Trading Fundamentals',
    description: 'Master the basics of currency trading, from pips to positions.',
    level: 'Beginner',
    duration: '6 weeks',
    price: {
      basic: 299,
      pro: 499,
      elite: 799
    },
    features: ['Currency Pair Analysis', 'Risk Management', 'Technical Analysis Basics'],
    curriculum: [
      {
        module: 'Currency Markets',
        topics: ['Major Currency Pairs', 'Market Sessions', 'Economic Calendar']
      },
      {
        module: 'Trading Basics',
        topics: ['Order Types', 'Position Sizing', 'Risk-Reward Ratios']
      }
    ]
  },
  {
    id: 'forex-2',
    title: 'Advanced Forex Strategies',
    description: 'Professional forex trading strategies and advanced technical analysis.',
    level: 'Advanced',
    duration: '8 weeks',
    price: {
      basic: 499,
      pro: 799,
      elite: 1299
    },
    features: ['Live Trading Sessions', 'Advanced Indicators', 'Portfolio Management'],
    curriculum: [
      {
        module: 'Advanced Analysis',
        topics: ['Price Action', 'Multiple Timeframe Analysis', 'Correlation Trading']
      },
      {
        module: 'Professional Strategies',
        topics: ['Swing Trading', 'Day Trading', 'Position Trading']
      }
    ]
  }
];

export const stockCourses: Course[] = [
  {
    id: 'stocks-1',
    title: 'Stock Market Essentials',
    description: 'Learn how to analyze and invest in the stock market.',
    level: 'Beginner',
    duration: '8 weeks',
    price: {
      basic: 399,
      pro: 699,
      elite: 999
    },
    features: ['Fundamental Analysis', 'Technical Analysis', 'Portfolio Building'],
    curriculum: [
      {
        module: 'Market Basics',
        topics: ['Stock Market Structure', 'Company Valuations', 'Market Indices']
      },
      {
        module: 'Investment Strategies',
        topics: ['Value Investing', 'Growth Investing', 'Dividend Strategies']
      }
    ]
  },
  {
    id: 'stocks-2',
    title: 'Options Trading Mastery',
    description: 'Master options trading strategies for consistent profits.',
    level: 'Advanced',
    duration: '10 weeks',
    price: {
      basic: 599,
      pro: 899,
      elite: 1499
    },
    features: ['Options Strategies', 'Greeks Analysis', 'Risk Management'],
    curriculum: [
      {
        module: 'Options Fundamentals',
        topics: ['Call & Put Options', 'Strike Prices', 'Expiration Dates']
      },
      {
        module: 'Advanced Strategies',
        topics: ['Covered Calls', 'Iron Condors', 'LEAPS Trading']
      }
    ]
  }
];

export const cryptoCourses: Course[] = [
  {
    id: 'crypto-1',
    title: 'Cryptocurrency Trading',
    description: 'Learn to trade Bitcoin, Ethereum, and other major cryptocurrencies.',
    level: 'Beginner',
    duration: '6 weeks',
    price: {
      basic: 299,
      pro: 599,
      elite: 899
    },
    features: ['Blockchain Basics', 'Exchange Trading', 'Wallet Security'],
    curriculum: [
      {
        module: 'Crypto Fundamentals',
        topics: ['Blockchain Technology', 'Cryptocurrency Types', 'Market Analysis']
      },
      {
        module: 'Trading Essentials',
        topics: ['Exchange Operations', 'Order Types', 'Risk Management']
      }
    ]
  },
  {
    id: 'crypto-2',
    title: 'DeFi Trading Strategies',
    description: 'Advanced cryptocurrency trading and DeFi protocols.',
    level: 'Advanced',
    duration: '8 weeks',
    price: {
      basic: 499,
      pro: 799,
      elite: 1299
    },
    features: ['DeFi Protocols', 'Yield Farming', 'Liquidity Provision'],
    curriculum: [
      {
        module: 'DeFi Fundamentals',
        topics: ['Smart Contracts', 'AMMs', 'Yield Optimization']
      },
      {
        module: 'Advanced Trading',
        topics: ['Arbitrage', 'Flash Loans', 'Cross-chain Trading']
      }
    ]
  }
];