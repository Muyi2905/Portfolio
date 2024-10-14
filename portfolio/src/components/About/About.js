import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // Add Twitter icon
import { about } from '../../portfolio';
import './About.css';
const About = () => {
    const { name, role, description, resume, social } = about;
    return (_jsxs("div", { className: "about center", children: [name && (_jsxs("h1", { children: ["Hi, I am ", _jsxs("span", { className: "about__name", children: [name, "."] })] })), role && _jsxs("h2", { className: "about__role", children: ["A ", role, "."] }), _jsx("p", { className: "about__desc", children: description && description }), _jsxs("div", { className: "about__contact center", children: [resume && (_jsx("a", { href: resume, children: _jsx("span", { className: "btn btn--outline", children: "Resume" }) })), social && (_jsxs(_Fragment, { children: [social.github && (_jsx("a", { href: social.github, "aria-label": "github", className: "link link--icon", children: _jsx(GitHubIcon, {}) })), social.linkedin && (_jsx("a", { href: social.linkedin, "aria-label": "linkedin", className: "link link--icon", children: _jsx(LinkedInIcon, {}) })), social.X && ( // Add Twitter link
                            _jsx("a", { href: social.X, "aria-label": "twitter", className: "link link--icon", children: _jsx(TwitterIcon, {}) }))] }))] })] }));
};
export default About;
