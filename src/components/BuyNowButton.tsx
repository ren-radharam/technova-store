"use client";

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
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
    addToCart(product);

    router.push("/cart");
  };

  return (
    <button
      onClick={handleBuyNow}
      className="border border-white/10 px-6 py-4 rounded-full hover:bg-white/10 transition"
    >
      Buy Now
    </button>
  );
}