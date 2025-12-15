import "./Experience.css";
import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";
import work from "../../assets/worklabel.svg";
export default function Experience() {
  return (
    <div className="experience">
      <div className="labelholder">
        <img src={work} alt="" />
        <br />
        <p>
          Have been Writing code
          <br />
          since past five years
        </p>
      </div>
      <div className="experiencegrid">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="flexb">
          <div className="innerflex">
            <div className="imageflex">
              <img src={one} alt="" />
            </div>
            <div>
              <p>
                Frontend developer at <strong>Intoto</strong>
              </p>
              <p>Feb 2024</p>
            </div>
          </div>
          <div className="innerflex">
            <div className="imageflex">
              <img src={two} alt="" />
            </div>
            <div>
              <p>
                Student Tech at <strong>Uhcl</strong>{" "}
              </p>
              <p>Nov 2022 - Jun 2023</p>
            </div>
          </div>
          <div className="innerflex">
            <div className="imageflex">
              <img src={three} alt="" />
            </div>
            <div>
              <p>
                Software Engineer at <strong>softizo</strong>
              </p>
              <p>May 2018-Jun 2021</p>
            </div>
          </div>
        </div>
        <div className="six"></div>
        <div className="seven"></div>
        <div className="eight"></div>
        <div className="nine"></div>
      </div>
    </div>
  );
}
