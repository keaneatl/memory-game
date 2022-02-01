import ghlogo from "../assets/github.png";
import reactlogo from "../assets/react.gif";

const Footer = ({ author }) => {
  return (
    <div className="footer">
      <p>
        Made by {author}
        <a href="https://github.com/keaneatl/memory-game" target="_blank">
          {" "}
          <img src={ghlogo} alt="Source Code" className="icon" />
        </a>
        <br />
        ReactJS
        <img src={reactlogo} alt="React Logo" className="icon" />
      </p>
    </div>
  );
};

Footer.defaultProps = {
  author: "Keane Andre",
};
export default Footer;
