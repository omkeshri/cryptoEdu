import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp, staggerContainer, rotateIn, fadeInScale } from '../../utils/animations';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Forex Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    quote: "The structured learning approach and community support helped me achieve consistent profitability within 6 months.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Stock Trader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    quote: "The live trading sessions and mentor feedback were invaluable in developing my trading strategy.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Crypto Trader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    quote: "From complete beginner to profitable trader in 3 months. The simulator practice made all the difference.",
    rating: 5
  }
];

const partners = [
  "NYSE",
  "NASDAQ",
  "Bloomberg",
  "Reuters"
];

export const SocialProof = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Traders Worldwide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their trading journey with our academy.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={rotateIn}
              className="bg-gray-50 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <motion.img
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex mb-4"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </motion.div>
              <p className="text-gray-700">{testimonial.quote}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Trusted Partners</p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="flex flex-wrap justify-center gap-8"
            >
              {partners.map((partner, index) => (
                <motion.span
                  key={index}
                  variants={fadeInUp}
                  className="text-gray-400 text-xl font-semibold"
                >
                  {partner}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Start Your Trading Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};