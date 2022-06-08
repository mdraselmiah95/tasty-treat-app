import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Login = () => {
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
    </Helmet>
  );
};

export default Login;
