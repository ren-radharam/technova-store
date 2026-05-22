import products from "@/data/products.json";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <p className="text-purple-400 font-medium mb-3">
          Featured Collection
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Trending Products
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}