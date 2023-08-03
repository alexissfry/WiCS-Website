import React from "react";
import { instagram, facebook, slack, email } from "../assets/icons/icons.js";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.instagram.com/brownuwics/?hl=en" target="_blank" rel="noreferrer">
          <img
            src={instagram}
            alt="instagram icon"
            style={{ width: "2.5%", height: "2.5%", paddingRight: 10 }}
          />
        </a>
        <a href="https://www.facebook.com/BrownUWics/" target="_blank" rel="noreferrer">
          <img
            src={facebook}
            alt="facebook icon"
            style={{ width: "2.5%", height: "2.5%", paddingRight: 10 }}
          />
        </a>
        <a href="https://www.example.com" target="_blank" rel="noreferrer">
          <img
            src={slack}
            alt="slack icon"
            style={{ width: "2.3%", height: "2.3%", paddingRight: 10 }}
          />
        </a>
        <a href="mailto:wics@lists.cs.brown.edu" target="_blank" rel="noreferrer">
          <img
            src={email}
            alt="email icon"
            style={{ width: "2.5%", height: "2.5%", paddingRight: 10 }}
          />
        </a>
      </div>
      <span style={{ color: "white" }}>
        © 2023 Brown Women in Computer Science
      </span>
    </footer>
  );
};

export default Footer;