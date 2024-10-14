import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css';
const ProjectContainer = ({ project }) => (_jsxs("div", { className: "project", children: [_jsx("h3", { children: project.name }), _jsx("p", { className: "project__description", children: project.description }), project.stack && (_jsx("ul", { className: "project__stack", children: project.stack.map((item) => (_jsx("li", { className: "project__stack-item", children: item }, uniqid()))) })), project.sourceCode && (_jsx("a", { href: project.sourceCode, "aria-label": "source code", className: "link link--icon", children: _jsx(GitHubIcon, {}) })), project.livePreview && (_jsx("a", { href: project.livePreview, "aria-label": "live preview", className: "link link--icon", children: _jsx(LaunchIcon, {}) }))] }));
export default ProjectContainer;
