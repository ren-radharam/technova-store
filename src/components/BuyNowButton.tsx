"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

interface BuyNowButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export default function BuyNowButton({
  product,
}: BuyNowButtonProps) {
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
  setLoading(true);

  addToCart(product);

  setTimeout(() => {
    router.push("/cart");
  }, 600);
  };

  return (
    <button
      onClick={handleBuyNow}
      disabled={loading}
      className="border border-white/10 px-6 py-4 rounded-full hover:bg-white/10 transition"
    >
      {loading ? "Processing..." : "Buy Now"}
    </button>
  );
}