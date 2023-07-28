import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../styles/images/image1.jpg";
import Image2 from "../styles/images/image2.jpg";
import Image3 from "../styles/images/image3.jpg";
import Image4 from "../styles/images/image4.jpg";
import Image5 from "../styles/images/image5.jpg";

export const Contact = () => {
  return (
    <section className="contact" id="home">
      <div>
        {/* className="content-container" */}
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="text-center">
                <h1>Coordinators</h1>
              </div>
            </Col>
          </Row>
          <Row className="my-4 justify-content-center">
            <Col md={4}>
              <div
                style={{
                  width: "175px",
                  height: "175px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <img
                  src={Image1}
                  alt="Image1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="text-center">Eliza Berman '23</div>
            </Col>
            <Col md={4}>
              <div
                style={{
                  width: "175px",
                  height: "175px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <img
                  src={Image2}
                  alt="Image2"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="text-center">Meera Keerup '23</div>
            </Col>
            <Col md={4}>
              <div
                style={{
                  width: "175px",
                  height: "175px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <img
                  src={Image3}
                  alt="Image3"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="text-center">Priyanka Solanky '23</div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={4}>
              <div>
                <div
                  style={{
                    width: "175px",
                    height: "175px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <img
                    src={Image4}
                    alt="Image4"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="text-center">Natalee Amhaz '24</div>
              </div>
            </Col>
            <Col md={4}>
              <div
                style={{
                  width: "175px",
                  height: "175px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <img
                  src={Image5}
                  alt="Image5"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="text-center">Emily Ye '24</div>
            </Col>
          </Row>
          <Row className="my-3 justify-content-center">
            <div className="text-center">
              If you want to reach Brown WiCS, send over an email to us at{" "}
              <a
                href="mailto:wics@lists.cs.brown.edu"
                target="_blank"
                class="link-text"
              >
                wics@lists.cs.brown.edu
              </a>
              !
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};
