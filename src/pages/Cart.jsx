import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Cart = () => {
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
    </Helmet>
  );
};

export default Cart;
