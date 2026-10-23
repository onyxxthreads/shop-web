"use client";

import React, { useState } from "react";

export default function OnyxxThreadsPage() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "onyxxthreads@gmail.com";
  const contactPhone = "+233543312793";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Featured Tapestry Masterpieces Catalog
  const tapestryCollection = [
    {
      id: "koro",
      title: "Koro",
      subtitle: "Kwame Nkrumah Portraiture",
      stitchCount: "15,376 Stitches",
      gridSpecs: "124 x 124 Grid",
      materials: "4-ply Milk Cotton, Mixed Fibers",
      status: "Private Collection (Exhibited at 'African Spaces Redefined')",
      desc: "High-fidelity gridded portrait celebrating iconic Ghanaian heritage and historical memory.",
      image: "/tapestry-koro.jpg",
    },
    {
      id: "72k-portrait",
      title: "Monolithic Portraiture No. 1",
      subtitle: "Large-Scale Gridded Portrait",
      stitchCount: "72,600 Stitches",
      gridSpecs: "242 x 300 Grid",
      materials: "4.5mm Hook, Milk Cotton & Textured Bouclé Sand Background",
      status: "Archival Masterpiece",
      desc: "Massive scale tapestry crochet study exploring raw tonal contrasts, structural yarn blending, and bouclé tactile background landscapes.",
      image: "/tapestry-72k.jpg",
    },
    {
      id: "dromo",
      title: "Dromo",
      subtitle: "Fine Art Tapestry",
      stitchCount: "Tapestry Colorwork",
      gridSpecs: "Custom Precision Grid",
      materials: "Milk Cotton & Specialty Yarns",
      status: "Exhibited Work",
      desc: "Tactile fiber art piece probing spiritual symbolism, monochrome depth, and West African spatial concepts.",
      image: "/tapestry-dromo.jpg",
    },
    {
      id: "nostalgia-series",
      title: "Childhood Nostalgia (3-Part Series)",
      subtitle: "Mixed-Media Fiber Tapestry",
      stitchCount: "High-Density Gridded Crochet",
      gridSpecs: "Multi-Panel Series",
      materials: "3D Physical Artifacts (Bentua Catapult, Tin-Can Telephone, Cowrie Shells)",
      status: "In Progress / Active Gallery Series",
      desc: "A nostalgic exploration of Ghanaian childhood memories integrating raw physical objects directly onto fine-art tapestry surfaces.",
      image: "/tapestry-nostalgia.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e0] font-sans tracking-tight">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1e1b18] blur-[160px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2a221b] blur-[160px] opacity-40" />
      </div>

      <div className="relative z-10">
        {/* Navigation Header */}
        <header className="border-b border-[#222220] bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4a373] animate-pulse" />
              <span className="text-xl font-black tracking-widest text-white uppercase font-mono">
                ONYXX THREADS
              </span>
            </div>
            <nav className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-stone-400">
              <a href="#tapestry" className="hover:text-[#d4a373] transition">Tapestry Art</a>
              <a href="#about" className="hover:text-[#d4a373] transition">Philosophy</a>
              <a href="#contact" className="hover:text-[#d4a373] transition">Commissions</a>
            </nav>
            <button
              onClick={handleCopyEmail}
              className="px-5 py-2.5 bg-[#d4a373] text-[#0a0a0a] font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-90 transition font-mono"
            >
              {copied ? "Copied Email!" : "Commission Work"}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#222220] bg-[#141412] text-xs font-mono text-[#d4a373]">
              <span>///</span> FINE ART TAPESTRY CROCHET &amp; WEARABLE ART
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              ONYXX <br />
              <span className="text-[#d4a373]">THREADS</span>
            </h1>

            <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              High-fidelity tapestry crochet portraiture, mixed-media fiber art, and bespoke wearable garments engineered with mathematical precision and West African cultural symbolism.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 font-mono">
              <a
                href="#tapestry"
                className="px-8 py-4 bg-[#d4a373] text-[#0a0a0a] font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-90 transition"
              >
                View Tapestry Gallery
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-8 py-4 border border-[#222220] bg-[#141412] text-stone-300 font-bold text-xs uppercase tracking-widest rounded-xl hover:border-[#d4a373] transition"
              >
                Inquire For Custom Piece
              </button>
            </div>
          </div>
        </section>

        {/* TAPESTRY ARTWORK SHOWCASE SECTION */}
        <section id="tapestry" className="border-t border-[#222220] bg-[#0e0e0c] py-28">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222220] pb-8">
              <div>
                <span className="text-xs font-mono text-[#d4a373] uppercase tracking-widest block mb-2">
                  /// EXHIBITION CATALOG
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                  Tapestry Works &amp; Fine Art
                </h2>
              </div>
              <p className="text-stone-400 text-sm max-w-md font-mono">
                A curated archive of high-density tapestry crochet portraits, structural fiber calculations, and tactile mixed-media artifacts.
              </p>
            </div>

            {/* Tapestry Gallery Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {tapestryCollection.map((artwork) => (
                <div
                  key={artwork.id}
                  className="border border-[#222220] bg-[#141412] rounded-3xl p-6 space-y-6 flex flex-col justify-between hover:border-[#d4a373]/50 transition duration-300 group"
                >
                  <div className="space-y-6">
                    {/* Artwork Preview Display */}
                    <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#222220] relative flex items-center justify-center">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                      
                      {/* Overlay Specs Badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10 font-mono text-[11px]">
                        <span className="bg-[#0a0a0a]/90 text-[#d4a373] border border-[#222220] px-3 py-1 rounded-lg">
                          {artwork.stitchCount}
                        </span>
                        <span className="bg-[#0a0a0a]/90 text-stone-400 border border-[#222220] px-3 py-1 rounded-lg">
                          {artwork.gridSpecs}
                        </span>
                      </div>
                    </div>

                    {/* Meta & Title */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-[#d4a373] uppercase tracking-widest block">
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

                  {/* Artwork Technical Details */}
                  <div className="border-t border-[#222220] pt-4 space-y-2 font-mono text-xs">
                    <div className="flex justify-between text-stone-400">
                      <span>Materials:</span>
                      <span className="text-stone-200 text-right">{artwork.materials}</span>
                    </div>
                    <div className="flex justify-between text-stone-400 pt-1">
                      <span>Status:</span>
                      <span className="text-[#d4a373] text-right font-bold">{artwork.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Philosophy & Craftsmanship Section */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-28 space-y-8">
          <span className="text-xs font-mono text-[#d4a373] uppercase tracking-widest block">
            /// THE MEDIUM &amp; PROCESS
          </span>
          <h2 className="text-4xl font-black text-white uppercase tracking-tight">
            High-Density Fiber &amp; Tactile Storytelling
          </h2>
          <div className="text-stone-300 text-lg leading-relaxed space-y-6 font-light">
            <p>
              Each tapestry artwork is calculated stitch-by-stitch on custom grids—utilizing 4.5mm hooks paired with 4-ply and 5-ply milk cotton yarns for high-density colorwork, contrasted against raw bouclé textures for sculptural background landscapes.
            </p>
            <p>
              Integrating physical 3D objects directly into textile surfaces—such as cowrie shells, wooden catapults (*bentua*), and turritella screw shells—Onyxx Threads bridges traditional West African symbolism with contemporary, avant-garde fiber portraiture.
            </p>
          </div>
        </section>

        {/* Contact, Call & WhatsApp Footer */}
        <footer id="contact" className="border-t border-[#222220] bg-[#070706] py-24 font-mono">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="text-xs text-[#d4a373] uppercase tracking-widest block">
              /// COMMISSIONS &amp; EXHIBITION INQUIRIES
            </span>
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Commission a Tapestry Piece
            </h2>
            <p className="text-stone-400 max-w-lg mx-auto text-sm font-sans">
              For custom portrait tapestries, gallery exhibitions, private art acquisitions, and bespoke wearable garments:
            </p>

            <div className="pt-4 max-w-md mx-auto space-y-4">
              {/* WhatsApp Direct Messaging Button */}
              <a
                href="https://wa.me/233543312793?text=Hello%20Onyxx%20Threads,%20I'd%20like%20to%20inquire%20about%20a%20custom%20tapestry%20commission."
                target="_blank"
                rel="noreferrer"
                className="block w-full py-5 bg-[#d4a373] text-[#0a0a0a] font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:opacity-90 transition text-center"
              >
                Message on WhatsApp &rarr;
              </a>

              {/* Call Direct Button */}
              <a
                href={`tel:${contactPhone}`}
                className="block w-full py-4 border border-[#222220] bg-[#141412] text-stone-300 font-bold text-xs uppercase tracking-widest rounded-2xl hover:border-[#d4a373] transition text-center"
              >
                Call +233 54 331 2793
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="block w-full py-4 border border-[#222220] bg-[#141412] text-stone-300 font-bold text-xs uppercase tracking-widest rounded-2xl hover:border-[#d4a373] transition cursor-pointer"
              >
                {copied ? "✓ Email Copied to Clipboard!" : "Copy Inquiry Email"}
              </button>

              {/* Contact Information Display Card */}
              <div className="border border-[#222220] bg-[#141412] p-4 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between items-center text-stone-400">
                  <span>Phone &amp; WhatsApp:</span>
                  <a href={`tel:${contactPhone}`} className="font-bold text-[#d4a373] hover:underline">
                    +233 54 331 2793
                  </a>
                </div>
                <div className="flex justify-between items-center text-stone-400 pt-1 border-t border-[#222220]">
                  <span>Direct Email:</span>
                  <span className="font-bold text-[#d4a373]">
                    onyxxthreads@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-600 pt-12">
              © 2026 ONYXX THREADS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}