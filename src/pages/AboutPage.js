import React, { Component } from 'react';
import { Footer, Navbar } from "../components";

class AboutPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container my-3 py-3">
          <h1 className="text-center">About Us</h1>
          <hr />
          <p className="lead text-center">
          Welcome to React Ecommerce, your one-stop destination for quality products at unbeatable prices. We’re passionate about making shopping easy, enjoyable, and affordable. Whether you're hunting for the latest fashion trends, tech gadgets, or home essentials — we’ve got you covered.

Our mission is simple: deliver great products, fast shipping, and top-notch customer service. Every day, we’re working to bring you the best deals and a seamless online shopping experience.

Thank you for choosing us — happy shopping! 🛍️
          </p>

          <h2 className="text-center py-4">Our Products</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Mens's Clothing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Women's Clothing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Jewelery</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Electronics</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
