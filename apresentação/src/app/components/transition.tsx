"use client";
import React from 'react';
import {motion} from "framer-motion";

interface TransitionProps {
  children: React.ReactNode; 
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
