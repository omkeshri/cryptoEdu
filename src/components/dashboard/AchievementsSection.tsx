import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Award, Star, Trophy } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Fast Learner',
    description: 'Completed 5 courses in record time',
    icon: Star,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 2,
    title: 'Trading Pro',
    description: 'Achieved 90% accuracy in simulations',
    icon: Trophy,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
  },
  {
    id: 3,
    title: 'Knowledge Master',
    description: 'Passed all assessments with distinction',
    icon: Award,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
  },
];

export const AchievementsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className={`p-2 rounded-lg ${achievement.bgColor}`}>
                  <Icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};