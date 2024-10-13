import React from "react";
import { SkillCardProps } from "@/app/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { FaLine } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import ClipboardLabel from "../ClipboardLabel";

const ContactCard = () => {
    return (
        <div className="flex flex-col w-full border border-2 border-gray-600 p-2 bg-gray-800 rounded-xl mb-5">
            <ClipboardLabel text='mnmyuan2549@gmail.com' icon={<IoIosMail />}/>
            <ClipboardLabel text='Line ID : hi666ih' icon={<FaLine />}/>
            <ClipboardLabel text='drarun.yook@kmutt.ac.th' icon={<PiMicrosoftOutlookLogoFill />}/>
        </div>
    );
};

export default ContactCard;
