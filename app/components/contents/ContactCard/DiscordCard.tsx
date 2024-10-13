import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

const DiscordCard = () => {
    return (
        <div className="relative flex flex-col w-full border border-10 border-white p-2 bg-gradient-to-tr from-pink-300 via-white to-indigo-300 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 rotate-12">
                <FaDiscord size={100} className="text-gray-600" />
            </div>
            <div className="flex flex-row h-fit w-full relative z-10">
                <Image
                    src="/images/DiscordPfp.png"
                    alt="Instagram"
                    width={70}
                    height={70}
                    className="rounded-full h-16 w-16 mt-3 sm:mt-2"
                />
                <div className="flex flex-col mt-2 sm:mt-0 ml-0 sm:ml-2 gap-2 w-full sm:w-3/4">
                    <div className="flex items-center justify-between w-full mx-auto flex-wrap">
                        <h1 className="text-black text-xl mx-3">n0me.</h1>
                        <Link href='https://discordapp.com/users/711743775793479750'>
                            <button className="bg-gray-500 p-2 rounded-xl ml-3 cursor-pointer transform hover:scale-105 transition-transform duration-200">Add Friend+</button>
                        </Link>
                    </div>
                    {/* Uncomment if needed
                    <div className="flex flex-col">
                        <h2 className="MYSELF text-gray-500 text-xs hidden lg:flex">i like grade 4.00 cuz 183.84 and 126.94, also 6.94 without i and v in 293, take QUEUE for ME please.</h2>
                    </div>
                    */}
                </div>
            </div>
            <div className="flex flex-row h-full w-full items-center justify-center text-center text-gray-600 backdrop-blur-sm mt-2 relative z-10">
                <h1>&quot;I always use discord, feel free to contact me via discord.&quot;</h1>
            </div>
        </div>
    );
};

export default DiscordCard;
