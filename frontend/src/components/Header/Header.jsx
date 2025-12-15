import { Link } from "react-router-dom";
import light from "../../assets/lightmode.svg";
import dark from "../../assets/darkmode.svg";
import mani from "../../assets/mani.svg";
import resume from "../../assets/Mani Kumar Chintala marketing.pdf";
import "./header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <header className="topmost">
      <Link to="/" className="child">
        <img src={mani} alt="Logo" />
      </Link>
      <Link
        onClick={(e) => {
          e.preventDefault();
          toggleTheme();
        }}
        className="child"
      >
        <img
          src={theme === "light" ? light : dark}
          alt={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        />
      </Link>
      <Link to={resume} target="_blank" className="child">
        <p>Resume</p>
      </Link>

      <Link to="/about" className="child">
        <p>About</p>
      </Link>
    </header>
  );
}
