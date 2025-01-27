import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Calendar, Clock, Video } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Live Trading Session',
    date: '2024-03-15',
    time: '10:00 AM',
    type: 'live',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Technical Analysis Workshop',
    date: '2024-03-16',
    time: '2:00 PM',
    type: 'workshop',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Risk Management Quiz',
    date: '2024-03-18',
    time: '3:30 PM',
    type: 'assessment',
    priority: 'high',
  },
];

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800',
};

export const UpcomingEvents = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="bg-white p-2 rounded-lg">
                <Video className="h-6 w-6 text-primary-500" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium">{event.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {event.time}
                  </div>
                </div>
              </div>
              
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[event.priority]}`}>
                {event.priority}
              </span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};