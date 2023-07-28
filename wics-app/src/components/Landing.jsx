import * as React from "react";
import "../styles/Landing.css";
import WiCSLogo from "../styles/images/WiCSLogo.png";

function LandingAll() {
  return (
    <div class="flex-container">
      <div class="column" classname="landing-column-left">
        <div style={{ "font-size": "50px" }}>
          We are <b>Brown Women in Computer Science</b>
        </div>
        <div style={{ "font-size": "20px" }}>
          Brown University's social and professional community to support and
          empower women pursuing CS!
        </div>
        <br />
        <LandingButton />
      </div>
      <div class="column">
        <div>
          <img src={WiCSLogo} style={{ "max-width": "110%" }} alt="Logo" />{" "}
        </div>
      </div>
    </div>
  );
}

function LandingButton() {
  return (
    <a href="https://linktr.ee/brownuwics" target="_blank" rel="noreferrer">
      <button
        class="btn btn-primary"
        style={{ "background-color": "#182C37", border: "#182C37" }}
      >
        <span style={{ "font-size": "20px" }}>Get Involved</span>
      </button>
    </a>
  );
}

export const Landing = () => {
  return <LandingAll />;
};
export default Landing;
