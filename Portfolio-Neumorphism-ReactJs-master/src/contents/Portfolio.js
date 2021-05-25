import { Component } from "react";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
            <a href="https://iss3dglobe.vercel.app/">
              <img
                src={project1}
                className="po1"
                alt="ISS 3D"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
            <a href="https://isstracking.space/">
              <img
                src={project2}
                className="po1"
                alt="ISS 2D"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
            <a href="https://www.figma.com/">
              <img src={project3} className="po1" alt="Figma Design"></img>
            </a>
          </div>
        </div>
        <div class="port_out port4">
          <div class="port_in">
            <a href="https://credly.com/users/manoprasanth-m">
              <img src={project4} className="po1" alt="Digital Credentials"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
