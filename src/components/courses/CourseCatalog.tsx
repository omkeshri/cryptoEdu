import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchBar } from './SearchBar';
import { CourseFilters } from './CourseFilters';
import { CourseGrid } from './CourseGrid';
import { CourseCatalogHeader } from './CourseCatalogHeader';
import { allCourses } from '../../utils/constants';



export const CourseCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    level: 'all',
    priceRange: 'all'
  });

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = filters.category === 'all' || course.category === filters.category;
    const matchesLevel = filters.level === 'all' || course.level === filters.level;
    const matchesPriceRange = filters.priceRange === 'all' ||
      (filters.priceRange === 'free' && course.price.basic === 0) ||
      (filters.priceRange === 'paid' && course.price.basic > 0);

    return matchesSearch && matchesCategory && matchesLevel && matchesPriceRange;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseCatalogHeader />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search for courses..."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CourseFilters
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          <div className="lg:col-span-3">
            <CourseGrid courses={filteredCourses} />
          </div>
        </div>
      </div>
    </div>
  );
};