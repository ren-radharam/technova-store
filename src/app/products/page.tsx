"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import products from "@/data/products.json";

export default function ProductsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
  if (!user) {
    router.push("/login");
  }
  }, [user, router]);

  if (!user) return null;

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-purple-400 font-medium mb-3">
            Product Collection
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Explore Products
          </h1>

          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
              className="px-5 py-3 rounded-full bg-white/5 border border-white/10 outline-none"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-black"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center pt-32 pb-20 text-white/60">
            No products found.
          </div>
        )}
      </section>
    </main>
  );
}