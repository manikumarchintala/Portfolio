import tent from "../../assets/TRW Pitch A Tent.svg";
import "./landing.css";
export default function Landing() {
  return (
    <div className="landing">
      <div>
        <img src={tent} alt="camping" />
      </div>
      <div className="landingtext">
        <p>
          I'll craft code for the web and launch it into inter-webs . When I'm
          not coding, you can find me enjoying the great outdoors.
        </p>
      </div>
    </div>
  );
}
