import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/30">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            TechNova
          </h1>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/about">About</Link>

          <Link
            href="/login"
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:opacity-80 transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}