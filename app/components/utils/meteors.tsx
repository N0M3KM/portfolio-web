import { cn } from "@/libs/utils";
import React from "react";
import { MeteorProps } from "@/app/types";
 
export const Meteors = ({number,className} : MeteorProps) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "z-[-1] w-screen animate-meteor-effect absolute top-1/2 left-1/2 h-1 w-1 rounded-full bg-white shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#ffffff] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + 200) + "px",
            animationDelay: Math.random() * (0.6) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (1) + 1) + "s",
          }}
        ></span>
      ))}
    </>
  );
};