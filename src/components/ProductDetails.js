import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <div className="container mt-4">Product not found!</div>;
  }

  console.log("Product Images: ", product.images); // Debugging to check the images

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.images[0] ? product.images[0] : "https://via.placeholder.com/150"}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>${product.price}</h4>

          <h5 className="mt-4">Benefits</h5>
          <ul>
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <h5 className="mt-4">Additional Details</h5>
          <table className="table">
            <tbody>
              {product.details.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.attribute}</td>
                  <td>{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary mt-3">Buy for ${product.price}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
