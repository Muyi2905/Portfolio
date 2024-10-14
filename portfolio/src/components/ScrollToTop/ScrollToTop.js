import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return isVisible ? (_jsx("div", { className: "scroll-top", children: _jsx("a", { href: "#top", "aria-label": "top", children: _jsx(ArrowUpwardIcon, { fontSize: "large" }) }) })) : null;
};
export default ScrollToTop;
