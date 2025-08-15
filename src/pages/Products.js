import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="mb-4">All Products</h2>
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map(product => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    height="300px"
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{product.title.substring(0, 30)}...</h5>
                    <p className="card-text">${product.price}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-dark mt-2">
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
