import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const YoutubeCard = () => {
    return (
        <div className="relative flex flex-col w-full border border-10 border-white p-2 bg-gradient-to-tr from-pink-300 via-white to-indigo-300 rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 rotate-12">
                <FaYoutube size={100} className="text-gray-600" />
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
                        <h1 className="text-black text-xl mx-3">NOME KM</h1>
                        <Link href='https://www.youtube.com/@nomekm?sub_confirmation=1'>
                            <button className="bg-red-500 p-2 rounded-xl ml-3 cursor-pointer transform hover:scale-105 transition-transform duration-200">Subscribe</button>
                        </Link>
                    </div>
                    <div className="items-center justify-between w-full mx-auto flex-wrap px-5 flex sm:hidden lg:flex">
                        <div className="flex flex-col">
                            <h2 className="text-gray-500 text-xs">Subscribers</h2>
                            <h2 className="text-gray-900">730+</h2>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-gray-500 text-xs">Videos</h2>
                            <h2 className="text-gray-900">9</h2>
                        </div>
                        
                        <div className="flex flex-col">
                            <h2 className="text-gray-500 text-xs">Total Views</h2>
                            <h2 className="text-gray-900">200K+</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row h-full w-full items-center justify-center text-center text-gray-600 backdrop-blur-sm mt-2">
                <h1>"I haven't been uploading for long time. Feel free to subscribe if you like random contents."</h1>
            </div>
        </div>
    );
};

export default YoutubeCard;
