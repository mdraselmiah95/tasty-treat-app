import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Carts = () => {
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart__item-list">
          <CartItem />
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
