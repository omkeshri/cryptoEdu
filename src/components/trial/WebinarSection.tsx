import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Video } from 'lucide-react';

export const WebinarSection = () => {
  const webinarDate = new Date('2024-03-20T15:00:00Z');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-8"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Upcoming Free Webinar
          </h2>
          <h3 className="text-xl text-primary-600 font-semibold mb-6">
            "Mastering Market Analysis: A Beginner's Guide"
          </h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 mr-3 text-primary-500" />
              <span>{webinarDate.toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Clock className="w-5 h-5 mr-3 text-primary-500" />
              <span>{webinarDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Users className="w-5 h-5 mr-3 text-primary-500" />
              <span>Limited to 100 participants</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Video className="w-5 h-5 mr-3 text-primary-500" />
              <span>Live via Zoom</span>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <h4 className="font-semibold text-gray-800">You'll Learn:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Fundamental analysis basics</li>
              <li>Technical analysis tools</li>
              <li>Risk management strategies</li>
              <li>Live market analysis demonstration</li>
            </ul>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 rounded-xl p-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Speaker</h4>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                alt="John Smith"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">John Smith</p>
                <p className="text-gray-600 text-sm">Senior Trading Analyst</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary-600 text-white rounded-lg py-3 px-6 mb-4 hover:bg-primary-700 transition-colors">
            Reserve Your Spot
          </button>

          <div className="flex gap-2">
            <button className="flex-1 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors">
              Add to Google Calendar
            </button>
            <button className="flex-1 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors">
              Add to iCal
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};