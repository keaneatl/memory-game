import PropTypes from "prop-types";

const Scoreboard = ({ score, best }) => {
  return (
    <div className="scoreboard">
      <h3>
        Current Score: {score}
        <br />
        Best: {best}
      </h3>
    </div>
  );
};

Scoreboard.defaultProps = {
  score: 0,
  best: 0,
};

Scoreboard.propTypes = {
  score: PropTypes.number,
  best: PropTypes.number,
};
export default Scoreboard;
