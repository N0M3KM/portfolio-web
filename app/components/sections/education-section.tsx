"use client";
import React from "react";
import Timeline from "../contents/Timeline/Timeline";
import Title from "../contents/Title";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const EducationSection: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-5 mb-7 max-w-screen mx-5 md:w-5/6"
    >
      <Title title="Education" icon={<FaGraduationCap color="white" size={35}/>}/>
      <Timeline/>
    </motion.section>
  );
};

export default EducationSection;
