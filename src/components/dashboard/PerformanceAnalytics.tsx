import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const performanceData = {
  overall: 85,
  improvement: 12,
  strengths: ['Technical Analysis', 'Pattern Recognition'],
  areasToImprove: ['Risk Management', 'Emotional Control'],
};

export const PerformanceAnalytics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-100">
              <span className="text-3xl font-bold text-primary-600">
                {performanceData.overall}%
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Overall Performance</p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Activity className="h-5 w-5 text-primary-500" />
            <span className="text-sm font-medium">
              {performanceData.improvement}% improvement this month
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Strengths</h4>
              <div className="space-y-2">
                {performanceData.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-green-600"
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Areas to Improve</h4>
              <div className="space-y-2">
                {performanceData.areasToImprove.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-red-600"
                  >
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};