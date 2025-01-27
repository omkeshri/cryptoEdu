import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="relative">
        <img 
          src={`https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500`} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          {course.level}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <BookOpen className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.curriculum.length} Modules</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">Starting from</span>
            <p className="text-2xl font-bold text-indigo-600">${course.price.basic}</p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};