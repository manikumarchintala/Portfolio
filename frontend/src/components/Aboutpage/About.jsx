import "./About.css";
import avtar from "../../assets/avtar.png";
import Gapper from "../Gapper/Gapper.jsx";
export default function About() {
  return (
    <>
      <Gapper onname={"gapper"} />
      <div className="topabout">
        <div>
          <div className="imageset">
            <img src={avtar} alt="" />
          </div>
          <br />
          <div className="textset">
            <h4>Mani Chintala</h4>
            {/* <p>Web Developer</p> */}
          </div>
        </div>
        <div className="textbio">
          <div className="biotext">
            <p>
              <strong>Bio:</strong>
            </p>
          </div>
          <p>
            I’m a Software Engineer who thrives on adventure,both in coding and
            the great outdoors.Just like pitching a tent in any environment, I’m
            dedicated to ensuring every detail of my work is in place,whether
            it’s crafting smooth, responsive layouts with HTML5, CSS3, and
            JavaScript, or leveraging modern frameworks like React.
          </p>
        </div>
      </div>
      <div className="bottomabout">
        <div className="inner">
          <h4>
            My approach to development mirrors a well-planned camping trip:
            equipped with the right tools, attention to detail, and adaptability
            to handle any terrain.
          </h4>
          <br />
          <p className="darkgreen">
            My approach to front-end development is rooted in strong attention
            to detail, accessibility best practices, and performance
            optimization.
          </p>
          <p>
            I ensure the web experiences I create are scalable, secure, and
            ready for any environment,just like a well-prepared campsite.
          </p>
          <p className="darkgreen">
            I build scalable, efficient applications using Azure to deliver
            high-performance solutions.
          </p>
          <p>
            When I’m not coding, you’ll likely find me exploring the outdoors,
            drawing inspiration from nature’s simplicity and design.
          </p>
        </div>
      </div>
    </>
  );
}
