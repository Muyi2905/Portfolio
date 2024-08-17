import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // Add Twitter icon
import { about } from '../../portfolio';
import './About.css';

interface AboutProps {
  name: string;
  role: string;
  description: string;
  resume: string;
  social: {
    github: string;
    linkedin: string;
    X: string; // Rename X to twitter
  };
}

const About = () => {
  const { name, role, description, resume, social } = about as AboutProps;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span className="btn btn--outline">Resume</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}

            {social.X && ( // Add Twitter link
              <a
                href={social.X}
                aria-label="twitter"
                className="link link--icon"
              >
                <TwitterIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;