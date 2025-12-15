import "./footer.css";
import logo from "../../assets/mani.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footergrid">
        <a href="/">
          <img src={logo} alt="manilogo" />
        </a>
        <a href="https://github.com/manikumarchintala" target="_blank">
          <img src={github} alt="githublogo" />
        </a>
        <a
          href="https://www.linkedin.com/in/mani-kumar-chintala-bb8145a8"
          target="_blank"
        >
          <img src={linkedin} alt="linkedinlogo" />
        </a>
      </div>
    </div>
  );
}
