export default function Hero() {
    return (
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <p className="text-purple-400 mb-4 font-medium">
            Next Generation Electronics
          </p>
  
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discover Premium
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Tech Products
            </span>
          </h1>
  
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Explore cutting-edge gadgets, premium accessories, and modern
            electronics crafted for the future.
          </p>
  
          <div className="flex items-center justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Shop Now
            </button>
  
            <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition">
              Explore Products
            </button>
          </div>
        </div>
      </section>
    );
  }