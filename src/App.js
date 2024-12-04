import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutForm from "./components/AboutForm";
import AdditionalDetails from "./components/AdditionalDetails";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [products, setProducts] = useState([]); // Store all products
  const [currentProduct, setCurrentProduct] = useState({}); // Temporary product being created

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]); // Add the new product to the list
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AboutForm setProduct={setCurrentProduct} />}
        />
        <Route
          path="/additional"
          element={
            <AdditionalDetails
              product={currentProduct}
              setProduct={(updatedProduct) => {
                setCurrentProduct(updatedProduct);
                addProduct(updatedProduct);
              }}
            />
          }
        />
        <Route
          path="/products"
          element={<ProductListing products={products} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
