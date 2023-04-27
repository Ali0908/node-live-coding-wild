import avatar from "../assets/avatar.png";
import Skill from "./Skills";

const Wilder = ({ name }) => {
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
        <Skill />
        <Skill />
        <Skill />
      </ul>
    </article>
  );
};

export default Wilder;