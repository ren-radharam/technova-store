import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
            TechNova
          </h1>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-purple-400 transition">
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-purple-400 transition"
          >
            Products
          </Link>

          <Link href="/cart" className="hover:text-purple-400 transition">
            Cart
          </Link>

          <Link href="/about" className="hover:text-purple-400 transition">
            About
          </Link>

          <Link
            href="/login"
            className="bg-white text-black px-5 py-2 rounded-full hover:scale-105 transition duration-300"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}