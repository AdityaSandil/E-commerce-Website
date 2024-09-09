import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/main";
import Product from "../components/Products";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main />
        <Product />
        <Footer />
      </>
    );
  }
}

export default Home;
