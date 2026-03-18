
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
const addToCart = async (product) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (item) => item.product._id === product._id
    );
    if (existingItem) {
      return prevCart.map((item) =>
        item.product._id === product._id
          ? { ...item, count: item.count + 1 }
          : item
      );
    }
    return [...prevCart, { product, count: 1 }];
  });
  try {
    await axios.post("/api/cart/addtocart", {
      product: product._id,
      count: 1,
    });
  } catch (error) {
    console.error("Add failed, reverting...", error);
    fetchCart();
  }
};

const removeFromCart = async (productId) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.product._id === productId
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0)
  );
  try {
    await axios.post("/api/cart/removefromcart", {
      productId,
    });
  } catch (error) {
    console.error("Remove failed, reverting...", error);
    fetchCart();
  }
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