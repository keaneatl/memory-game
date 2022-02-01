import Scoreboard from "./Scoreboard";

const Header = ({ title, desc, score, best }) => {
  return (
    <div className="header">
      <h1 className="heading">{title}</h1>
      <p>
        <i>Instructions: </i>
        {desc}
      </p>

      <Scoreboard score={score} best={best} />
    </div>
  );
};

Header.defaultProps = {
  title: "HACK THE VAULT",
  desc: "Hack the vault by clicking on an image not more than once",
};
export default Header;
