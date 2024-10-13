import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { IconItemProps } from "@/app/types";

const IconItem = ({children, href, className}: IconItemProps)=>{
    return (
        <Link href={href}>
            <p className={twMerge(`rounded-full bg-transparent border-2`, className)}>
                {children}
            </p>
        </Link>
    )
}

export default IconItem;





