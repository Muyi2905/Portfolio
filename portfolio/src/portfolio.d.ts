interface Header {
    homepage?: string;
    title?: string;
}
interface About {
    name?: string;
    role?: string;
    description?: string;
    resume?: string;
    social?: {
        linkedin?: string;
        github?: string;
        X?: string;
    };
}
interface Project {
    name: string;
    description: string;
    stack: string[];
    sourceCode?: string;
    livePreview?: string;
}
interface Contact {
    email?: string;
}
declare const header: Header;
declare const about: About;
declare const projects: Project[];
declare const skills: string[];
declare const contact: Contact;
export { header, about, projects, skills, contact };
