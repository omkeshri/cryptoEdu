import React from 'react';
import { motion } from 'framer-motion';

interface FilterProps {
  filters: {
    category: string;
    level: string;
    priceRange: string;
  };
  onFilterChange: (filters: any) => void;
}

export const CourseFilters = ({ filters, onFilterChange }: FilterProps) => {
  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'forex', label: 'Forex Trading' },
    { value: 'stocks', label: 'Stock Market' },
    { value: 'crypto', label: 'Cryptocurrency' }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'free', label: 'Free' },
    { value: 'paid', label: 'Paid' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.value} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category.value}
                  checked={filters.category === category.value}
                  onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">{category.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Level</h3>
          <div className="space-y-2">
            {levels.map((level) => (
              <label key={level.value} className="flex items-center">
                <input
                  type="radio"
                  name="level"
                  value={level.value}
                  checked={filters.level === level.value}
                  onChange={(e) => onFilterChange({ ...filters, level: e.target.value })}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">{level.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Price</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.value} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  value={range.value}
                  checked={filters.priceRange === range.value}
                  onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};