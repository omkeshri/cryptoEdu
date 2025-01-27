import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { FileText, Video, Download, Search } from 'lucide-react';
import { Input } from '../ui/input';

const resources = [
  {
    id: 1,
    title: 'Trading Basics Guide',
    type: 'pdf',
    size: '2.5 MB',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Market Analysis Tutorial',
    type: 'video',
    duration: '15:30',
    icon: Video,
  },
  {
    id: 3,
    title: 'Risk Management Templates',
    type: 'xlsx',
    size: '1.8 MB',
    icon: FileText,
  },
];

export const ResourceHub = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Hub</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Search resources..."
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        
        <div className="space-y-4">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-primary-500" />
                  <div>
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-gray-500">
                      {resource.type === 'video' ? resource.duration : resource.size}
                    </p>
                  </div>
                </div>
                
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};