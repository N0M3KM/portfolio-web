"use client";
import React from "react";
import { motion } from "framer-motion";
  
const AboutSection: React.FC = () => {
  return (
    
    <section className="py-5 max-w-screen md:w-5/6 flex flex-col items-center w-3/4">
      <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="mt-4 lg:mt-0 w-full md:w-1/2 flex justify-center"
        >
          <h1 className="open-sans-font text-4xl font-semibold mx-auto bg-gradient-to-r from-purple-500 via-pink-400 via-blue-500 to-sky-500 bg-clip-text text-transparent">Who am I?</h1>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 2
          }}
          className="mx-7 my-5 w-5/6 md:w-full flex pb-10 border-b-2 border-white"
        >
          <p className="mx-7 md:w-full text-gray-200 text-xl text-center">My name is Yuan. I'm a student in the Department of Computer Engineering at KMUTT, Thailand. I am passionate about becoming a full-stack developer, focusing on web page design and optimization. I also enjoy learning about finance and business. Oh...also... Please consider checking out my social media, I have a plan to post more contents about programming and devlog sooner.</p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
