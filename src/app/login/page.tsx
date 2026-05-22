"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [name, setName] = useState("");

  const router = useRouter();

  const {
    login,
    continueAsGuest,
  } = useAuth();

  const handleLogin = () => {
    if (!name.trim()) return;

    login(name);

    router.push("/");
  };

  const handleGuest = () => {
    continueAsGuest();

    router.push("/");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-md mx-auto px-6 pt-40">
        <div className="border border-white/10 bg-white/5 rounded-3xl p-8">

          <h1 className="text-4xl font-bold mb-3">
            Welcome Back
          </h1>

          <p className="text-white/60 mb-8">
            Login to continue shopping.
          </p>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none mb-5"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-white text-black py-4 rounded-2xl font-semibold mb-4 hover:scale-[1.02] transition"
          >
            Login
          </button>

          <button
            onClick={handleGuest}
            className="w-full border border-white/10 py-4 rounded-2xl hover:bg-white/10 transition"
          >
            Continue as Guest
          </button>
        </div>
      </section>
    </main>
  );
}