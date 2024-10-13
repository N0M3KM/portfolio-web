"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../utils/background-gradient";
import Image from "next/image";
import { Meteors } from "../utils/meteors";
import { favorites } from "@/libs/info/favorites";
 
const HeroSection = () => {
  const devSpan = <span className="inline font-bold sm:text-lg lg:text-xl bg-gradient-to-r from-purple-500 to-sky-500 bg-clip-text text-transparent">developer</span>
  const nameSpan = <span className={`open-sans-font font-extrabold text-3xl sm:text-4xl lg:text-6xl px-1 inline bg-gradient-to-r from-purple-500 via-pink-400 via-blue-500 to-sky-500 bg-clip-text text-transparent`}>YUAN</span>
  
  return (
    <section id='about' className="pt-8 mx-0 md:mx-10 mt-5 md:mt-5 max-w-screen md:w-5/6 max-h-screen overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center justify-between bg-transparent">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="mt-4 lg:mt-0 w-full md:w-1/2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20] }}
            transition={{
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
              duration: 2
            }}
          >
            <div className="rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative select-none">
              <Image
                src="/images/Abstract.png"
                alt="hero abstract"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                quality={100}
                width={350}
                height={350}
              />
              <Image
                src="/images/Skibidi.png"
                alt="hero abstract"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                quality={100}
                width={310}
                height={310}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1 }}
          className="mx-auto md:mx-0 w-full md:w-1/2 px-5 md:px-0 sm:ml-7"
        >
          <h1 className="flex justify-center sm:justify-start items-center text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <p className="font-semibold text-2xl sm:text-3xl lg:text-5xl sm:pr-1 lg:pr-5 inline">Hello, I'm</p>
            {nameSpan}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-l md:mr-20">
            I'm Yuan, a junior {devSpan} from Thailand.
          </p>
          <p className="text-gray-400 text-base sm:text-lg lg:text-l mt-1 md:mr-20">
            I am passionate about
          </p>
          <div className="py-3 flex flex-wrap gap-2 pr-1 mt-2 w-full">
            {favorites.map((item) => (
              <BackgroundGradient
                key={item.title}
                className='bg-transparent inline-block'
                animate={false}
                customGradient={item.gradient}
              >
                <span className="text-xs block bg-[#000000] hover:bg-slate-800 rounded-full px-5 py-2 text-white">
                  {item.title}
                </span>
              </BackgroundGradient>
            ))}
          </div>
          <h1 className="flex justify-center sm:justify-start items-center text-white my-1 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            {/* Additional content can go here */}
          </h1>
        </motion.div>
      </div>
      <Meteors number={5} />
    </section>

  );
};

export default HeroSection;
