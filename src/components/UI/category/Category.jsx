import React from "react";
import { Container, Row, Col } from "reactstrap";

//Category Images
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

const categoryData = [
  {
    display: "Fast Food",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },

  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },

  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return <div>Category</div>;
};

export default Category;
