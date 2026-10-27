"use client";

import { useState } from "react";

interface ArtPiece {
  id: string;
  title: string;
  category: "Portraiture" | "Wearable Art" | "Mixed-Media Fiber";
  specs: string;
  materials: string;
  status: string;
  description: string;
  priceTag?: string;
}

const GALLERY_PIECES: ArtPiece[] = [
  {
    id: "nkrumah",
    title: "Hi3ny3l) (Osagyefo Kwame Nkrumah)",
    category: "Portraiture",
    specs: "124 x 124 Grid (15,376 Stitches)",
    materials: "Milk cotton yarn",
    status: "Sold (Private Collector)",
    description: "Large-scale tapestry crochet portrait completed over a one-month period, capturing profound historical depth through meticulous stitch mapping.",
  },
  {
    id: "dromo",
    title: "Dromo ('Grace')",
    category: "Mixed-Media Fiber",
    specs: "90 x 108 Rows (9,720 Hand-Placed Stitches)",
    materials: "Milk cotton yarn & mixed media with physical cowrie necklace",
    status: "Available",
    description: "Monochromatic white tapestry portrait integrating an attached physical cowrie shell necklace, submitted to the 'Beyond Creation' international exhibition.",
  },
  {
    id: "catapult-portrait",
    title: "Nostalgic Childhood Tapestry Series",
    category: "Mixed-Media Fiber",
    specs: "242 x 300 Grid (72,600 Stitches)",
    materials: "Bouclé sand background, milk cotton subject, attached physical wooden catapult",
    status: "Exhibition Piece",
    description: "Large-scale mixed-texture tapestry portrait featuring an integrated physical wooden catapult fixed at the neck, exploring memory and tactile storytelling.",
  },
  {
    id: "ewia-kete-hat",
    title: "Ewia Kete Hat",
    category: "Wearable Art",
    specs: "Custom Headwear",
    materials: "5-ply / 4-ply milk cotton yarn with 4.5mm hook",
    status: "Available for Order",
    description: "Statement handmade headwear piece crafted with precise tension stability and structural definition.",
    priceTag: "350 GHS",
  },
  {
    id: "trinity-hat",
    title: "Trinity Hat",
    category: "Wearable Art",
    specs: "Pre-Order Multi-Panel Design",
    materials: "Milk cotton yarn",
    status: "Pre-Order",
    description: "Structured multi-panel custom crochet hat design with customizable colorway pairings.",
    priceTag: "350 - 400 GHS",
  },
];

export default function OnyxxThreadsGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece>(GALLERY_PIECES[0]);

  const filteredPieces =
    activeFilter === "All"
      ? GALLERY_PIECES
      : GALLERY_PIECES.filter((piece) => piece.category === activeFilter);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:px-16 md:py-16 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Brand Header */}
      <header className="border-b border-white/20 pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-xs text-white/50 tracking-widest uppercase block mb-2 font-mono">
            [ TAPESTRY PORTRAITURE // MIXED-MEDIA FIBER // WEARABLE ART ]
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            ONYXX THREADS
          </h1>
          <p className="text-xs text-white/70 tracking-widest uppercase mt-2 font-mono">
            Archival Gallery & Fiber Art Collection
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          <a
            href="https://wa.me/233543312793"
            target="_blank"
            rel="noreferrer"
            className="border border-white bg-white text-black px-6 py-3 font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all"
          >
            WhatsApp Inquiry (+233 54 331 2793) ↗
          </a>
        </div>
      </header>

      {/* Featured Piece Spotlight View */}
      <section className="border border-white/30 bg-neutral-950 p-8 md:p-12 mb-14 shadow-2xl">
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-xs text-white/50 font-mono tracking-widest uppercase">
              <span>{selectedPiece.category}</span>
              <span>/</span>
              <span className="text-white font-bold">{selectedPiece.status}</span>
              {selectedPiece.priceTag && (
                <>
                  <span>/</span>
                  <span className="text-neutral-300">{selectedPiece.priceTag}</span>
                </>
              )}
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              {selectedPiece.title}
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              {selectedPiece.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Specifications</span>
                <span className="text-white font-bold">{selectedPiece.specs}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Materials</span>
                <span className="text-white">{selectedPiece.materials}</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col gap-3 font-mono">
            <a
              href={`https://wa.me/233543312793?text=Hello,%20I%20would%20like%20to%20inquire%20about%20the%20art%20piece:%20${encodeURIComponent(
                selectedPiece.title
              )}`}
              target="_blank"
              rel="noreferrer"
              className="border border-white bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-widest text-center hover:bg-transparent hover:text-white transition-all"
            >
              Inquire About This Piece →
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 font-mono text-xs">
        {["All", "Portraiture", "Mixed-Media Fiber", "Wearable Art"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 uppercase tracking-widest border transition-all ${
              activeFilter === filter
                ? "border-white bg-white text-black font-bold"
                : "border-white/20 bg-transparent text-white/70 hover:border-white/60"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredPieces.map((piece) => (
          <div
            key={piece.id}
            onClick={() => setSelectedPiece(piece)}
            className={`border p-6 cursor-pointer transition-all flex flex-col justify-between gap-6 group ${
              selectedPiece.id === piece.id
                ? "border-white bg-neutral-900 shadow-lg"
                : "border-white/20 bg-neutral-950 hover:border-white/50"
            }`}
          >
            <div>
              <div className="flex justify-between items-center text-[10px] text-white/50 font-mono tracking-widest uppercase mb-3">
                <span>{piece.category}</span>
                <span className="text-white font-bold">{piece.status}</span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-neutral-300 transition-colors">
                {piece.title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                {piece.description}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs font-mono">
              <span className="text-white/50 text-[11px]">{piece.specs}</span>
              <span className="text-white group-hover:underline">View Spotlight →</span>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Commission Notice */}
      <footer className="border-t border-white/20 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-xs">
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-1 text-white">
            Custom Commissions & Exhibition Inquiries
          </h4>
          <p className="text-white/60 max-w-lg">
            Each tapestry and headwear piece is custom-mapped and handcrafted using premium milk cotton yarn. Reach out directly via WhatsApp or phone for custom portrait commissions.
          </p>
        </div>
        <a
          href="tel:+233543312793"
          className="border border-white/40 px-6 py-3 uppercase tracking-widest text-white hover:border-white transition-all"
        >
          Direct Line: +233 54 331 2793
        </a>
      </footer>
    </main>
  );
}