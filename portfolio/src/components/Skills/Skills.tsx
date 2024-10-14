import uniqid from "uniqid";
import "./Skills.css";

interface Skill {
  name: string;
}

const skills: Skill[] = [
  
  { name: "Golang" },
  { name: "AWS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Node.js" },
  {name: "ExpressJs"},
  { name: "Docker" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "MySql" },
  { name: "MongoDB" },
  { name: "Postgres" },
  { name: "Git" },
  {name : "Linux"}
];

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills & Technologies</h2>
      <ul className="skills__list">
        {skills.map((skill: Skill) => (
          <li key={uniqid()} className="skills__list-item btn btn--plain">
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
