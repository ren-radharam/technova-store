import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent mb-4">
              TechNova
            </h2>

            <p className="text-white/60 leading-relaxed">
              Premium electronics and modern tech
              products crafted for creators,
              professionals, and enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <Link
                href="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="hover:text-white transition"
              >
                Products
              </Link>

              <Link
                href="/cart"
                className="hover:text-white transition"
              >
                Cart
              </Link>

              <Link
                href="/about"
                className="hover:text-white transition"
              >
                About
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-white/60">
              <p>support@technova.com</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/40 text-sm">
          © 2026 TechNova Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}