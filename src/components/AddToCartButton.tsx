"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
  setLoading(true);

  addToCart(product);

  setTimeout(() => {
    setLoading(false);
  }, 600);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="bg-white text-black px-6 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-white/10"
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}