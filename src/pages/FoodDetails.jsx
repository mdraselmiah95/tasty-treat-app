import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import image from "../assets/images/product_01.1.jpg";

const FoodDetails = () => {
  return (
    <Helmet title="Product Details">
      <CommonSection title="product 01" />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  // onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={image} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  // onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={image} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  // onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={image} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={image} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">Pizza</h2>
                <p className="product__price">
                  Price: <span>$33</span>
                </p>
                <p className="category mb-5">
                  Category: <span>3</span>
                </p>

                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
