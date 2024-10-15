import React from "react";
import { SkillInfoCardProps } from "@/app/types";
import Image from "next/image";
import { Selection } from "@/libs/functions/CategorySelection";

const SkillCardInfo = ({ title }: SkillInfoCardProps) => {
    const category = Selection(title);
    
    return (
        <div className="rounded-xl p-1 w-full h-24 my-5 mx-0 sm:mx-5 flex justify-center bg-gradient-to-r from-gray-800 to-gray-900">
            <div className={`h-full w-full flex flex-row sm:flex-start items-center text-center flex-wrap`}>
            {category && category.length > 0 && category.map((info) => {
                return (
                    <div className="mx-2 sm:mx-5 transition-transform transform hover:scale-105 w-8 h-8 md:h-9 md:w-9 lg:h-10 lg:w-10">
                        <div className={`relative w-8 h-8 sm:w-7 sm:h-7 md:w-10 md:h-10 ${info.bg ? "bg-white rounded-full p-2" : ""}`}>
                            <Image
                                key={info.name}
                                src={info.src}
                                alt={info.name}
                                width={0}
                                height={0}
                                fill
                                className="p-1"
                            />
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default SkillCardInfo;
