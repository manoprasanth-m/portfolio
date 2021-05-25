import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profile_photo.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Mano <mark>Prasanth</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Front End Developer",
            "UI/UX Designer",
            "Cyber Security Analyst",
          ]}
          speed={10}
          eraseDelay={400}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
