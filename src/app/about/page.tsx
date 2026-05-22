import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | TechNova Store",
  description:
    "Learn more about TechNova Store and get in touch.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">

        <div className="mb-20">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Us
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Building Modern Tech Experiences
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            TechNova Store is a modern ecommerce platform
            focused on premium gadgets, accessories,
            and cutting-edge electronics designed for
            creators, professionals, and tech enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">

          <div className="border border-white/10 bg-white/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              Premium Products
            </h2>

            <p className="text-white/60">
              Carefully curated technology products
              with modern aesthetics and performance.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              Fast Delivery
            </h2>

            <p className="text-white/60">
              Reliable shipping experience with
              customer-first service quality.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              Secure Shopping
            </h2>

            <p className="text-white/60">
              Designed with performance, usability,
              and seamless shopping experiences.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border border-white/10 bg-white/5 rounded-3xl p-10">

          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Get In Touch
          </h2>

          <div className="space-y-4 text-lg text-white/70">
            <p>Email: support@technova.com</p>
            <p>Location: Hyderabad, India</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}