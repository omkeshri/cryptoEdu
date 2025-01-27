import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
}

export const DropdownMenu = ({ label, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
        <span>{label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-50"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="text-gray-900 font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-gray-500 text-sm">{item.description}</div>
                )}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};