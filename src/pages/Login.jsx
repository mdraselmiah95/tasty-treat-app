import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const password = loginNameRef.current.value;
    const email = loginPasswordRef.current.value;
    const loginInfo = { email, password };
    console.log(loginInfo);
  };
  //sign in with Google

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />

                  <div className="form__group">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      ref={loginPasswordRef}
                    />
                  </div>
                  <button type="submit" className="addTOCart__btn">
                    Login
                  </button>
                </div>
              </form>

              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
            <Col
              lg="12"
              md="12"
              sm="12"
              className="m-auto d-flex justify-content-center mt-3"
            >
              <button
                onClick={handleGoogleSignIn}
                type="submit"
                className="addTOCart__btn fw-bolder d-flex align-items-center"
              >
                <i className="ri-google-fill me-2"></i>
                Google
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
