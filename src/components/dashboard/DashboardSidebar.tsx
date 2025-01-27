import React from 'react';
import { Home, BookOpen, Users, Settings, Calendar, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../store/auth';
import { UserRole } from '../../store/auth';

export const DashboardSidebar = () => {
  const { user, signOut } = useAuth();

  const getMenuItems = () => {
    const commonItems = [
      { icon: Home, label: 'Overview', href: '/dashboard' },
      { icon: Calendar, label: 'Schedule', href: '/dashboard/schedule' },
      { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
      { icon: HelpCircle, label: 'Help', href: '/dashboard/help' },
    ];

    const roleSpecificItems = {
      admin: [
        { icon: Users, label: 'Users', href: '/dashboard/users' },
        { icon: BookOpen, label: 'Courses', href: '/dashboard/courses' },
      ],
      instructor: [
        { icon: BookOpen, label: 'My Courses', href: '/dashboard/courses' },
        { icon: Users, label: 'Students', href: '/dashboard/students' },
      ],
      student: [
        { icon: BookOpen, label: 'My Courses', href: '/dashboard/courses' },
        { icon: Users, label: 'Community', href: '/dashboard/community' },
      ],
    };

    return [...(roleSpecificItems[user?.role || 'student']), ...commonItems];
  };

  return (
    <nav className="h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-4">
        <ul className="space-y-2">
          {getMenuItems().map(({ icon: Icon, label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={signOut}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};