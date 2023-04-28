import avatar from "../assets/avatar.png";
import Skill from "./Skills";

const Wilder = ({ name, skills, city}) => {
  return (
    <article className="card">
      <img src={avatar} alt="Jane Doe Profile" />
      <h3>{ name }</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
      {skills?.map((skill)  => (
        <Skill
      key={skill.id}
      title={skill?.title}
      votes={skill?.votes}
          /> ))}
      </ul>
      <span>{city}</span>
    </article>
  );
};

export default Wilder;