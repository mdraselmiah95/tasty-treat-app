import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";

//images
import heroImg from "../assets/images/hero.png";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
//CSS Style
import "../styles/hero-section.css";
import "../styles/home.css";

//UI Category
import Category from "../components/UI/category/Category.jsx";

//Popular Food resources

//Fake Api
import products from "../assets/fake-data/products.js";

//button images

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard";

//Fake Feature Data
const featureData = [
  {
    id: 1,
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Super fast food delivery to your home or office ✓ Safe & easy payment options.",
  },

  {
    id: 2,
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Again, feel free to eat fattier cuts of chicken if you're not eating many carbs.",
  },
  {
    id: 3,
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "we work with more than 18,00+ friendly local couriers to offer an easy and affordable.",
  },
];

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  We are passionate about food and are always prompt to deliver
                  whenever the radar blips hungry.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* UI Category Section */}
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Tasty Treat is a 100% Halal online food ordering and delivery
                service
              </p>
              <p className="feature__text">
                launched in 2013 to deliver your cravings at your doorsteps.
              </p>
            </Col>

            {/* Feature and service */}

            {featureData.map((item) => (
              <Col lg="4" md="6" sm="6" key={item.id} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular Foods */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className="all__btn">All</button>

                <button className=" d-flex align-items-center gap-2">
                  <img src={foodCategoryImg01} alt="Burger" />
                  Burger
                </button>

                <button className=" d-flex align-items-center gap-2">
                  <img src={foodCategoryImg02} alt="Pizza" />
                  Pizza
                </button>

                <button className=" d-flex align-items-center gap-2">
                  <img src={foodCategoryImg03} alt="Bread" />
                  Bread
                </button>
              </div>
            </Col>

            {products.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
