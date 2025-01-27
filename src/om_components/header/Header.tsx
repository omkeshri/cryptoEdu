import React from "react";
import { FloatingButtons } from "../../components/FloatingButtons";
import { motion } from "framer-motion";

interface HeaderProps {
  onJoinNow: () => void;
  onSignIn: () => void;
  onHome: () => void;
  onAbout: () => void;
  onCourses: () => void;
}

const Header = ({onJoinNow, onSignIn, onHome, onAbout, onCourses}: HeaderProps) => {
  return (
    <motion.div
      className="text-[#969696] absolute top-10 right-5 z-50 flex items-center space-x-4 text-lg  py-4 font-medium"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
    >
      <ul className="flex gap-10 items-center" >
        <li className="cursor-pointer hover:underline hover:underline-offset-2" onClick={onHome}>Home</li>
        <li className="cursor-pointer hover:underline hover:underline-offset-2" onClick={onAbout}>About</li>
        <li className="cursor-pointer hover:underline hover:underline-offset-2" onClick={onCourses}>Courses</li>
        <li className="cursor-pointer hover:underline hover:underline-offset-2">Contact</li>
        <FloatingButtons
          onJoinNow={onJoinNow}
          onSignIn={onSignIn}
        />
      </ul>
    </motion.div>
  );
};

export default Header;
