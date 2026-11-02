import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ id, title, price, rating, image,}) {
  return (
    <div className="product-card">
      <Link
        to={`/product/${id}` }
        className="product-link"
      >
        <img src={image} alt={title} />
         </Link>
         <div className="infurmation">
        <h3>{title}</h3>
     
 <p> {price} ETB</p>
      <p>Price: {price} ETB</p>
      <p>Rating: ⭐ {rating}</p>
        
      <button>አሁን ይግዙ</button>
      </div>
    </div>
  );
}

export default Product;