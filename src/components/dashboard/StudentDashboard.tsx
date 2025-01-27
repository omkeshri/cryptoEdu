import React from 'react';
import { motion } from 'framer-motion';
import { DashboardHeader } from './DashboardHeader';
import { DashboardOverview } from './DashboardOverview';
import { CourseProgress } from './CourseProgress';
import { UpcomingEvents } from './UpcomingEvents';
import { AchievementsSection } from './AchievementsSection';
import { ResourceHub } from './ResourceHub';
import { PerformanceAnalytics } from './PerformanceAnalytics';

export const StudentDashboard = () => {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CourseProgress />
        <UpcomingEvents />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AchievementsSection />
        <ResourceHub />
        <PerformanceAnalytics />
      </div>
    </div>
  );
};