import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../Navbar/NavBar';
import './Header.css';
const Header = ({ homepage = null, title }) => {
    return (_jsxs("header", { className: "header center", children: [_jsx("h3", { children: homepage ? (_jsx("a", { href: homepage, className: "link", children: title })) : (title) }), _jsx(Navbar, {})] }));
};
export default Header;
