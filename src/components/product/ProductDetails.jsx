import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./ProductsData";
import "./ProductDetails.css";
import { useCart } from "../../cart/CartContext";
function ProductDetails( description) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.title}
        className="details-image"
      />

      <div className="details-info">
        <h1>{product.title}</h1>
         <p>{ product.description}</p>
        <p>Rating: ⭐ {product.rating}</p>
        <h2>Price: {product.price} ETB</h2>

        <button onClick={() => addToCart(product)}>
  Add to Cart
</button>

        <p>
          <Link to="/">Back to products</Link>
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;