
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./ProductsData";
import Product from "./Product";
import "./Allproducts.css";

function CategoryProducts() {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) =>
      product.category?.toLowerCase() ===
      categoryName.toLowerCase()
  );

  return (
    <div>
      <h2>Explore {categoryName}</h2>

      <Link to="/">Back to Home</Link>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))
        ) : (
          <p>
            No products found in this category yet.
            Add a category property to your products
            in ProductsData.jsx.
          </p>
        )}
      </div>
    </div>
  );
}

export default CategoryProducts;
