import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const courses = [
  {
    id: 1,
    name: 'Introduction to Trading',
    progress: 75,
    totalModules: 12,
    completedModules: 9,
  },
  {
    id: 2,
    name: 'Technical Analysis',
    progress: 45,
    totalModules: 10,
    completedModules: 4,
  },
  {
    id: 3,
    name: 'Risk Management',
    progress: 20,
    totalModules: 8,
    completedModules: 1,
  },
];

export const CourseProgress = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{course.name}</h3>
                <span className="text-sm text-gray-500">
                  {course.completedModules}/{course.totalModules} modules
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-primary-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};