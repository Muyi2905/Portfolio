import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

interface Skill {
  name: string;
  icon: string; // add an icon property
}

const skills: Skill[] = [
  { name: 'HTML', icon: 'html5-icon.png' },
  { name: 'CSS', icon: 'css3-icon.png' },
  { name: 'JavaScript', icon: 'js-icon.png' },
  // ...
];

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill: Skill) => (
          <li key={uniqid()} className="skills__list-item btn btn--plain">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;