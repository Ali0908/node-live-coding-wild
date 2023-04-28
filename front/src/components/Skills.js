const Skill = ({ title, votes }) => {
  console.log(title, "error");
    return (
      <li>
        {title}
        <span className="votes">{votes}</span>
      </li>
    );
  };
  
  export default Skill;