import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const InstragramCard = () => {
    return (
        <div className="relative flex flex-col w-full border border-10 border-white p-2 bg-gradient-to-tr from-pink-300 via-white to-indigo-300 rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 rotate-12">
                <FaInstagram size={100} className="text-gray-600" />
            </div>
            <div className="flex flex-row h-fit w-full">
                <Image
                    src="/images/Pfp.jpg"
                    alt="Instragram"
                    width={70}
                    height={70}
                    className="rounded-full h-16 w-16 mt-3 sm:mt-2 "
                />
                <div className="flex flex-col mt-2 sm:mt-0 ml-0 sm:ml-2 gap-2 w-full sm:w-3/4">
                    <div className="flex items-center justify-between w-full mx-auto flex-wrap">
                        <h1 className="text-black text-xl mx-3">yyuuan.km</h1>
                        <Link href='https://www.instagram.com/yyuuan.km/?__a=1&__d=1'>
                            <button className="bg-blue-500 p-2 rounded-xl ml-3 cursor-pointer transform hover:scale-105 transition-transform duration-200">Follow</button>
                        </Link>
                    </div>
                    <div className="items-center justify-between w-full mx-auto flex-wrap px-5 flex sm:hidden lg:flex">
                        <div className="flex flex-col">
                            <h2 className="text-gray-500 text-xs">Posts</h2>
                            <h2 className="text-gray-900">0</h2>
                        </div>
                        
                        <div className="flex flex-col">
                            <h2 className="text-gray-500 text-xs">Followers</h2>
                            <h2 className="text-gray-900">60+</h2>
                        </div>
                        
                        <div className="flex flex-col">
                            <h2 className="text-gray-500 text-xs">Following</h2>
                            <h2 className="text-gray-900">60+</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row h-full w-full items-center justify-center text-center text-gray-600 backdrop-blur-sm mt-2">
                <h1>"Well, click at the blue button. It'll lead you to my IG page."</h1>
            </div>
        </div>
    );
};

export default InstragramCard;
