import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <Link to="/">
                <img src={logo} alt="logo" />
                <h5>Tasty Treat</h5>
              </Link>
              <p>With the motto of “Food You’ll Love To Share”.</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Dhaka, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +8801845515895</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span> dev.mdraselmia@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              &#169; Copyright - 2022, website made by Md Rasel mia. All Rights
              Reserved.
            </p>
          </Col>
          {/* social link */}
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-md-end justify-content-center">
              {/* <p className="m-0">Follow: </p> */}
              <span>
                <a href="https://www.facebook.com/mdraselmiah15" target="blank">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                <a href="https://github.com/mdraselmiah95 " target="blank">
                  <i className="ri-github-line"></i>
                </a>
              </span>

              <span>
                <a href=" https://www.youtube.com/" target="blank">
                  <i className="ri-youtube-line"></i>
                </a>
              </span>

              <span>
                <a
                  href="https://www.linkedin.com/in/mdraselmiah15/"
                  target="blank"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
