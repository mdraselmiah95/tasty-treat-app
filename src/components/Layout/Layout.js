import React from "react";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Carts from "../UI/cart/Carts";

const Layout = () => {
  return (
    <div>
      <Header />
      <Carts />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
