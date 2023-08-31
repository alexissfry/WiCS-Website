import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../styles/Resources.css";

const Resources = () => {
  return (
    <div className="content-container">
      <h1 className="section-header">Resources</h1>
      <Row className="cards-container">
        <Col md={4} sm={8}>
          <div className="card mentorship">
            <div className="top-container">
              <h3 className="resource-title">Mentorship</h3>
              <div className="desc">
                Get paired with a peer to learn about industry, research,
                internships, interviews, and much more!
              </div>
            </div>
            <Button variant="light" className="button">Coming Soon</Button>
          </div>
        </Col>
        <Col md={4} sm={8}>
          <div className="card community">
            <div className="top-container">
              <h3 className="resource-title">Community</h3>
              <div className="desc">
                Stay connected with the WiCS community at Brown online and
                always!
              </div>
            </div>
            <Button variant="light" className="button">Join Our Slack</Button>
          </div>
        </Col>
        <Col md={4} sm={8}>
          <div className="card mailing">
            <div className="top-container">
              <h3 className="resource-title">Mailing List</h3>
              <div className="desc">
                Stay updated on our events, internships, hackathons, and so much
                more!
              </div>
            </div>
            <Button variant="light" className="button">Sign Up</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Resources;