
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCategory.css";

const categories = [
  {
    title: "Beutycosmotics",
    image: "./productImages/dassash1.png",
    category: "beauty",
    descreption:"this is the  best  cosmotics  shope  please  buy  from  us",
  },
  {
    title: "Drinkin gjuce",
    image: "./productImages/dassash2.png",
    category: "juice",
        descreption:"this is the  best  drinking shope  please  buy  from  us",
  },
  {
    title: "earpads list",
    image: "./productImages/dassash3.png",
    category: "earpads",
        descreption:"this is the  best  earpad   shope  please  buy  from  us",
  },
  {
    title: "Best shose",
    image: "./productImages/dassash4.png",
    category: "shoes",
        descreption:"this is the  best shose shope  please  buy  from  us",
  },
  {
    title: "Computers",
    image: "./productImages/dassash6.png",
    category: "computers",
        descreption:"this is the  best   compeuter   shope  please  buy  from  us",
  },
];

function ProductCategories() {
  return (
    <section className="categories">
      {categories.map((category) => (
        <div className="category-card" key={category.title}>
          <Link to={`/category/${category.category}`}>
            <img src={category.image} alt={category.title} />
          </Link>

          <h3>{category.title}</h3>
 <h3>{category.descreption}</h3>
          <Link to={`/category/${category.category}`}>
            Shop now
          </Link>
        </div>
      ))}
    </section>
  );
}

export default ProductCategories;
