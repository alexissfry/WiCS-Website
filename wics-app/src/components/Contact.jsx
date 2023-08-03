import { Container, Row, Col, Image } from "react-bootstrap";
import { profiles } from "../assets/portraits/portraits";

const Profile = ({ name, image }) => {
  return (
    <Col md={4}>
      <div className="d-flex flex-column justify-content-center align-items-center m-3">
        <Image
          src={require("../assets/portraits/" + image)}
          alt={name}
          className="mb-2"
          style={{ width: "175px", height: "175px", objectFit: "cover" }}
          roundedCircle
        />
        <div className="text-center">{name}</div>
      </div>
    </Col>
  )
}

const Contact = () => {
  return (
    <Container className="content-container">
      <h1 className="section-header">Coordinators</h1>
      <Row className="mb-4 justify-content-center">
        {profiles.map((profile) => (
          <Profile name={profile.name} image={profile.image} />
        ))}
      </Row>
      <Row className="my-3 justify-content-center">
        <div className="text-center">
          If you want to reach Brown WiCS, send over an email to us at{" "}
          <a
            href="mailto:wics@lists.cs.brown.edu"
            target="_blank"
            class="link-text" rel="noreferrer"
          >
            wics@lists.cs.brown.edu
          </a>
          !
        </div>
      </Row>
    </Container>
  );
};

export default Contact;