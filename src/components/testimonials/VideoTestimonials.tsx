import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  avatar: string;
  videoThumbnail: string;
  videoUrl: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Professional Trader',
    country: 'United States',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    videoThumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: "The structured learning approach helped me achieve consistent profitability within 6 months.",
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Day Trader',
    country: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    videoThumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: "The live trading sessions and mentor feedback were invaluable in developing my strategy.",
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Davis',
    role: 'Forex Trader',
    country: 'United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    videoThumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: "From complete beginner to profitable trader in 3 months. The simulator practice made all the difference.",
    rating: 5
  }
];

export const VideoTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Success Stories from Our Students
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Join thousands of successful traders worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            {selectedTestimonial ? (
              <iframe
                src={selectedTestimonial.videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonials[currentIndex].videoThumbnail})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedTestimonial(testimonials[currentIndex])}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Play className="w-8 h-8 text-white fill-current" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Testimonial Content */}
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].country}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-gray-700 italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevious}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};