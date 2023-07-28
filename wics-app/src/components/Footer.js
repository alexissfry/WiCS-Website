import React, { useState, useEffect } from "react";
import instagram from "../styles/images/instagram.png";
import facebook from "../styles/images/facebook.png";
import slack from "../styles/images/slack.png";
import email from "../styles/images/envelope.png";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  const footerHeight = 100; // Replace with your footer height

  useEffect(() => {
    function handleScroll() {
      const distanceFromTop =
        document.documentElement.scrollTop + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (distanceFromTop >= documentHeight - footerHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Footer">
      {showFooter && (
        <footer className="footer--pin">
          <a href="https://www.instagram.com/brownuwics/?hl=en" target="_blank">
            <img
              src={instagram}
              alt="instagram icon"
              style={{ width: "2.5%", height: "2.5%", paddingRight: 10 }}
            />
          </a>
          <a href="https://www.facebook.com/BrownUWics/" target="_blank">
            <img
              src={facebook}
              alt="facebook icon"
              style={{ width: "2.5%", height: "2.5%", paddingRight: 10 }}
            />
          </a>
          <a href="https://www.example.com" target="_blank">
            <img
              src={slack}
              alt="slack icon"
              style={{ width: "2.3%", height: "2.3%", paddingRight: 10 }}
            />
          </a>
          <a href="mailto:wics@lists.cs.brown.edu" target="_blank">
            <img
              src={email}
              alt="email icon"
              style={{ width: "2.5%", height: "2.5%", paddingRight: 10 }}
            />
          </a>
          <p>
            {" "}
            <span style={{ color: "white" }}>
              © 2023 Brown Women in Computer Science
            </span>{" "}
          </p>
        </footer>
      )}
    </div>
  );
};
