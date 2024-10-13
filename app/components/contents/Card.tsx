import React from 'react';
import Link from 'next/link';
import { CardProps } from '@/app/types';
import { MdArrowOutward } from "react-icons/md";

const Card = ({ title, description, buttonWord, link} : CardProps) => {
    return (
    <div className=" w-full relative max-w-xs">
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-3xl flex flex-col justify-end items-start">
            <h1 className="open-sans-font font-bold text-xl text-white mb-4 relative z-50">{title}</h1>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">{description}</p>
            <Link href={link}>
                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 inline flex">
                    {buttonWord}
                    <MdArrowOutward/>
                </button>
            </Link>
        </div>
    </div>
    );
};

export default Card;