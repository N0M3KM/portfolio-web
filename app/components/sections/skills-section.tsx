"use client";
import React from "react";
import SkillCard from "../contents/SkillCard/SkillCard";
import SkillCardInfo from "../contents/SkillCard/SkillCardInfo";
import Title from "../contents/Title";
import { FaTools } from "react-icons/fa";
import { motion} from "framer-motion";

const cardInfo = [
  {key : 1, title : "Language", icon : '/images/Programming.png'},
  {key : 2, title : "Framework", icon : '/images/Framework.png'},
  {key : 3, title : "Tool", icon : '/images/Tool.png'},
  {key : 4, title : "Database", icon : '/images/Database.png'}
]

const SkillSection = () => {
  return (
    <motion.section 
      id='skills' 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration : 1}}
      viewport={{ once: true }}
      className="relative my-5 mb-7 py-5 px-10 max-w-screen w-5/6 bg-black bg-grid-white/[0.2] border-2 border-[#f65afa] "
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Title title="Skill" icon={<FaTools color="white" size={35}/>}/>
      <div className="flex flex-col gap-1 z-1 relative">
        {cardInfo.map((item)=>(
          <div key={item.key} className="flex flex-col sm:flex-row justify-center w-full z-5">
            <div className="flex justify-center w-full sm:w-1/4">
              <SkillCard title={item.title} icon={item.icon} borderColor="sm:bg-gradient-to-t from-[#667EEA] to-[#f65afa]"/>
            </div>
            <div className="relative justify-center w-full sm:w-3/4">
              <SkillCardInfo title={item.title}/>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillSection;

