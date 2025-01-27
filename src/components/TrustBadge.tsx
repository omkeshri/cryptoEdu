import React from 'react';
import { Star } from 'lucide-react';

export const TrustBadge = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-200">Excellent</span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <span className="text-gray-200">(2,000+ Reviews)</span>
    </div>
  );
};