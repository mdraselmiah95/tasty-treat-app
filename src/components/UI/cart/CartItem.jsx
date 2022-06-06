import React from "react";
import { ListGroup } from "reactstrap";

import image from "../../../assets/images/product_01.1.jpg";
//Style CSS
import "../../../styles/cart-item.css";

const CartItem = () => {
  return (
    <ListGroup className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image} alt="product-img" />
        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">Burger</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {/* {quantity}x <span>${totalPrice}</span> */}
              24
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn">
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">2</span>
              <span className="decrease__btn">
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn">
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroup>
  );
};

export default CartItem;
