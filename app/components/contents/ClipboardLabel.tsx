import useClipboard from "@/app/hooks/useClipboard";
import { ClipboardLabelProps } from "@/app/types";
import { MdContentCopy } from "react-icons/md";

const ClipboardLabel = ({ text, icon }: ClipboardLabelProps) => {
    const { copied, copyToClipboard } = useClipboard(text);

    return (
        <div className="flex items-center justify-between p-2 border-b-2 border-gray-600">
            <div className="flex items-center gap-2 flex-1 overflow-hidden">
                {icon}
                <h1 className="text-lg flex-1 overflow-hidden text-ellipsis whitespace-nowrap" title={text}>{text}</h1>
            </div>
            <div className="flex-shrink-0">
                <button className="flex items-center text-sm bg-gray-500 p-1 rounded-md text-slate-200 hover:text-white cursor-pointer" onClick={copyToClipboard}>
                    {copied ? (
                        'Copied!!!'
                    ) : (
                        <><MdContentCopy className="mr-1" /> Copy</>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ClipboardLabel;
