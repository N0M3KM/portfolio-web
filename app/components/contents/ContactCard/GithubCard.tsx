import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const GithubCard = () => {
    return (
        <div className="relative flex flex-col w-full border border-10 border-white p-2 bg-gradient-to-tr from-pink-300 via-white to-indigo-300 rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 rotate-12">
                <FaGithub size={100} className="text-gray-600" />
            </div>
            <div className="flex flex-row h-fit w-full">
                <Image
                    src="/images/YTPfp.jpg"
                    alt="Instragram"
                    width={70}
                    height={70}
                    className="rounded-full h-16 w-16 mt-3 sm:mt-2 "
                />
                <div className="flex flex-col mt-2 sm:mt-0 ml-0 sm:ml-2 gap-2 w-full sm:w-3/4">
                    <div className="flex items-center justify-between w-full mx-auto flex-wrap">
                        <h1 className="text-black text-xl mx-3">N0M3KM</h1>
                        <Link href='https://github.com/N0M3KM'>
                            <button className="bg-gray-500 p-2 rounded-xl ml-3 cursor-pointer transform hover:scale-105 transition-transform duration-200">Go to</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row h-full w-full items-center justify-center text-center text-gray-600 backdrop-blur-sm mt-2">
                <h1>&quot;My github... nothing much&quot;</h1>
            </div>
        </div>
    );
};

export default GithubCard;
