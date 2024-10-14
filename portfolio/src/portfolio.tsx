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
  
  const header: Header = {
    homepage: 'https://github.com/Muyi2905',
    title: 'MO.',
  };
  
  const about: About = {
    name: 'Muyiwa Obaremi',
    role: 'Software Engineer',
    description:
      'Passionate about building innovative solutions and continuously learning new technologies. I enjoy designing and developing scalable, efficient, and user-friendly applications. With a strong foundation in both front-end and back-end development, I`m always excited to take on new challenges and explore emerging trends in the tech industry.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/muyiwaobaremi/',
      github: 'https://github.com/Muyi2905',
      X: 'https://X.com/Muyi_dev'
    },
  };
  
  const projects: Project[] = [
    {
      name: 'Project 1',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 2',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 3',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ];
  
  const skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    
    
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ];
  
  const contact: Contact = {
    email: 'obaremimyiwa@gmail.com',
  };
  
  export { header, about, projects, skills, contact };