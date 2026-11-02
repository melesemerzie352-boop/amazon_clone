import React from "react";
import Product from "./Product";
import products from "./ProductsData";
import "./Allproducts.css";

function Allproducts() {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          description={true}
        />
      ))}
    </div>
  );
}

export default Allproducts;