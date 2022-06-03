import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6"></Col>
          <Col lg="3" md="4" sm="6"></Col>
          <Col lg="3" md="4" sm="6"></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
