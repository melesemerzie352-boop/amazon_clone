import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Header from "./components/header/Header";
// import Banner from "./components/banner/Banner";
// import ProductCategory from "./components/productCategory/ProductCategory";
import Allproducts from "./components/product/Allproducts";
import ProductDetails from "./components/product/ProductDetails";
import CategoryProducts from "./components/product/CatagoryProduct";
// import AppRoutes from "./components/Roter";
import Login from "./components/header/Login";
import Cart from "./components/header/Cart";
import Home from "./components/header/Home";
import Order from "./components/header/Order";
import { CartProvider } from "./cart/CartContext";
function Appp() {
  return (  

    <div>
    <BrowserRouter>
     {/* <Header/>
     <Banner/>
      <ProductCategory/> */}
         <CartProvider>
      <Routes>
        
         <Route element={<Layout />}> 
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Allproducts />} />
    <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route
  path="/category/:categoryName"
  element={<CategoryProducts />}
/>      
<Route path="/Home" element={<Home/>} />
<Route path="/Order" element={<Order/>} />

<Route path="/login" element={<Login />} />
 <Route path="/Cart" element={<Cart />} />
 
          <Route
  path="/category/:categoryName"
  element={<CategoryProducts />}
/>
  {/* <AppRoutes/> */}
</Route>

  
      </Routes>
    </CartProvider>
    </BrowserRouter>
  
    </div>

  );
}

export default Appp;