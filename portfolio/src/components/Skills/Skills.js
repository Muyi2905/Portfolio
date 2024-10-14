import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import uniqid from "uniqid";
import "./Skills.css";
const skills = [
    { name: "Golang" },
    { name: "AWS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "ExpressJs" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "MySql" },
    { name: "MongoDB" },
    { name: "Postgres" },
    { name: "Git" },
    { name: "Linux" }
];
const Skills = () => {
    if (!skills.length)
        return null;
    return (_jsxs("section", { className: "section skills", id: "skills", children: [_jsx("h2", { className: "section__title", children: "Skills & Technologies" }), _jsx("ul", { className: "skills__list", children: skills.map((skill) => (_jsx("li", { className: "skills__list-item btn btn--plain", children: skill.name }, uniqid()))) })] }));
};
export default Skills;
