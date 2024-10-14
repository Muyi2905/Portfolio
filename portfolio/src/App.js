import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
const App = () => {
    const { themeName } = useContext(ThemeContext);
    return (_jsxs("div", { id: "top", className: `${themeName} app`, children: [_jsx(Header, { homepage: "yourHomepageUrl", title: "Muyi" }), _jsxs("main", { children: [_jsx(About, {}), _jsx(Projects, {}), _jsx(Skills, {}), _jsx(Contact, {})] }), _jsx(ScrollToTop, {}), _jsx(Footer, {})] }));
};
export default App;
