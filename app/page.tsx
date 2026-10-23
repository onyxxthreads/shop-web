"use client";

import React, { useState } from "react";

export default function OnyxxThreadsPage() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "bars.barbells@gmail.com";
  const contactPhone = "+233543312793";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const tapestryCollection = [
    {
      id: "nkrumah",
      title: "Hi3ny3l) ( Osagyefo Kwame Nkrumah )",
      subtitle: "MONUMENTAL PORTRAITURE // EDITION 01",
      stitchCount: "15,376 Stitches",
      gridSpecs: "124 x 124 Grid",
      materials: "Pure Milk Cotton Fiber",
      status: "Sold (Private Collection)",
      desc: "High-fidelity gridded tapestry portraiture probing historical memory, leadership, and Pan-African identity.",
      image: "/nkrumah.jpg",
    },
    {
      id: "dromo",
      title: "Dromo",
      subtitle: "SACRED GEOMETRY & MIXED MEDIA",
      stitchCount: "9,720 Hand-Placed Stitches",
      gridSpecs: "Custom Precision Grid",
      materials: "Milk Cotton & Natural Cowrie Shell Relics",
      status: "Available for Acquisition",
      desc: "9,720 hand-placed stitches anchored by an authentic cowrie shell artifact—exploring spiritual grace and West African symbolism.",
      image: "/dromo.jpg",
    },
    {
      id: "72k-portrait",
      title: "Monolithic Portraiture No. 1",
      subtitle: "ARCHIVAL TAPESTRY STUDY",
      stitchCount: "72,600 Stitches",
      gridSpecs: "242 x 300 Grid",
      materials: "4.5mm Hook, Milk Cotton & Textured Bouclé Sand",
      status: "Archival Masterpiece",
      desc: "A monumental fiber calculation contrasting raw bouclé background landscapes with high-density portrait colorwork.",
      image: "/monolithic.jpg",
    },
    {
      id: "nostalgia-series",
      title: "Childhood Nostalgia (3-Part Series)",
      subtitle: "TACTILE MEMORY & RELIC FIBER",
      stitchCount: "High-Density Gridded Crochet",
      gridSpecs: "Multi-Panel Series",
      materials: "3D Physical Artifacts (Bentua Catapult, Tin-Can Telephone, Cowrie Shells)",
      status: "In Progress / Active Gallery Series",
      desc: "A nostalgic exploration of Ghanaian childhood memories integrating physical heritage artifacts directly onto woven tapestry surfaces.",
      image: "/nostalgia.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070707] text-[#e8e6e1] font-sans antialiased selection:bg-[#c5a059] selection:text-black">
      {/* Ambient Light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#1c1813] blur-[180px] opacity-40" />
      </div>

      <div className="relative z-10">
        {/* Navigation Header */}
        <header className="border-b border-[#1f1e1a] bg-[#070707]/90 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shadow-[0_0_10px_#c5a059]" />
              <span className="text-xl font-black tracking-[0.2em] text-white uppercase font-mono">
                ONYXX THREADS
              </span>
            </div>
            <nav className="hidden md:flex gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-stone-400">
              <a href="#tapestry" className="hover:text-[#c5a059] transition-colors duration-200">Archive</a>
              <a href="#about" className="hover:text-[#c5a059] transition-colors duration-200">Craftsmanship</a>
              <a href="#contact" className="hover:text-[#c5a059] transition-colors duration-200">Acquisitions</a>
            </nav>
            <button
              onClick={handleCopyEmail}
              className="px-6 py-2.5 bg-[#c5a059] text-black font-mono font-bold text-[11px] uppercase tracking-[0.15em] rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-[#c5a059]/10"
            >
              {copied ? "Copied Email!" : "Private Inquiry"}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-28 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-9 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#2a2720] bg-[#12110e] text-[11px] font-mono tracking-[0.2em] text-[#c5a059]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" /> Bespoke Fiber Artistry &amp; Tapestry
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              ONYXX <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] via-[#e5c382] to-[#c5a059]">
                THREADS
              </span>
            </h1>

            <p className="text-stone-300 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
              High-fidelity tapestry crochet portraiture, mixed-media fiber art, and bespoke wearable artifacts engineered with mathematical stitch precision and West African cultural symbolism.
            </p>

            <div className="pt-4 flex flex-wrap gap-5 font-mono text-xs">
              <a
                href="#tapestry"
                className="px-8 py-4 bg-[#c5a059] text-black font-bold uppercase tracking-[0.15em] rounded-xl hover:bg-white transition-all duration-300 shadow-xl shadow-[#c5a059]/10"
              >
                Explore Catalog
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-8 py-4 border border-[#2a2720] bg-[#12110e] text-stone-300 font-bold uppercase tracking-[0.15em] rounded-xl hover:border-[#c5a059] hover:text-white transition-all duration-300"
              >
                Request Commission
              </button>
            </div>
          </div>
        </section>

        {/* TAPESTRY EXHIBITION GALLERY */}
        <section id="tapestry" className="border-t border-[#1f1e1a] bg-[#0b0b0a] py-32">
          <div className="max-w-7xl mx-auto px-8 space-y-20">
            
            {/* Gallery Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1f1e1a] pb-10">
              <div>
                <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-[0.25em] block mb-3">
                  /// CURATED ARCHIVE
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                  Tapestry Masterpieces
                </h2>
              </div>
              <p className="text-stone-400 text-sm max-w-md font-mono leading-relaxed">
                Each piece is cataloged with exact stitch density, structural yarn composition, and material provenance.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {tapestryCollection.map((artwork) => (
                <div
                  key={artwork.id}
                  className="border border-[#1f1e1a] bg-[#10100f] rounded-3xl p-8 space-y-8 flex flex-col justify-between hover:border-[#c5a059]/40 transition duration-500 group shadow-2xl"
                >
                  <div className="space-y-8">
                    {/* Artwork Image Frame */}
                    <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#070707] border border-[#1f1e1a] relative flex items-center justify-center">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                        onError={(e) => {
                          e.currentTarget.style.opacity = '0.3';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10100f] via-transparent to-transparent opacity-80" />
                      
                      {/* Floating Spec Badges */}
                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center z-10 font-mono text-[11px]">
                        <span className="bg-[#070707]/90 text-[#c5a059] border border-[#2a2720] px-3.5 py-1.5 rounded-lg backdrop-blur-md">
                          {artwork.stitchCount}
                        </span>
                        <span className="bg-[#070707]/90 text-stone-300 border border-[#2a2720] px-3.5 py-1.5 rounded-lg backdrop-blur-md">
                          {artwork.gridSpecs}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="space-y-3">
                      <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-[0.2em] block font-semibold">
                        {artwork.subtitle}
                      </span>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                        {artwork.title}
                      </h3>
                      <p className="text-stone-300 text-sm leading-relaxed font-light pt-1">
                        {artwork.desc}
                      </p>
                    </div>
                  </div>

                  {/* Provenance Card Footer */}
                  <div className="border-t border-[#1f1e1a] pt-5 space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-stone-400">
                      <span>Yarn &amp; Materials:</span>
                      <span className="text-stone-200 text-right">{artwork.materials}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#1f1e1a]">
                      <span className="text-stone-400">Availability:</span>
                      <span className={`font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                        artwork.status.includes("Sold") 
                          ? "bg-stone-900 text-stone-500 border border-stone-800" 
                          : "bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30"
                      }`}>
                        {artwork.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Philosophy & Craftsmanship Section */}
        <section id="about" className="max-w-5xl mx-auto px-8 py-36 space-y-10">
          <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-[0.25em] block">
            /// PHILOSOPHY &amp; TECHNIQUE
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            High-Density Fiber Engine &amp; Tactile Relics
          </h2>
          <div className="text-stone-300 text-lg md:text-xl leading-relaxed space-y-8 font-light border-l-2 border-[#c5a059]/40 pl-8">
            <p>
              Every artwork is calculated stitch by stitch on specialized color work grids to achieve exceptional portrait resolution , framed by raw textures for textile depth
            </p>
            <p>
              Onyxx threads bridges traditional African iconography with contemporary fine art
            </p>
          </div>
        </section>

        {/* Acquisition & Contact Footer */}
        <footer id="contact" className="border-t border-[#1f1e1a] bg-[#050505] py-28 font-mono">
          <div className="max-w-4xl mx-auto px-8 text-center space-y-10">
            <span className="text-[11px] text-[#c5a059] uppercase tracking-[0.25em] block">
              /// PRIVATE ACQUISITIONS &amp; COMMISSIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Inquire For Acquisition
            </h2>
            <p className="text-stone-400 max-w-lg mx-auto text-sm font-sans leading-relaxed">
              For private collection acquisitions, gallery curations, custom portrait commissions, and bespoke wearable garments:
            </p>

            <div className="pt-4 max-w-md mx-auto space-y-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/233543312793?text=Hello%20Onyxx%20Threads,%20I'd%20like%20to%20inquire%20about%20a%20private%20tapestry%20acquisition."
                target="_blank"
                rel="noreferrer"
                className="block w-full py-5 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-2xl shadow-2xl hover:bg-white transition-all duration-300 text-center"
              >
                Direct WhatsApp Inquiry &rarr;
              </a>

              {/* Call Button */}
              <a
                href={`tel:${contactPhone}`}
                className="block w-full py-4 border border-[#2a2720] bg-[#12110e] text-stone-300 font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:border-[#c5a059] transition-all duration-300 text-center"
              >
                Call +233 54 331 2793
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="block w-full py-4 border border-[#2a2720] bg-[#12110e] text-stone-300 font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:border-[#c5a059] transition-all duration-300 cursor-pointer"
              >
                {copied ? "✓ Email Copied to Clipboard!" : "Copy Acquisition Email"}
              </button>

              {/* Info Card */}
              <div className="border border-[#1f1e1a] bg-[#10100f] p-5 rounded-2xl space-y-3 text-xs">
                <div className="flex justify-between items-center text-stone-400">
                  <span>Direct Line / WhatsApp:</span>
                  <a href={`tel:${contactPhone}`} className="font-bold text-[#c5a059] hover:underline">
                    +233 54 331 2793
                  </a>
                </div>
                <div className="flex justify-between items-center text-stone-400 pt-2 border-t border-[#1f1e1a]">
                  <span>Curatorial Email:</span>
                  <span className="font-bold text-[#c5a059]">
                    {contactEmail}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-stone-600 pt-16">
              © 2026 ONYXX THREADS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}