import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import AddToCartButton from "@/components/AddToCartButton";
import Navbar from "@/components/Navbar";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
    <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-6">
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={780}
              className="w-full rounded-3xl object-cover max-h-[520px]"
            />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h1 className="text-4xl font-bold mb-4">
                {product?.name}
              </h1>
              <p className="text-white/70 leading-relaxed">
                {product?.description}
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-purple-400 mb-4 font-medium tracking-[0.3em] uppercase text-sm">
                Category
            </p>

            <h2 className="text-3xl font-bold mb-6">
                {product.category}
            </h2>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                Premium Quality
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                Fast Delivery
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                Trending Product
                </span>
            </div>

            {/* Price Card */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                <span className="text-white/60">
                    Price
                </span>

                <span className="text-4xl font-bold">
                    ₹{product.price.toLocaleString()}
                </span>
                </div>

                <div className="flex items-center justify-between text-sm text-white/60">
                <span>Availability</span>

                <span className="text-green-400">
                    In Stock
                </span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mb-8">
                <AddToCartButton
                    product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                    }}
                />

                <button className="border border-white/10 px-6 py-4 rounded-full hover:bg-white/10 transition">
                Buy Now
                </button>
            </div>

            {/* Product ID */}
            <div className="rounded-2xl border border-white/10 bg-black/50 p-5 text-white/60">
                Product ID:
                <span className="font-semibold text-white ml-2">
                {product.id}
                </span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
