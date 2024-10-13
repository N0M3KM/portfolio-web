"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdContactSupport } from "react-icons/md";
import ContactCard from "../contents/ContactCard/ContactCard";
import InstragramCard from "../contents/ContactCard/InstragramCard";
import YoutubeCard from "../contents/ContactCard/YoutubeCard";
import DiscordCard from "../contents/ContactCard/DiscordCard";
import GithubCard from "../contents/ContactCard/GithubCard";
import Title from "../contents/Title";

const ContactSection: React.FC = () => {
  return (
    <section id='contact' className="py-10 mx-auto text-white w-11/12 sm:w-3/4 md:w-5/6 max-w-screen-xl">
      <motion.h1
        className="text-4xl font-semibold mb-6 open-sans-font"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        viewport={{ once: true }}
      >
        <Title title="Contact" icon={<MdContactSupport color="white" size={35}/>}/>
      </motion.h1>

      <motion.div 
        className="flex flex-col md:flex-row justify-between"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        viewport={{ once: true }}
      >
        <div className="w-full md:w-1/3 md:mr-7">
          <ContactCard />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 md:mt-0 md:w-2/3">
          <InstragramCard />
          <YoutubeCard />
          <DiscordCard />
          <GithubCard />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
