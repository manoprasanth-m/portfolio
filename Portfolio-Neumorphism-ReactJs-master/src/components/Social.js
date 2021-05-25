import { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          class="btnsame btn1"
          href="https://github.com/manoprasanth-m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        
        <a
          class="btnsame btn3"
          href="https://www.linkedin.com/in/mano-prasanth-m-908b061b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          class="btnsame btn4"
          href="https://instagram.com/mano_prasanth_m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default Social;
