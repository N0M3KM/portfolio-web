import { useState } from "react";
import copy from 'copy-to-clipboard';

const useClipboard = (text: string) => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = async () => {
        if ('clipboard' in navigator) {
            await navigator.clipboard.writeText(text);
        } else {
            copy(`await ${text}`);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return { copied, copyToClipboard };
};

export default useClipboard;
