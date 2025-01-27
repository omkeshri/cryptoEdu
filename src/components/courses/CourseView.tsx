import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, Star, CheckCircle, PlayCircle, Building, Smartphone } from 'lucide-react';
import { CourseNavigation } from './CourseNavigation';
import { CourseOverview } from './CourseOverview';
import { LearningPath } from './LearningPath';
import { CourseContent } from './CourseContent';

export const CourseView = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const enrolledStudents = 1234;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Financial Market Mastery Program
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Transform your financial knowledge through our structured learning path
            </p>
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>30 Hours</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Beginner Level</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{enrolledStudents.toLocaleString()} Students</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Course Navigation */}
      <CourseNavigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2">
            <CourseOverview />
            <LearningPath />
            <CourseContent />
          </div>

          {/* Right Column - CTA and Support */}
          <div className="space-y-6">
            {/* Learning Format */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Choose Your Learning Path
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <PlayCircle className="w-6 h-6 text-primary-600" />
                  <span className="text-gray-700">Online Live Classes</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Building className="w-6 h-6 text-primary-600" />
                  <span className="text-gray-700">Offline Classroom Training</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Smartphone className="w-6 h-6 text-primary-600" />
                  <span className="text-gray-700">Mobile Learning Support</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Start Learning Now
              </button>
              <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
                Download Syllabus
              </button>
              <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
                Schedule Demo
              </button>
            </div>

            {/* Support Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Book a free consultation with our course advisors
              </p>
              <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};