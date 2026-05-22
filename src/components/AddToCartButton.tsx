"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

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
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);

    router.push("/cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-white text-black px-6 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-white/10"
    >
      Add To Cart
    </button>
  );
}