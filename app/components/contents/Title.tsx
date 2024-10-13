import { TitleProps } from "@/app/types"

const Title = ({ title, icon }: TitleProps) => {
    return (
        <div className="relative z-1 flex items-center"> {/* Use flex and center items vertically */}
            {icon}
            <h1 className="open-sans-font text-4xl font-semibold text-white mx-2 z-1 relative">
                {title}
            </h1>
        </div>
    );
};

export default Title