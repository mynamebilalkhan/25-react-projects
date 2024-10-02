import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#2b3035" }}
    >
      <Container>
        <section className="">
          <Row className="text-center d-flex justify-content-center pt-5">
            <Col md="2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/accordian" className="text-white">
                  Accordian
                </Link>
              </h6>
            </Col>

            <Col md="2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/load-more" className="text-white">
                  Load More
                </Link>
              </h6>
            </Col>

            <Col md="2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/random-color" className="text-white">
                  Random Color
                </Link>
              </h6>
            </Col>

            <Col md="2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/qr-code-generator" className="text-white ">
                  QR Code Generator
                </Link>
              </h6>
            </Col>

            <Col md="2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/light-dark-mode" className="text-white">
                  Theme Switch
                </Link>
              </h6>
            </Col>
          </Row>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                This project aims to serve as a learning tool and a reference
                for building diverse React projects. Feel free to explore,
                modify, and expand upon the projects within this application!
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-5">
          <Link to="/" className="text-white me-4">
            <FaFacebookF></FaFacebookF>
          </Link>
          <Link to="#" className="text-white me-4">
            <FaTwitter></FaTwitter>
          </Link>
          <Link to="#" className="text-white me-4">
            <FaGoogle></FaGoogle>
          </Link>
          <Link to="#" className="text-white me-4">
            <FaInstagram></FaInstagram>
          </Link>
          <Link to="#" className="text-white me-4">
            <FaLinkedin></FaLinkedin>
          </Link>
          <Link to="#" className="text-white me-4">
            <FaGithub></FaGithub>
          </Link>
        </section>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        ©2024 Copyrights. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
