"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
  
const AboutSection: React.FC = () => {
  return (
    
    <section className="max-w-screen flex flex-col items-center py-10 mx-auto text-white w-11/12 sm:w-3/4 md:w-5/6 max-w-screen-xl">
      <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="mt-4 lg:mt-0 w-full md:w-2/3 lg:w-1/2 flex justify-center"
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
            duration: 2,
        }}
        className="mx-7 my-5 pt-7 rounded-xl w-full md:w-full bg-gray-900 flex flex-col items-center pb-10 border-b-2 border-white lg:w-3/4"
    >
        <Image
            src="/images/MyselfPfp.jpg"
            alt="my image"
            quality={100}
            width={100}
            height={100}
            className="max-w-[200px] rounded-full" // Responsive styling
        />
        <p className="px-2 sm:px-5 md:px-7 lg:px-10 mx-7 text-sm md:w-full text-gray-200 sm:text-xl text-center mt-4">
            My name is Yuan. I am a student in the Department of Computer Engineering at KMUTT, Thailand. I am passionate about becoming a full-stack developer, focusing on web page designing and back-end optimization. I also enjoy learning about finance and business. If you want to support me, please consider checking out my social media; I have a plan to post more content about programming and devlogs soon.
        </p>
    </motion.div>
    </section>
  );
};

export default AboutSection;
