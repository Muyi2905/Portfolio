import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../contexts/theme';
import { projects, skills, contact } from '../../portfolio';
import './NavBar.css';
const Navbar = () => {
    const { themeName, toggleTheme } = useContext(ThemeContext);
    const [showNavList, setShowNavList] = useState(false);
    const toggleNavList = () => setShowNavList(!showNavList);
    return (_jsxs("nav", { className: "center nav", children: [_jsxs("ul", { style: { display: showNavList ? 'flex' : undefined }, className: "nav__list", children: [projects.length ? (_jsx("li", { className: "nav__list-item", children: _jsx("a", { href: "#projects", onClick: toggleNavList, className: "link link--nav", children: "Projects" }) })) : null, skills.length ? (_jsx("li", { className: "nav__list-item", children: _jsx("a", { href: "#skills", onClick: toggleNavList, className: "link link--nav", children: "Skills" }) })) : null, contact.email ? (_jsx("li", { className: "nav__list-item", children: _jsx("a", { href: "#contact", onClick: toggleNavList, className: "link link--nav", children: "Contact" }) })) : null] }), _jsx("button", { type: "button", onClick: toggleTheme, className: "btn btn--icon nav__theme", "aria-label": "toggle theme", children: themeName === 'dark' ? _jsx(WbSunnyRoundedIcon, {}) : _jsx(Brightness2Icon, {}) }), _jsx("button", { type: "button", onClick: toggleNavList, className: "btn btn--icon nav__hamburger", "aria-label": "toggle navigation", children: showNavList ? _jsx(CloseIcon, {}) : _jsx(MenuIcon, {}) })] }));
};
export default Navbar;
