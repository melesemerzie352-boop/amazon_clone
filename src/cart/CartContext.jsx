
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

// 1. Create the context
const CartContext = createContext();

// 2. Initial cart state
const initialState = {
  cartItems: JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  ),
};

// 3. Reducer function
function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_TO_CART": {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}

// 4. Create the Provider
export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  // 5. Save cart state to localStorage
  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(state.cartItems)
    );
  }, [state.cartItems]);

  // 6. Calculate total quantity
  const cartCount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // 7. Calculate total price
  const cartTotal = state.cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  // 8. Available cart actions
  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 9. Custom hook
export function useCart() {
  return useContext(CartContext);
}
