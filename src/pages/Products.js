import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Product from './Product';

class Products extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Product />
        <Footer />
      </>
    );
  }
}

export default Products;
