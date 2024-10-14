import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import uniqid from 'uniqid';
import { projects } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';
// interface ProjectsProps {
//   projects: Project[];
// }
const Projects = () => {
    if (!projects.length)
        return null;
    return (_jsxs("section", { id: "projects", className: "section projects", children: [_jsx("h2", { className: "section__title", children: "Projects" }), _jsx("div", { className: "projects__grid", children: projects.map((project) => (_jsx(ProjectContainer, { project: project }, uniqid()))) })] }));
};
export default Projects;
