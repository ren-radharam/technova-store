"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function CartPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
        router.push("/login");
    }
  }, [user, router]);

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (!user) return null;
  
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl font-bold mb-12">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
        <div className="border border-white/10 bg-white/5 rounded-3xl p-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
            Your Cart is Empty
            </h2>

            <p className="text-white/60 mb-8">
            Looks like you haven’t added anything yet.
            </p>

            <button
            onClick={() => router.push("/products")}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
            Continue Shopping
            </button>
        </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 bg-white/5 rounded-3xl p-6"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded-2xl object-cover"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-white/60">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
                  >
                    -
                  </button>

                  <span className="text-xl">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
                  >
                    +
                  </button>
                </div>

                <button
                    onClick={() =>
                        removeFromCart(item.id)
                    }
                    className="text-red-400 hover:text-red-300 transition"
                    >
                    <Trash2 size={22} />
                </button>
              </div>
            ))}

            <div className="mt-10 border border-white/10 rounded-3xl bg-white/5 p-8">
              <div className="flex items-center justify-between text-3xl font-bold">
                <span>Total</span>

                <span>
                  ₹{totalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}