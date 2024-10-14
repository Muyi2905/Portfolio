import './ProjectContainer.css';
interface Project {
    name: string;
    description: string;
    stack?: string[];
    sourceCode?: string;
    livePreview?: string;
}
declare const ProjectContainer: ({ project }: {
    project: Project;
}) => import("react/jsx-runtime").JSX.Element;
export default ProjectContainer;
