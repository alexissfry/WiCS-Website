import * as React from "react";
import "../styles/Landing.css";
import WiCSLogo from "../assets/images/WiCSLogo.png";
import { Col } from "react-bootstrap";

const Landing = () => {
  return (
    <div class="flex-container">
      <Col xs={12} md={6} className="landing-column-left">
        <h1 style={{ "font-size": "50px" }} className="lh-base">
          We are <b>Brown Women in Computer Science</b>
        </h1>
        <div style={{ "font-size": "20px" }}>
          Brown University's social and professional community to support and
          empower women pursuing CS!
        </div>
        <br />
        <LandingButton />
      </Col>
      <Col xs={12} md={6} className="column">
        <img src={WiCSLogo} style={{ "max-width": "90%" }} alt="Logo" />
      </Col>
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

export default Landing;
