import React from "react";
import { SkillCardProps } from "@/app/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge"
import { LoaderPorps } from "@/app/types";;

const SkillCard = ({ title, icon, isActive, borderColor }: SkillCardProps) => {

    const loaderProp =({ src } : LoaderPorps) => {
        return src;
    }
    
    return (
        <div className={twMerge(`rounded-xl p-[1px] w-full h-10 sm:h-24 my-1 sm:my-5 mx-2 ${isActive ? "" : ""} bg-transparent`,borderColor)}>
            <div className="text-center flex items-center justify-center w-full h-full bg-transparent sm:bg-gradient-to-t from-gray-800 to-gray-900 sm:hover:from-gray-700 sm:hover:to-gray-800 transition duration-200 border-b-2 py-6 border-gray-500 sm:border-0 sm:rounded-xl">
                <div className={`relative w-8 h-8 sm:w-7 sm:h-7 md:w-10 md:h-10`}>
                    <Image
                        src={icon}
                        alt={title}
                        quality={100}
                        width={0}
                        height={0}
                        fill
                        loader={loaderProp}
                    />
                </div>
                <h1 className="text-white text-lg sm:text-sm md:text-md lg:text-lg pl-1 md:pl-3">{title}</h1>
            </div>
        </div>
    );
};

export default SkillCard;
