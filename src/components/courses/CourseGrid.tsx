import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '../../types';
import { CourseCard } from './CourseCard';

interface CourseGridProps {
  courses: Course[];
}

export const CourseGrid = ({ courses }: CourseGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
      {courses.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">No courses found matching your criteria</p>
        </div>
      )}
    </div>
  );
};