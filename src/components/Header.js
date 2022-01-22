import Scoreboard from "./Scoreboard";

const Header = ({ title, desc, score, best }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{desc}</p>

      <Scoreboard score={score} best={best} />
    </div>
  );
};

Header.defaultProps = {
  title: "Hack the Vault",
  desc: "Hack the vault by clicking on an image not more than once",
};
export default Header;
