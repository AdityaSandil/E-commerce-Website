import React, { Component } from "react";
import { connect } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: [],
      loading: false,
    };
    this.componentMounted = true;
  }

  componentDidMount() {
    this.getProducts();
  }

  componentWillUnmount() {
    this.componentMounted = false;
  }

  getProducts = async () => {
    this.setState({ loading: true });
    const response = await fetch("https://fakestoreapi.com/products/");
    if (this.componentMounted) {
      const data = await response.json();
      this.setState({ data: data, filter: data, loading: false });
    }
  };

  addProduct = (product) => {
    this.props.addCart(product);
  };

  filterProduct = (cat) => {
    const updatedList = this.state.data.filter((item) => item.category === cat);
    this.setState({ filter: updatedList });
  };

  Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => this.setState({ filter: this.state.data })}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => this.filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => this.filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => this.filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => this.filterProduct("electronics")}>Electronics</button>
        </div>

        {this.state.filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => this.addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <div className="container my-3 py-3">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 text-center">Latest Products</h2>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <this.Loading /> : <this.ShowProducts />}
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (product) => dispatch(addCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(Products);
