export default function Hero() {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-20 overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
  
        <div className="relative max-w-5xl text-center z-10">
          <p className="text-purple-400 mb-4 font-medium tracking-wide uppercase text-sm">
            Next Generation Electronics
          </p>
  
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Discover Premium
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Tech Products
            </span>
          </h1>
  
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore cutting-edge gadgets, premium accessories, and modern
            electronics crafted for the future.
          </p>
  
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-white/10">
              Shop Now
            </button>
  
            <button className="border border-white/20 px-7 py-3 rounded-full hover:bg-white/10 transition duration-300">
              Explore Products
            </button>
          </div>
        </div>
      </section>
    );
  }