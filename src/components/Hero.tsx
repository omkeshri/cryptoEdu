import React from "react";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  BarChart2,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { TypedHeading } from "./TypedHeading";
import { TrustBadge } from "./TrustBadge";
import { Footer } from "../om_components/footer/Footer";
import About from "../om_components/aboutDashboard/About";
import Faq from "../om_components/faqDashboard/Faq";
import Header from "../om_components/header/Header";
import Cards from "../om_components/coursesCardsDashboard/Cards";

interface HeroProps {
  onStartFreeTrial: () => void;
  onViewCourses: () => void;
  onViewAbout: () => void;
}

export const Hero = ({
  onStartFreeTrial,
  onViewCourses,
  onViewAbout,
}: HeroProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-[#0A0F1C]">
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />

        {/* Animated Gradient Spheres */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/20 to-blue-600/20 blur-3xl animate-pulse delay-1000" />

        {/* Geometric Patterns */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Animated Lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"
              style={{
                top: `${30 * (i + 1)}%`,
                animationDelay: `${i * 0.5}s`,
                animation: "moveLeftRight 8s infinite linear",
              }}
            />
          ))}
        </div>

        {/* Glass Effect Elements */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
                animation: `float ${5 + i}s infinite ease-in-out ${i}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4  pb-20">
        <div className="max-w-4xl mx-auto pt-32">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <span className="inline-block bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400 px-6 py-2 rounded-full text-sm font-medium">
                Global Trading Academy
              </span>
            </motion.div>

            <TypedHeading />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300/90 mb-8 max-w-2xl mx-auto"
            >
              Join over 50,000 students worldwide and learn professional trading
              strategies from industry experts. Start your journey to financial
              freedom today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-12"
            >
              <TrustBadge />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.button
                onClick={onStartFreeTrial}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={onViewCourses}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span>View Courses</span>
              </motion.button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12"
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Expert Instructors",
                  desc: "Learn from professionals",
                },
                {
                  icon: BookOpen,
                  title: "Structured Learning",
                  desc: "Step-by-step curriculum",
                },
                {
                  icon: BarChart2,
                  title: "Live Trading",
                  desc: "Real market experience",
                },
                {
                  icon: Users,
                  title: "Community",
                  desc: "24/7 support network",
                },
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 group-hover:border-blue-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
            >
              {[
                { value: "50K+", label: "Students" },
                { value: "100+", label: "Video Lessons" },
                { value: "95%", label: "Success Rate" },
                { value: "24/7", label: "Support" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-gray-400">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <About viewAbout={onViewAbout} />
        <div className="px-20 mb-20">
          <h1 className="text-white text-center mt-20 text-5xl font-medium mb-10">
            Courses
          </h1>
          <div className="flex gap-10 overflow-x-scroll no-scrollbar w-full flex-nowrap">
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
          </div>
        </div>
        <Faq />
      </div>
      <Footer viewCourse={onViewCourses} />
    </div>
  );
};
