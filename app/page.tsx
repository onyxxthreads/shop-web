"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "233543312793";

    const message = `Hello Onyxx Threads! I would like to place an order:

• Item: Ewia Kete Hat (GHC 350)
• Name: ${formData.name}
• Phone: ${formData.phone}
• Customization / Notes: ${formData.notes || "None"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Header / Brand Nav */}
      <header className="border-b border-zinc-800 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-widest text-amber-400">
          ONYXX THREADS
        </h1>
        <nav className="space-x-6 text-sm text-zinc-400">
          <a href="#featured" className="hover:text-amber-400 transition">
            New Arrivals
          </a>
          <a href="#featured" className="hover:text-amber-400 transition">
            Collections
          </a>
          <a href="#about" className="hover:text-amber-400 transition">
            About
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-20 px-4">
        <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
          Handcrafted Collection
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight text-zinc-50">
          Elevated Wearable Art & Bespoke Tapestry
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
          Discover tactile tapestry crochet portraiture, bespoke menswear, and handcrafted artisan pieces crafted with meticulous detail.
        </p>
      </section>

      {/* Product Showcase */}
      <section id="featured" className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold mb-8 text-zinc-200">
          Featured Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-amber-400/50 transition">
            <div className="relative h-80 w-full bg-zinc-800">
              <Image
                src="/Ewia Kete-Hat.jpg"
                alt="Ewia Kete Hat"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold text-zinc-100">
                    Ewia Kete Hat
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Bespoke Hand-Crocheted Headwear
                  </p>
                </div>
                <span className="text-amber-400 font-semibold">GHC 350</span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 w-full py-3 bg-amber-400 text-zinc-950 font-semibold rounded-lg hover:bg-amber-300 transition"
              >
                Inquire / Order Custom
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 text-xl"
            >
              ✕
            </button>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Custom Order / Inquiry
            </span>
            <h3 className="text-2xl font-bold text-zinc-100 mt-1">
              Ewia Kete Hat
            </h3>
            <p className="text-amber-400 font-semibold text-sm mb-6">GHC 350</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kwesi Mensah"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Phone Number / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+233 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Customization / Sizing Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify size, color preference, or custom order requests..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-400 text-zinc-950 font-bold rounded-lg hover:bg-amber-300 transition"
              >
                Send Order Request via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}