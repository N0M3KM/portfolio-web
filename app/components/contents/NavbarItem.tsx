import { NavItemProps } from "@/app/types";
import Link from "next/link";

const NavbarItem = ({ label, href, className } : NavItemProps) => {
    const handleScroll = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <li>
            <Link href={href} className={className} onClick={handleScroll}>
                {label}
            </Link>
        </li>
    );
};

export default NavbarItem;
