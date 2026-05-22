"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];

  addToCart: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;
}

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<
    CartItem[]
  >([]);
  const { user } = useAuth();

  // Dynamic cart key
  const cartKey = user?.name
    ? `cart-${user.name}`
    : "cart-guest";

  // Load cart from localStorage
  useEffect(() => {
    try {
      const storedCart =
        localStorage.getItem(cartKey);

      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);

        queueMicrotask(() => {
          if (Array.isArray(parsedCart)) {
            setCartItems(parsedCart);
          } else {
            setCartItems([]);
          }
        });
      } else {
        queueMicrotask(() => {
          setCartItems([]);
        });
      }
    } catch (error) {
      console.error(
        "Failed to load cart:",
        error
      );
      queueMicrotask(() => {
        setCartItems([]);
      });
    }
  }, [cartKey]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(
      cartKey,
      JSON.stringify(cartItems)
    );
  }, [cartItems, cartKey]);

  const addToCart = (
    item: Omit<CartItem, "quantity">
  ) => {
    let message = "Added to cart";

    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) =>
          cartItem.id === item.id
      );

      if (existingItem) {
        message = "Cart updated";
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...prev,
        { ...item, quantity: 1 },
      ];
    });

    toast.dismiss();
    toast.success(message);

  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

    toast.dismiss();
    toast.success("Removed from cart");
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                item.quantity - 1,
                1
              ),
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}