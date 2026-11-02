
import React from "react";
import { useCart } from "../../cart/CartContext";
import "./Cart.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Cart() {

  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  // Check whether the cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Amazon Cart is empty</h2>
        <p>Add some products to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <h1>Shopping Cart</h1>

      <div className="cart-products">

        {cartItems.map((item) => (

          <div className="cart-item" key={item.id}>

            <img
              src={item.image}
              alt={item.title}
              width="120"
            />

            <div className="cart-info">

              <h3>{item.title}</h3>

              <p>${item.price}</p>
<p className="cart-description">
  {item.description}
</p>
              <p>Quantity: {item.quantity}</p>

              <div className="quantity-controls">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
             <ArrowBackIosIcon/>   ይቀንሱ 
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  የጨምሩ <ArrowForwardIosIcon/>
                </button>

              </div>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>

            <h3>
              ${(item.price * item.quantity).toFixed(2)}
            </h3>

          </div>

        ))}

      </div>

      <div className="cart-summary">

        <h2>
          Subtotal: ${cartTotal.toFixed(2)}
        </h2>

        <button onClick={clearCart}>
          Clear Cart
        </button>

        <button>
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;

