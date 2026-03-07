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

  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);

 
  return (
    <CartContext.Provider value={{ cart, setCart, totalItems, loading}}>
      {children}
    </CartContext.Provider>
  );
};