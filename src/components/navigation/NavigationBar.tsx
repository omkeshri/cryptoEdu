import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';
import { DropdownMenu } from './DropdownMenu';
import { MobileMenu } from './MobileMenu';

const educationItems = [
  {
    label: 'Course Catalog',
    href: '/courses',
    description: 'Browse our comprehensive course library'
  },
  {
    label: 'Live Workshops',
    href: '/workshops',
    description: 'Interactive sessions with industry experts'
  },
  {
    label: 'Expert Mentoring',
    href: '/mentoring',
    description: 'One-on-one guidance from professionals'
  },
  {
    label: 'Study Materials',
    href: '/materials',
    description: 'Comprehensive learning resources'
  },
  {
    label: 'Practice Tests',
    href: '/practice',
    description: 'Test your knowledge and skills'
  },
  {
    label: 'Progress Tracking',
    href: '/progress',
    description: 'Monitor your learning journey'
  },
  {
    label: 'Community Forums',
    href: '/community',
    description: 'Connect with fellow learners'
  }
];

export const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink href="/" className="text-2xl font-bold">
            Trade<span className="text-primary-400">Academy</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu label="Education" items={educationItems} />
            <NavLink href="/success-stories">Success Stories</NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/login">Log In</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex flex-col space-y-4">
              <NavLink href="/courses">Education</NavLink>
              <NavLink href="/success-stories">Success Stories</NavLink>
              <NavLink href="/login">Log In</NavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors w-full"
              >
                Join Now
              </motion.button>
            </div>
          </MobileMenu>
        </div>
      </div>
    </nav>
  );
};