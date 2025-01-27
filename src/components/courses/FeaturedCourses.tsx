import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '../../types';
import { CourseCard } from '../CourseCard';

interface FeaturedCoursesProps {
  courses: Course[];
}

export const FeaturedCourses = ({ courses }: FeaturedCoursesProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CourseCard course={course} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};