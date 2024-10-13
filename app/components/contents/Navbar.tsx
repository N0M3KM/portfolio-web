"use client"
import React, { useMemo, useState, useEffect } from "react";
import { BiMenu } from 'react-icons/bi';
import { twMerge } from "tailwind-merge";
import { usePathname } from 'next/navigation';
import NavbarItem from "@/app/components/contents/NavbarItem";

const Navbar = () => {
    const pathName = usePathname();
    
    const routes = useMemo(() => [
        { id: 1, label: 'About', href: '#about' },
        { id: 2, label: 'Skills', href: '#skills' },
        { id: 3, label: 'Contact', href: '#contact' },
    ], []);

    return (
        <nav className={twMerge(`px-10 fixed inset-x-0 top-0 w-full py-4 z-20 animated-background bg-gradient-to-r from-black via-blue-800 to-indigo-500`)}>
            <div className="max-w-7xl flex justify-between items-center mx-auto">
                <div className="flex items-center">
                    <p className="font-regular text-1xl text-white">Nome.km</p>
                </div>
                <ul className="flex ml-4 space-x-5 py-auto sm:flex items-center">
                    {routes.map((item) => (
                        <NavbarItem 
                            className={`text-white hover:text-pink-500`}
                            key={item.id}
                            {...item} 
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
