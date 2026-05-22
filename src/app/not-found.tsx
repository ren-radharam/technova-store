import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-6xl font-bold mb-4">
        404
      </h1>

      <p className="text-white/60 mb-8">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-white text-black px-6 py-3 rounded-full font-medium"
      >
        Go Home
      </Link>
    </main>
  );
}