import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import socials1 from "../styles/socials_images/socials1.png";
import socials2 from "../styles/socials_images/socials2.png";
import socials3 from "../styles/socials_images/socials3.png";
import socials4 from "../styles/socials_images/socials4.png";
import socials5 from "../styles/socials_images/socials5.png";
import socials6 from "../styles/socials_images/socials6.png";
import "../styles/Socials.css";

export const Socials = () => {
  return (
    <Container>
      <Row>
        <div className="text-center" id="socials-header">
          <h1>Stay Connected</h1>
        </div>
      </Row>

      <Row>
        <div className="text-center">
          <h3 class="social-subheading">
            Follow us on{" "}
            <a href="https://www.instagram.com/brownuwics/" class="link-text">
              {" "}
              Instagram
            </a>{" "}
            and{" "}
            <a href="https://www.facebook.com/BrownUWics" class="link-text">
              Facebook
            </a>
            ! Also, to stay updated on our events subscribe to the WiCS Listserv
            and join our Slack.
          </h3>
        </div>
      </Row>
      <Row>
        <Col md={4}>
          <Image src={socials1} className="image-style" thumbnail />
        </Col>
        <Col md={4}>
          <Image src={socials2} className="image-style" thumbnail />
        </Col>
        <Col md={4}>
          <Image src={socials3} className="image-style" thumbnail />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src={socials4} className="image-style" thumbnail />
        </Col>
        <Col xs={12} md={4}>
          <Image src={socials5} className="image-style" thumbnail />
        </Col>
        <Col xs={12} md={4}>
          <Image src={socials6} className="image-style" thumbnail />
        </Col>
      </Row>
    </Container>
  );
};
