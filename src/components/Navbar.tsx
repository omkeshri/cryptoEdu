import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a href="/" className="text-2xl font-bold text-white">
              GlobalTrade<span className="text-primary-400">Pro</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
                  <span>Courses</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#forex" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Forex Trading</a>
                  <a href="#stocks" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Stock Market</a>
                  <a href="#crypto" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cryptocurrency</a>
                </div>
              </div>
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
              <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white px-4 py-2">
              Sign In
            </button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#forex" className="text-gray-300 hover:text-white">Forex Trading</a>
                <a href="#stocks" className="text-gray-300 hover:text-white">Stock Market</a>
                <a href="#crypto" className="text-gray-300 hover:text-white">Cryptocurrency</a>
                <a href="#about" className="text-gray-300 hover:text-white">About</a>
                <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                <div className="pt-4 border-t border-gray-800">
                  <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};