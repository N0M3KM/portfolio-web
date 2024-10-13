"use client";
import React from "react";
import Timeline from "../contents/Timeline/Timeline";
import Title from "../contents/Title";
import { FaBook } from "react-icons/fa";

const EducationSection: React.FC = () => {
  return (
    <section className="py-5 max-w-screen md:w-5/6">
      <Title title="Education" icon={<FaBook color="white" size={35}/>}/>
      <Timeline/>
    </section>
  );
};

export default EducationSection;
