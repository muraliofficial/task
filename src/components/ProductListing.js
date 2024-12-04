import React from "react";
import { Link } from "react-router-dom";

const ProductListing = ({ products }) => (
  <div className="container mt-4">
    <h2>Digital Products</h2>
    <div className="row">
      {products.map((product, index) => (
        <div key={index} className="col-md-4 mb-3">
          <div className="card">
            {/* Check if product image exists */}
            <img
              src={product.images[0] ? product.images[0] : "https://via.placeholder.com/150"}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <Link to={`/product/${index}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductListing;
