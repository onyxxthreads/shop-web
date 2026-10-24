"use client";

import React, { useState } from "react";

export default function OnyxxThreadsStorefront() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currency, setCurrency] = useState<"GHC" | "USD">("GHC");
  const [copied, setCopied] = useState(false);

  const contactEmail = "bars.barbells@gmail.com";
  const contactPhone = "+233543312793";

  // Currency Conversion Rate (GHC to USD)
  const convertPrice = (ghcAmount: number) => {
    if (ghcAmount === 0) return "INQUIRE";
    if (currency === "USD") {
      return `$${Math.round(ghcAmount / 15)}`;
    }
    return `GHC ${ghcAmount}`;
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Storefront Product Catalog
  const products = [
    // Tapestry Masterpieces Category
    {
      id: "nkrumah",
      title: "Hi3ny3l) ( Osagyefo Kwame Nkrumah )",
      category: "tapestry",
      priceGHC: 0,
      priceDisplay: "SOLD",
      status: "Sold (Private Collection)",
      materials: "Pure Milk Cotton Fiber",
      specs: "15,376 Stitches • 124x124 Grid",
      image: "/nkrumah.jpg",
      mediaType: "image",
      desc: "High-fidelity gridded tapestry portraiture probing historical memory, leadership, and Pan-African identity.",
    },
    {
      id: "dromo",
      title: "Dromo",
      category: "tapestry",
      priceGHC: 4500,
      priceDisplay: convertPrice(4500),
      status: "Available",
      materials: "Milk Cotton Yarn & Authentic Cowrie Shell Relics",
      specs: "9,720 Hand-Placed Stitches",
      image: "/dromo.jpg",
      mediaType: "image",
      desc: "9,720 hand-placed stitches anchored by an authentic cowrie shell artifact—exploring spiritual grace.",
    },
    {
      id: "72k-portrait",
      title: "Monolithic Portraiture No. 1",
      category: "tapestry",
      priceGHC: 0,
      priceDisplay: "INQUIRE",
      status: "Archival Masterpiece",
      materials: "Milk Cotton & Textured Bouclé Sand Background",
      specs: "72,600 Stitches • 242x300 Grid",
      image: "/monolithic.jpg",
      mediaType: "image",
      desc: "Monumental scale tapestry crochet study exploring raw tonal contrasts and structural yarn blending.",
    },
    {
      id: "nostalgia-series",
      title: "Childhood Nostalgia (3-Part Series)",
      category: "tapestry",
      priceGHC: 0,
      priceDisplay: "EXHIBITION",
      status: "In Progress",
      materials: "3D Physical Artifacts (Bentua Catapult, Tin-Can Telephone)",
      specs: "Multi-Panel Series",
      image: "/nostalgia.jpg",
      mediaType: "image",
      desc: "Nostalgic exploration of Ghanaian childhood memories integrating raw physical objects directly onto fine-art surfaces.",
    },

    // Hats Category
    {
      id: "ewia-kete-hat",
      title: "Ewia Kete Hat",
      category: "hats",
      priceGHC: 350,
      priceDisplay: convertPrice(350),
      status: "Available",
      materials: "Milk Cotton & Specialty Yarns",
      specs: "Custom Fit Headwear",
      image: "/ewia-kete-hat.jpg",
      mediaType: "image", // Static Photo Asset
      desc: "Handcrafted high-density tapestry crochet hat featuring precision gridded colorwork and tactile finish.",
    },
    {
      id: "trinity-hat",
      title: "Trinity Hat",
      category: "hats",
      priceGHC: 350,
      priceDisplay: convertPrice(350),
      status: "Pre-order",
      materials: "Milk Cotton & Specialty Yarns",
      specs: "360° Textured Motion Finish",
      image: "/trinity-hat.mp4",
      mediaType: "video", // MP4 Video Asset
      desc: "Handcrafted high-density tapestry crochet headwear engineered for structural silhouette and tactile colorwork detail.",
    },
  ];

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "dress", label: "Dress" },
    { id: "tops", label: "Shirts/Sweaters/Jackets/Cardigans" },
    { id: "hats", label: "Hats" },
    { id: "bottoms", label: "Shorts/Skirts/Pants" },
    { id: "tapestry", label: "Tapestry Masterpieces" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#080807] text-[#e8e6e1] font-sans antialiased selection:bg-[#c5a059] selection:text-black">
      {/* Top Announcement Bar */}
      <div className="bg-[#c5a059] text-black text-xs font-mono py-2 px-4 text-center font-bold tracking-widest uppercase">
        ⚡ Worldwide Express Delivery • Custom Commissions &amp; Ready-to-Wear Pieces
      </div>

      <div className="relative z-10">
        {/* Sticky Header */}
        <header className="border-b border-[#1f1e1a] bg-[#080807]/90 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
              <span className="text-xl font-black tracking-[0.2em] text-white uppercase font-mono">
                ONYXX THREADS
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <div className="flex border border-[#2a2720] bg-[#12110e] rounded-lg p-1 text-xs font-mono">
                <button
                  onClick={() => setCurrency("GHC")}
                  className={`px-3 py-1 rounded-md transition ${
                    currency === "GHC"
                      ? "bg-[#c5a059] text-black font-bold"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  GHC
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-3 py-1 rounded-md transition ${
                    currency === "USD"
                      ? "bg-[#c5a059] text-black font-bold"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  USD ($)
                </button>
              </div>

              <button
                onClick={handleCopyEmail}
                className="hidden sm:block px-5 py-2 bg-[#c5a059] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition"
              >
                {copied ? "Copied Email!" : "Commission"}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center space-y-6 border-b border-[#1f1e1a]">
          <span className="text-xs font-mono text-[#c5a059] uppercase tracking-[0.25em] block">
            /// OFFICIAL ONLINE STOREFRONT
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            Handcrafted Masterpieces &amp; Wearable Art
          </h1>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            High-fidelity tapestry crochet, gridded portraiture, and bespoke garments engineered in Accra, Ghana.
          </p>
        </section>

        {/* Category Navigation Filter Tabs */}
        <section className="max-w-7xl mx-auto px-6 pt-12">
          <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-[#1f1e1a] pb-8 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-full border transition uppercase tracking-wider ${
                  activeCategory === cat.id
                    ? "bg-[#c5a059] text-black border-[#c5a059] font-bold shadow-lg shadow-[#c5a059]/10"
                    : "bg-[#12110e] text-stone-400 border-[#2a2720] hover:border-[#c5a059] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Catalog Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 space-y-4 font-mono">
              <p className="text-stone-500 text-sm uppercase tracking-widest">
                /// NO PIECES CATALOGED IN THIS CATEGORY YET
              </p>
              <p className="text-stone-400 text-xs">
                Custom orders available upon request. Direct message to commission a custom garment or piece.
              </p>
              <a
                href="https://wa.me/233543312793?text=Hello%20Onyxx%20Threads,%20I'd%20like%20to%20commission%20a%20custom%20piece."
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition"
              >
                Request Custom Order via WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const whatsappMessage = encodeURIComponent(
                  `Hello Onyxx Threads, I'd like to order/inquire about "${product.title}".`
                );

                return (
                  <div
                    key={product.id}
                    className="border border-[#1f1e1a] bg-[#10100f] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#c5a059]/50 transition duration-300 group shadow-xl"
                  >
                    <div>
                      {/* Media Container */}
                      <div className="aspect-[4/3] w-full bg-[#070707] border-b border-[#1f1e1a] relative flex items-center justify-center overflow-hidden">
                        {product.mediaType === "video" ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          >
                            <source src={product.image} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            onError={(e) => {
                              e.currentTarget.style.opacity = "0.3";
                            }}
                          />
                        )}

                        {/* Status Tag */}
                        <div className="absolute top-4 left-4 z-10">
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold ${
                              product.status.includes("Sold")
                                ? "bg-stone-900 text-stone-500 border border-stone-800"
                                : "bg-[#c5a059] text-black"
                            }`}
                          >
                            {product.status}
                          </span>
                        </div>

                        {/* Specs Badge */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 font-mono text-[10px]">
                          <span className="bg-[#070707]/90 text-stone-300 border border-[#2a2720] px-3 py-1 rounded-lg block truncate backdrop-blur-md">
                            {product.specs}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-6 space-y-3">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                            {product.title}
                          </h3>
                          <span className="text-base font-mono font-bold text-[#c5a059] shrink-0">
                            {product.priceDisplay}
                          </span>
                        </div>

                        <p className="text-stone-300 text-xs font-light leading-relaxed">
                          {product.desc}
                        </p>

                        <div className="pt-2 text-[11px] font-mono text-stone-400">
                          <span className="text-stone-500">Materials: </span>
                          {product.materials}
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Action */}
                    <div className="p-6 pt-0 space-y-3">
                      <a
                        href={`https://wa.me/233543312793?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full py-3 bg-[#c5a059] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl text-center hover:bg-white transition"
                      >
                        Order / Inquire via WhatsApp &rarr;
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Philosophy Statement */}
        <section className="max-w-4xl mx-auto px-6 py-24 border-t border-[#1f1e1a] text-center space-y-6">
          <span className="text-xs font-mono text-[#c5a059] uppercase tracking-[0.25em] block">
            /// CRAFTSMANSHIP &amp; GUARANTEE
          </span>
          <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-light">
            Every artwork is calculated stitch by stitch on specialized color work grids to achieve exceptional portrait resolution, framed by raw textures for textile depth. Onyxx threads bridges traditional African iconography with contemporary fine art.
          </p>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="border-t border-[#1f1e1a] bg-[#050505] py-20 font-mono text-center space-y-6 text-xs text-stone-400"
        >
          <p className="text-white font-bold text-sm">ONYXX THREADS ACCRA</p>
          <p>WhatsApp / Call: +233 54 331 2793 • Email: {contactEmail}</p>
          <p className="text-stone-600">© 2026 ONYXX THREADS. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </main>
  );
}