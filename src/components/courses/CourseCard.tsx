import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img 
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
          {course.level}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            <span>{course.enrolled.toLocaleString()} students</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(course.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm">
            ({course.reviews} reviews)
          </span>
        </div>

        <div className="space-y-2 mb-6">
          {course.outcomes.map((outcome, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm">{outcome}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-500 text-sm">Price</span>
              <p className="text-2xl font-bold text-primary-600">
                ${course.price.basic}
              </p>
            </div>
            <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};