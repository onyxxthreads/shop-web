"use client";

import React, { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  neonBorder: string;
  glowColor: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Trinity Tapestry Hat",
    category: "Hats",
    price: "$85",
    description: "Custom tapestry crochet bucket hat with structural multi-yarn weave.",
    mediaType: "video",
    mediaSrc: "/trinity-hat.mp4",
    neonBorder: "hover:border-fuchsia-500",
    glowColor: "shadow-fuchsia-500/20",
  },
  {
    id: "2",
    name: "Ewia Kete Hat",
    category: "Hats",
    price: "$95",
    description: "Handcrafted structured brim with bespoke geometric colorwork.",
    mediaType: "image",
    mediaSrc: "/ewia-kete.jpg",
    neonBorder: "hover:border-cyan-400",
    glowColor: "shadow-cyan-400/20",
  },
  {
    id: "3",
    name: "Koro Portrait Tapestry",
    category: "Tapestry",
    price: "Inquire for Pricing",
    description: "15,376-stitch fine art gridded tapestry portraiture featuring Kwame Nkrumah.",
    mediaType: "image",
    mediaSrc: "/koro.jpg",
    neonBorder: "hover:border-amber-400",
    glowColor: "shadow-amber-400/20",
  },
  {
    id: "4",
    name: "Aura Tapestry Dress",
    category: "Dress",
    price: "$240",
    description: "Form-fitting wearable textile art crafted with milk cotton.",
    mediaType: "image",
    mediaSrc: "/aura-dress.jpg",
    neonBorder: "hover:border-purple-500",
    glowColor: "shadow-purple-500/20",
  },
];

export default function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { isSignedIn, isLoaded } = useAuth();

  const categories = ["All", "Tapestry", "Hats", "Dress", "Tops", "Bottoms"];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-mono synthwave-grid relative selection:bg-fuchsia-500 selection:text-white">
      {/* Top Synthwave Banner */}
      <div className="bg-gradient-to-r from-fuchsia-900 via-purple-900 to-cyan-900 border-b border-fuchsia-500/40 text-center py-2 text-xs font-bold tracking-widest text-cyan-300 uppercase neon-text-cyan">
        ⚡ SYNTHWAVE COLLECTION // COMMISSIONS OPEN // WORLDWIDE SHIPPING ⚡
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-fuchsia-500/30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400 neon-text-pink uppercase">
            ONYXX_THREADS
          </span>
        </div>

        {/* Clerk Authentication Header */}
        <div className="flex items-center gap-4">
          {!isLoaded ? (
            <div className="h-8 w-20 bg-slate-900 animate-pulse rounded border border-fuchsia-500/20" />
          ) : !isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-200 transition">
                  [Sign In]
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:from-fuchsia-500 hover:to-pink-400 text-white rounded transition shadow-lg shadow-fuchsia-500/30 border border-fuchsia-400">
                  Join Grid
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
          WEARABLE ART <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 neon-text-cyan">// TAPESTRY</span>
        </h1>
        <p className="mt-3 text-cyan-200/70 max-w-2xl text-xs sm:text-sm leading-relaxed tracking-wide uppercase">
          Handcrafted tapestry crochet portraiture, structural headwear, and bespoke textile artifacts engineered in high density.
        </p>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex gap-3 overflow-x-auto pb-2 border-b border-fuchsia-500/20 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-bold tracking-widest uppercase transition whitespace-nowrap rounded ${
                selectedCategory === cat
                  ? "bg-fuchsia-600 text-white border border-fuchsia-400 shadow-lg shadow-fuchsia-500/50 neon-text-pink"
                  : "bg-slate-900/80 text-cyan-400 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Synthwave Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group bg-slate-900/90 border border-slate-800 ${product.neonBorder} transition duration-300 rounded-lg overflow-hidden shadow-2xl ${product.glowColor} hover:shadow-2xl flex flex-col justify-between`}
            >
              {/* Media Container */}
              <div className="relative w-full h-80 bg-slate-950 overflow-hidden flex items-center justify-center border-b border-slate-800">
                {product.mediaType === "video" ? (
                  <video
                    src={product.mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-cyan-500/40 text-xs tracking-widest uppercase">
                    [{product.name} Display]
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-slate-950/90 text-fuchsia-400 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-fuchsia-500/40 shadow-sm">
                  {product.category}
                </span>
              </div>

              {/* Info Container */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-slate-900/60">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition tracking-wide uppercase">
                      {product.name}
                    </h3>
                    <span className="text-sm font-bold text-fuchsia-400 neon-text-pink">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {product.description}
                  </p>
                </div>

                <button className="mt-6 w-full py-2.5 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-cyan-500/20 hover:from-cyan-500 hover:to-fuchsia-500 text-cyan-300 hover:text-white text-xs font-bold tracking-widest uppercase border border-cyan-500/50 hover:border-fuchsia-400 rounded transition duration-200 shadow-md">
                  Acquire Piece
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}