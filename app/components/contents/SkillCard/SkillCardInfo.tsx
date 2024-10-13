import React from "react";
import { SkillInfoCardProps } from "@/app/types";
import Image from "next/image";
import { Selection } from "@/libs/functions/CategorySelection";

const SkillCardInfo = ({ title }: SkillInfoCardProps) => {
    let category = Selection(title);
    
    return (
        <div className="rounded-xl p-1 w-full h-24 my-5 mx-0 sm:mx-5 flex justify-center bg-gradient-to-r from-gray-800 to-gray-900">
            <div key={title} className={`h-full w-full flex flex-row sm:flex-start items-center text-center flex-wrap`}>
            {category && category.length > 0 && category.map((info) => {
                return (
                    <div key={info.name} className="mx-2 sm:mx-5 transition-transform transform hover:scale-105 w-8 h-8 md:h-9 md:w-9 lg:h-10 lg:w-10">
                        <Image
                            src={info.src}
                            alt={info.name}
                            width={40}
                            height={40}
                            className={`${info.bg ? "bg-white rounded-full p-2" : ""}`}
                        />
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default SkillCardInfo;
