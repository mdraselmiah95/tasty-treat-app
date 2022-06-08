import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

//Style CSS
import "../styles/cart-page.css";

const Cart = () => {
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <Tr />
                  {/* {cartItems.map((item) => (
                    <Tr item={item} key={item.id} />
                  ))} */}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  // const { id, image01, title, price, quantity } = props.item;
  // const dispatch = useDispatch();

  // const deleteItem = () => {
  //   dispatch(cartActions.deleteItem(id));
  // };
  return (
    <tr>
      <td className="text-center cart__img-box">
        {/* <img src={image01} alt="cart-img" /> */}
        img
      </td>
      <td className="text-center">tt</td>
      <td className="text-center">$p</td>
      <td className="text-center">px</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
