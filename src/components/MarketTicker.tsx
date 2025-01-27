import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MarketTicker as MarketTickerType } from '../types';

const mockTickers: MarketTickerType[] = [
  { symbol: 'BTC/USD', price: 65432.10, change: 2.5, volume: 1234567 },
  { symbol: 'EUR/USD', price: 1.0876, change: -0.3, volume: 987654 },
  { symbol: 'AAPL', price: 178.32, change: 1.2, volume: 2345678 },
];

export const MarketTicker = () => {
  return (
    <div className="bg-gray-900 py-3 overflow-hidden">
      <div className="flex animate-scroll">
        {mockTickers.map((ticker, index) => (
          <div 
            key={index}
            className="flex items-center space-x-4 px-6 border-r border-gray-700 last:border-r-0"
          >
            <span className="text-gray-200 font-medium">{ticker.symbol}</span>
            <span className="text-white font-semibold">${ticker.price.toLocaleString()}</span>
            <div className={`flex items-center ${ticker.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {ticker.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="ml-1">{Math.abs(ticker.change)}%</span>
            </div>
            <span className="text-gray-400">Vol: {ticker.volume.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};