"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
            TechNova
          </h1>
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium">

          <Link href="/" className={
            pathname === "/"
              ? "text-purple-400"
              : "text-white"
          }>Home</Link>

        {user && (
          <>
            <Link
              href="/products"
              className={
                pathname === "/products"
                  ? "text-purple-400"
                  : "text-white"
              }
            >
              Products
            </Link>

              <Link href="/cart" className={
                pathname === "/cart"
                  ? "text-purple-400"
                  : "text-white"
              }>
                Cart {cartCount > 0 && `(${cartCount})`}
              </Link>
          </>
        )}

        <Link href="/about" className={
          pathname === "/about"
            ? "text-purple-400"
            : "text-white"
        }>
          About
        </Link>

        {!user ? (
          <Link
            href="/login"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-3">

            <span className="bg-white text-black px-5 py-3 rounded-full font-semibold">
              Hi, {user.name}
            </span>

            <button
              onClick={logout}
              className="border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      </nav>
    </header>
  );
}