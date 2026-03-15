
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "./CartContext.js";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
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

  // Total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product._id === product._id
      );

      if (existingItem) {
        // Increase count
        return prevCart.map((item) =>
          item.product._id === product._id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }

      // Add new item
      return [...prevCart, { product, count: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product._id === productId
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
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