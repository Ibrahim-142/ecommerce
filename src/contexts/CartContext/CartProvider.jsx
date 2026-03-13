import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "./CartContext.js";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart from backend
  const fetchCart = async () => {
    try {
      const response = await axios.get("/api/cart");
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);

  // Add item to cart
// CartProvider.js
const addToCart = (product, color, size) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (item) =>
        item.product._id === product._id &&
        item.color === color &&
        item.size === size
    );

    if (existingItem) {
      // Increase count of existing item
      return prevCart.map((item) =>
        item.product._id === product._id &&
        item.color === color &&
        item.size === size
          ? { ...item, count: item.count + 1 }
          : item
      );
    }
    console.log("Adding new item to cart:", { product, color, size });
    // Add new item if no match
    return [
      ...prevCart,
      {
        product,
        count: 1,
        color,
        size
      }
    ];
  });
};
  // Remove item from cart
const removeFromCart = (productId, color, size) => {
  setCart((prevCart) =>
    prevCart.filter(
      (item) =>
        !(
          item.product._id === productId &&
          item.color === color &&
          item.size === size
        )
    )
  );
};

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalItems,
        loading,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};